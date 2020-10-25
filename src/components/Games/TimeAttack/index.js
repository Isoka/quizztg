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

// Import local

import Rules from 'src/containers/Games/TimeAttack/Rules';
import './TimeAttack.scss';
import { nbOfQuestions } from 'src/config/gamesConfig';

const TimeAttack = (props) => {
  const {
    rues,
    stockRues,
    team,
    timeAttackStarted,
    controlChamp,
    answer,
    setGoodAnswers,
    setBadAnswers,
    badAnswers,
    resetBadAnswers,
    startChrono,
    startTime,
    increment,
    iteration,
    resetIncrement,
    stopTimeAttack,
    goodAnswers,
    resetGoodAnswers,
    setTotalTime,
    totalTime,
  } = props;

  /**
   * Inputs control
   * @param {object} e - Form event
   * @param {string} name - Input's name
   * @param {string} value - Input's value
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
   * Event for restarting game
   */
  const handleRestartGame = () => {
    const streetsArray = [];
    badAnswers.forEach((item) => {
      streetsArray.push(rues.find((element) => element.id === item));
    });

    resetBadAnswers();
    resetIncrement();
    stockRues(streetsArray);
  };

  /**
   * Event for ending game
   */
  const handleEndGame = () => {
    const totalTimestamp = Date.now() - startTime;
    const totalTimeRegistered = new Date(totalTimestamp);
    resetGoodAnswers();
    stopTimeAttack();
    setTotalTime(totalTimeRegistered);
  };

  /**
   * Construct HTML response with question params
   * @param {object} element - Question object
   */
  const construct = (element) => (
    <>
      <h2>Question {iteration + 1} sur {rues.length}</h2>
      <Form onSubmit={handleSubmit}>
        <Header>{element.fullstreetname}{(element.options !== null) && ` N° ${element.options}`}</Header>
        <Form.Field>
          <Input type="text" name="answer" id={element.id} value={(answer !== undefined || answer !== null) && answer} onChange={handleChange} autoFocus />
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
    if (rues !== undefined && rues.length === nbOfQuestions) {
      return (
        <>
          {team !== 0 && <h1>Equipe {team}</h1>}
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
    // Questions list reduction for TimeAttack

    const streetsArray = [];

    if (rues !== null && rues.length > nbOfQuestions) {
      const streetsSelected = [];

      const selectRandomStreet = (nbOfStreets) => {
        while (streetsSelected.length < nbOfQuestions) {
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

    // Events listeners

    if (iteration === rues.length && badAnswers.length !== 0) handleRestartGame(badAnswers);

    if (timeAttackStarted && startTime !== 0 && goodAnswers === nbOfQuestions) handleEndGame();

    if (timeAttackStarted && startTime === 0) startChrono();
  });

  return (
    <>
      {(timeAttackStarted === false && startTime === 0) && watchRules()}
      {
        (timeAttackStarted && startTime !== 0 && rues.length !== iteration)
          && construct(rues[iteration])
      }
      {
      (
        timeAttackStarted === false
        && startTime !== 0
      )
        && (
          <>
            <h3>Bravo! Tu as terminé le contre-la-montre!</h3>
            <p>Ton temps est de
              {totalTime.getMinutes() !== 0 && ` ${totalTime.getMinutes()} minutes et `}
              {totalTime.getSeconds() !== 0 && ` ${totalTime.getSeconds()} secondes`}
            </p>
          </>
        )
      }
    </>
  );
};

// Checking proptypes

TimeAttack.defaultProps = {
  timeAttackStarted: false,
  rues: [],
  stockRues: null,
  team: 0,
  startChrono: null,
  startTime: 0,
  setGoodAnswers: null,
  increment: null,
  iteration: 0,
  setBadAnswers: null,
  controlChamp: null,
  answer: null,
  badAnswers: [],
  resetIncrement: null,
  stopTimeAttack: null,
  goodAnswers: null,
  resetGoodAnswers: null,
  setTotalTime: null,
  totalTime: null,
  resetBadAnswers: null,
};

TimeAttack.propTypes = {
  timeAttackStarted: PropTypes.bool,
  rues: PropTypes.array,
  stockRues: PropTypes.func,
  team: PropTypes.number,
  startChrono: PropTypes.func,
  startTime: PropTypes.number,
  setGoodAnswers: PropTypes.func,
  increment: PropTypes.func,
  iteration: PropTypes.number,
  setBadAnswers: PropTypes.func,
  controlChamp: PropTypes.func,
  answer: PropTypes.string,
  badAnswers: PropTypes.array,
  resetIncrement: PropTypes.func,
  stopTimeAttack: PropTypes.func,
  goodAnswers: PropTypes.number,
  resetGoodAnswers: PropTypes.func,
  setTotalTime: PropTypes.func,
  totalTime: PropTypes.string,
  resetBadAnswers: PropTypes.func,
};

export default TimeAttack;
