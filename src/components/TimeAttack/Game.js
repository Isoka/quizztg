import React, { useEffect } from 'react';
import {
  Form,
  Input,
  Header,
  Button,
  Dimmer,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import Countdown from 'react-countdown-now';

const Game = (props) => {
  const {
    controlChamp,
    answer,
    questions,
    setGoodAnswers,
    setBadAnswers,
    // eslint-disable-next-line no-unused-vars
    goodAnswers,
    badAnswers,
    resetBadAnswers,
    setQuestions,
    nbOfQuestions,
    type,
    startChrono,
    // eslint-disable-next-line no-unused-vars
    resetChrono,
    startTime,
    increment,
    iteration,
    // eslint-disable-next-line no-unused-vars
    resetQuestions,
    resetIncrement,
    stopTimeAttack,
  } = props;

  let streetsSelected = [];
  const streetsArray = [];
  let finalTime = 0;

  const selectRandomStreet = (nbOfStreets) => {
    while (streetsSelected.length < nbOfQuestions) {
      const selected = Math.ceil(Math.random() * (nbOfStreets - 1));
      if (!streetsSelected.includes(selected)) {
        streetsSelected.push(selected);
      }
    }
  };

  function handleStartGame(falseStreets) {
    Axios.get('http://back.quizztg.fr/api/rues', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((response) => {
        const streets = response.data['hydra:totalItems'];
        if (falseStreets === undefined) {
          selectRandomStreet(streets);
        }
        else {
          streetsSelected = falseStreets;
        }
        const streetsGet = response.data['hydra:member'];
        streetsSelected.forEach((item) => {
          streetsArray.push(streetsGet.find((element) => element.id === item));
        });
        if (iteration !== 0) {
          resetIncrement();
        }
        if (badAnswers.length !== 0) {
          resetBadAnswers();
        }
        setQuestions(streetsArray);
      });
  }

  function handleChange(e, { name, value }) {
    controlChamp(name, value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (iteration < questions.length) {
      if (questions[iteration].tournee.name === parseInt(`52${answer}`, 10)) {
        // eslint-disable-next-line no-console
        console.info('[INFO] Bonne réponse!');
        setGoodAnswers();
      }
      else {
        const badAnswerVar = badAnswers;
        badAnswerVar.push(questions[iteration].id);
        setBadAnswers(badAnswerVar);
      }
      increment(iteration);
    }
  };

  const renderer = ({ seconds }) => (
    <span>{seconds}</span>
  );

  const handleEndGame = () => {
    if (type === 'timeattack' && badAnswers.length !== 0) {
      handleStartGame(badAnswers);
    }
    else {
      finalTime = Date.now() - startTime;
      return true;
    }
    // resetChrono();
    return false;
  };

  const construct = (element) => (
    <>
      <h2>Question {iteration + 1} sur {questions.length}</h2>
      <Form onSubmit={handleSubmit}>
        <Header>{element.name}</Header>
        <Form.Field>
          <Input type="text" name="answer" id={element.id} onChange={handleChange} autoFocus />
        </Form.Field>
        <Form.Field>
          <Button type="submit">Envoyer</Button>
        </Form.Field>
      </Form>
    </>
  );

  useEffect(() => {
    if (questions.length === 0) {
      if (badAnswers.length === 0) {
        handleStartGame();
        setTimeout(() => {
          startChrono();
        }, 5000);
      }
    }
    return undefined;
  });

  return (
    <>
      {(iteration !== questions.length) ? (
        <>
          {(startTime !== 0) ? (
            <React.Fragment key={iteration}>
              {construct(questions[iteration])}
            </React.Fragment>
          ) : (
            <Dimmer active>
              <p>Le jeu commence dans :</p>
              <Countdown date={Date.now() + 4000} renderer={renderer} />
            </Dimmer>
          )}
        </>
      ) : (
        <>
          {(handleEndGame() === true) && (
            <>
              <Button type="button" size="massive" onClick={stopTimeAttack}>Retour a la page du jeu</Button>
              <p>Gagné! En {finalTime / 1000} secondes!</p>
            </>
          )}
        </>
      )}
    </>
  );
};

Game.defaultProps = {
  questions: null,
  increment: null,
  iteration: null,
  controlChamp: null,
  answer: null,
  setGoodAnswers: null,
  setBadAnswers: null,
  goodAnswers: null,
  badAnswers: null,
  seconds: null,
  resetQuestions: null,
  resetIncrement: null,
  stopTimeAttack: null,
  resetBadAnswers: null,
  setQuestions: null,
  nbOfQuestions: null,
  type: null,
  startChrono: null,
  resetChrono: null,
  startTime: null,
};

Game.propTypes = {
  questions: PropTypes.array,
  increment: PropTypes.func,
  iteration: PropTypes.number,
  controlChamp: PropTypes.func,
  answer: PropTypes.string,
  setGoodAnswers: PropTypes.func,
  setBadAnswers: PropTypes.func,
  goodAnswers: PropTypes.number,
  badAnswers: PropTypes.array,
  // eslint-disable-next-line react/no-unused-prop-types
  seconds: PropTypes.number,
  resetQuestions: PropTypes.func,
  resetIncrement: PropTypes.func,
  stopTimeAttack: PropTypes.func,
  resetBadAnswers: PropTypes.func,
  setQuestions: PropTypes.func,
  nbOfQuestions: PropTypes.number,
  type: PropTypes.string,
  startChrono: PropTypes.func,
  resetChrono: PropTypes.func,
  startTime: PropTypes.number,
};

export default Game;
