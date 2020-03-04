import React, { useEffect } from 'react';
import { Loader, Dimmer, Form, Input, Button } from 'semantic-ui-react';
import Axios from 'axios';
import Countdown from 'react-countdown-now';
import PropTypes from 'prop-types';

import CancelModal from 'src/components/TimeAttack/CancelModal';
import Game from 'src/containers/TimeAttack/Game';

const TimeAttackGame = (props) => {
  const {
    token,
    stopTimeAttack,
    startTime,
    startChrono,
    endChrono,
    resetChrono,
    setQuestions,
    questions,
  } = props;

  const streetsSelected = [];
  let streets = 0;
  // eslint-disable-next-line no-unused-vars, prefer-const
  let points = 0;
  const streetsArray = [];

  const selectRandomStreet = (nbOfStreets) => {
    while (streetsSelected.length < 20) {
      const selected = Math.ceil(Math.random() * (nbOfStreets - 1));
      if (!streetsSelected.includes(selected)) {
        streetsSelected.push(selected);
      }
    }
  };

  const renderer = ({ seconds }) => (
    <span>{seconds}</span>
  );

  useEffect(() => {
    if (questions.length === 0) {
      Axios.get('http://back.quizztg.fr/api/rues', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .catch()
        .then((response) => {
          streets = response.data['hydra:totalItems'];
          selectRandomStreet(streets);
          const streetsGet = response.data['hydra:member'];
          streetsSelected.forEach((item) => {
            streetsArray.push(streetsGet.find((element) => element.id === item));
          });
          setQuestions(streetsArray);
          startChrono();
        });
    }
    else if (startTime === null) {
      startChrono();
    }
  });

  return (
    <>
      {(questions !== null && questions.length === 20) ? (
        <>
          <CancelModal
            endChrono={endChrono}
            resetChrono={resetChrono}
            stopTimeAttack={stopTimeAttack}
          />
          {(startTime === null) ? (
            <>
              <p>Le jeu commence dans:</p>
              <Countdown
                date={Date.now() + 2000}
                renderer={renderer}
              />
            </>
          ) : (
            <>
              <Game />
            </>
          )}
        </>
      ) : (
        <Dimmer active>
          <Loader size="massive">Chargement...</Loader>
        </Dimmer>
      )}
    </>
  );
};

TimeAttackGame.defaultProps = {
  token: null,
  stopTimeAttack: null,
  setRues: null,
  rues: 0,
  startTime: undefined,
  startChrono: null,
  endChrono: null,
  resetChrono: null,
  seconds: null,
};

TimeAttackGame.propTypes = {
  token: PropTypes.string,
  stopTimeAttack: PropTypes.func,
  setRues: PropTypes.func,
  rues: PropTypes.array,
  startTime: PropTypes.number,
  startChrono: PropTypes.func,
  endChrono: PropTypes.func,
  resetChrono: PropTypes.func,
  // eslint-disable-next-line react/no-unused-prop-types
  seconds: PropTypes.number,
};

export default TimeAttackGame;
