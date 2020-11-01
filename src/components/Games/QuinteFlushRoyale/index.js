// Import node_modules

import React, { useEffect } from 'react';
import {
  Loader,
  Form,
  Header,
  Input,
  Button,
  Label,
  Menu,
  Icon,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

// Import local

import Rules from 'src/containers/Games/QuinteFlushRoyale/Rules';
import CancelModal from 'src/components/Games/CancelModal';
import './quinteflushroyale.scss';

const QuinteFlushRoyale = (props) => {
  const {
    rues,
    team,
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
  } = props;

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
    stopGame();
  };

  /**
   * Construct HTML response with question params
   * @param {object} element - Question object
   */
  const construct = (element) => (
    <>
      <CancelModal />
      <Menu compact>
        <Menu.Item as="a">
          <Icon name="check" /> Bonnes réponses
          <Label color="teal" floating className="toLeft">
            {goodAnswers}
          </Label>
        </Menu.Item>
        <Menu.Item as="a">
          Mauvaises réponses <Icon name="delete" />
          <Label color="red" floating className="toRight">
            {badAnswers.length}
          </Label>
        </Menu.Item>
      </Menu>
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
    // Events listeners

    if (
      gameStarted
      && startTime !== 0
      && (goodAnswers + badAnswers.length) === rues.length
    ) handleEndGame();

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
            <h3>Bravo! Tu as terminé!</h3>
          </>
        )
      }
    </>
  );
};

// Checking proptypes

QuinteFlushRoyale.defaultProps = {
  gameStarted: false,
  rues: [],
  team: 0,
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
};

QuinteFlushRoyale.propTypes = {
  gameStarted: PropTypes.bool,
  rues: PropTypes.array,
  team: PropTypes.number,
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
};

export default QuinteFlushRoyale;
