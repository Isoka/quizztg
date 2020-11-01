/* eslint-disable no-console */
// Import node_modules

import React, { useEffect } from 'react';
import {
  Loader,
  Form,
  Header,
  Input,
  Button,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Countdown from 'react-countdown-now';

// Import local

import { nbOfQuestionsExamen, totalTimeExamen } from 'src/config/gamesConfig';

import Rules from 'src/containers/Games/Examen/Rules';
import CancelModal from 'src/components/Games/CancelModal';
import Chronoended from './Chronoended';
import './examen.scss';

const Examen = (props) => {
  const {
    rues,
    gameStarted,
    controlChamp,
    answer,
    setGoodAnswers,
    setBadAnswers,
    badAnswers,
    increment,
    iteration,
    stopGame,
    goodAnswers,
    startTime,
    startChrono,
    stockRues,
  } = props;

  const countdownRenderer = ({ minutes, seconds, completed }) => {
    if (!completed) {
      return (
        <>
          <p>Temps restant</p>
          <p>{minutes}:{seconds}</p>
        </>
      );
    }

    return null;
  };

  /**
   * Form inputs control
   * @param {object} e - Form event *Unused*
   * @param {string} name - Inputs name
   * @param {string} value - Inputs value
   */
  const handleChange = (e, { name, value }) => {
    controlChamp(name, value);
  };

  /**
   * Handle form submit
   * @param {object} e - Form event
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (iteration < rues.length) {
      if (rues[iteration].tournee.name === parseInt(`52${answer}`, 10)) {
        setGoodAnswers();
        controlChamp('answer', '');
      }
      else {
        const badAnswerVar = badAnswers;
        badAnswerVar.push(rues[iteration].id);
        setBadAnswers(badAnswerVar);
      }
      controlChamp('answer', '');
      increment(iteration);
    }
  };

  /**
   * Event for ending game
   */
  const handleEndGame = () => {
    console.info(`[INFO] {${goodAnswers}+${badAnswers.length}}`);
    stopGame();
  };

  /**
   * Construct HTML response with question params
   * @param {object} element - Question object
   */
  const construct = (element) => (
    <>
      <CancelModal />
      <Countdown
        date={startTime + totalTimeExamen}
        renderer={countdownRenderer}
        onComplete={handleEndGame}
      />
      {goodAnswers + badAnswers.length}
      <h2>Question {iteration + 1} sur {rues.length}</h2>
      <Form onSubmit={handleSubmit}>
        <Header>{element.fullstreetname}{(element.options !== null) && ` N° ${element.options}`}</Header>
        <Form.Field>
          <Input
            type="text"
            name="answer"
            id={element.id}
            value={(answer !== undefined || answer !== null) && answer}
            onChange={handleChange}
            autoFocus
            className="answer"
          />
        </Form.Field>
        <Form.Field>
          <Button type="submit">Envoyer</Button>
        </Form.Field>
      </Form>
    </>
  );

  /**
   * Like it's name, displays rules!
   */
  const watchRules = () => {
    if (rues.length !== 0) {
      return (
        <>
          <Rules />
        </>
      );
    }
    return (
      <>
        <p>Chargement...</p>
        <Loader active size="massive" />
      </>
    );
  };

  useEffect(() => {
    /**
     * Questions list reduction for TimeAttack
     */

    const streetsArray = [];

    if (rues !== null && rues.length > nbOfQuestionsExamen) {
      const streetsSelected = [];

      const selectRandomStreet = (nbOfStreets) => {
        while (streetsSelected.length < nbOfQuestionsExamen) {
          const selected = Math.ceil(Math.random() * (nbOfStreets - 1));

          if (!streetsSelected.includes(selected)) {
            streetsSelected.push(selected);
          }
        }
      };
      selectRandomStreet(rues.length);
      streetsSelected.forEach((item) => {
        streetsArray.push(rues[item]);
      });
      stockRues(streetsArray);
    }

    /**
     * Event listeners
     */

    /**
     * End of game detection
     */
    if (
      gameStarted
      && startTime !== 0
      && goodAnswers + badAnswers.length === rues.length
    ) handleEndGame();

    /**
     * Start chrono
     */
    if (
      gameStarted
      && startTime === 0
    ) startChrono();
  });

  return (
    <>
      {
        (
          !gameStarted
          && startTime === 0
        )
          && watchRules()
      }
      {
        gameStarted
        && startTime !== 0
        && goodAnswers + badAnswers.length !== rues.length
          && construct(rues[iteration])
      }
      {
      (
        !gameStarted
        && rues.length === iteration
        && startTime !== 0
      )
        && (
          <>
            <Chronoended nbOfErrors={badAnswers.length} />
          </>
        )
      }
      {
      (
        !gameStarted
        && startTime !== 0
        && rues.length !== iteration
      )
        && (
          <Chronoended chrono />
        )
      }
    </>
  );
};

// Checking proptypes

Examen.defaultProps = {
  gameStarted: false,
  rues: [],
  setGoodAnswers: null,
  increment: null,
  iteration: 0,
  setBadAnswers: null,
  controlChamp: null,
  answer: null,
  badAnswers: [],
  stopGame: null,
  goodAnswers: null,
  startChrono: null,
  startTime: 0,
  stockRues: undefined,
};

Examen.propTypes = {
  gameStarted: PropTypes.bool,
  rues: PropTypes.array,
  setGoodAnswers: PropTypes.func,
  increment: PropTypes.func,
  iteration: PropTypes.number,
  setBadAnswers: PropTypes.func,
  controlChamp: PropTypes.func,
  answer: PropTypes.string,
  badAnswers: PropTypes.array,
  stopGame: PropTypes.func,
  goodAnswers: PropTypes.number,
  startChrono: PropTypes.func,
  startTime: PropTypes.number,
  stockRues: PropTypes.func,
};

export default Examen;
