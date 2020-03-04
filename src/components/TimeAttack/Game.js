import React from 'react';
import {
  Form,
  Input,
  Header,
  Button,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Game = (props) => {
  const {
    questions,
    increment,
    iteration,
    controlChamp,
    answer,
    setGoodAnswers,
    setBadAnswers,
    // eslint-disable-next-line no-unused-vars
    goodAnswers,
    badAnswers,
  } = props;

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

  const handleEndGame = () => {
    // eslint-disable-next-line no-console
    console.log('Terminé!');
  };

  const construct = (element) => (
    <>
      <Form onSubmit={handleSubmit}>
        <Header>{element.name}</Header>
        <Form.Field>
          <Input type="text" name="answer" id={element.id} onChange={handleChange} />
        </Form.Field>
        <Form.Field>
          <Button type="submit">Envoyer</Button>
        </Form.Field>
      </Form>
    </>
  );

  return (
    <>
      {(questions[iteration] !== undefined) ? (
        <React.Fragment key={iteration}>
          {construct(questions[iteration])}
        </React.Fragment>
      ) : (
        <>
          {handleEndGame()}
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
};

Game.propTypes = {
  questions: PropTypes.object,
  increment: PropTypes.func,
  iteration: PropTypes.number,
  controlChamp: PropTypes.string,
  answer: PropTypes.string,
  setGoodAnswers: PropTypes.func,
  setBadAnswers: PropTypes.func,
  goodAnswers: PropTypes.number,
  badAnswers: PropTypes.array,
};

export default Game;
