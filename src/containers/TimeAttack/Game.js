import { connect } from 'react-redux';

import Game from 'src/components/TimeAttack/Game';
import {
  increment,
  controlChamp,
  setBadAnswers,
  setGoodAnswers,
  setQuestions,
  startChrono,
  resetBadAnswers,
  resetQuestions,
  reload,
  resetIncrement,
  resetChrono,
  stopTimeAttack,
} from 'src/store/reducer';

const mapStateToProps = (state) => ({
  questions: state.questions,
  iteration: state.iteration !== undefined ? state.iteration : 0,
  answer: state.answer !== undefined ? state.answer : null,
  goodAnswers: state.goodAnswers !== undefined ? state.goodAnswers : 0,
  badAnswers: state.badAnswers !== undefined ? state.badAnswers : 0,
  startTime: state.startTime !== undefined ? state.startTime : 0,
});

const mapDispatchToProps = (dispatch) => ({
  increment: (iteration) => {
    dispatch(increment(iteration));
  },
  resetIncrement: () => {
    dispatch(resetIncrement());
  },
  controlChamp: (name, value) => {
    dispatch(controlChamp(name, value));
  },
  setBadAnswers: (answer) => {
    dispatch(setBadAnswers(answer));
  },
  resetBadAnswers: () => {
    dispatch(resetBadAnswers());
  },
  setGoodAnswers: () => {
    dispatch(setGoodAnswers());
  },
  setQuestions: (questions) => {
    dispatch(setQuestions(questions));
  },
  resetQuestions: () => {
    dispatch(resetQuestions());
  },
  startChrono: () => {
    dispatch(startChrono());
  },
  resetChrono: () => {
    dispatch(resetChrono());
  },
  reload: () => {
    dispatch(reload());
  },
  stopTimeAttack: () => {
    dispatch(stopTimeAttack());
  },
});


const GameContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Game);

export default GameContainer;
