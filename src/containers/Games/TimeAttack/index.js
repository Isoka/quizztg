import { connect } from 'react-redux';

import TimeAttack from 'src/components/Games/TimeAttack';
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
  stockRues,
  resetChamp,
  resetGoodAnswers,
  setTotalTime,
} from 'src/store/reducer';

const mapStateToProps = (state) => ({
  questions: state.questions,
  iteration: state.iteration !== undefined ? state.iteration : 0,
  answer: state.answer !== undefined ? state.answer : null,
  goodAnswers: state.goodAnswers !== undefined ? state.goodAnswers : 0,
  badAnswers: state.badAnswers !== undefined ? state.badAnswers : 0,
  startTime: state.startTime !== undefined ? state.startTime : 0,
  totalTime: state.totalTime !== undefined ? state.totalTime : 0,
  team: state.team !== undefined ? state.team : 0,
  rues: state.rues !== undefined ? state.rues : 0,
  timeAttackStarted: state.timeAttackStarted !== undefined ? state.timeAttackStarted : false,
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
  resetChamp: (name) => {
    dispatch(resetChamp(name));
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
  resetGoodAnswers: () => {
    dispatch(resetGoodAnswers());
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
  stockRues: (rues) => {
    dispatch(stockRues(rues));
  },
  setTotalTime: (time) => {
    dispatch(setTotalTime(time));
  },
});

const TimeAttackContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TimeAttack);

export default TimeAttackContainer;
