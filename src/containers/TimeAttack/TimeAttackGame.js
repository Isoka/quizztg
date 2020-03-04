import { connect } from 'react-redux';

import TimeAttackGame from 'src/components/TimeAttack/TimeAttackGame';
import {
  startChrono,
  endChrono,
  calcTimeFromChrono,
  resetChrono,
  startTimeAttack,
  stopTimeAttack,
  setRues,
  setQuestions,
  resetQuestions,
  increment,
  controlChamp,
} from 'src/store/reducer';

const mapStateToProps = (state) => ({
  startTime: state.startTime !== undefined ? state.startTime : null,
  endTime: state.endTime !== undefined ? state.endTime : null,
  finalTime: state.finalTime !== undefined ? state.finalTime : null,
  timeAttackStarted: state.timeAttackStarted !== undefined ? state.timeAttackStarted : false,
  rues: state.rues !== undefined ? state.rues : null,
  questions: state.questions !== undefined ? state.questions : [],
  iteration: state.iteration !== undefined ? state.iteration : 0,
});

const mapDispatchToProps = (dispatch) => ({
  startChrono: () => {
    dispatch(startChrono());
  },
  endChrono: () => {
    dispatch(endChrono());
  },
  calcTimeFromChrono: (startTime, endTime) => {
    dispatch(calcTimeFromChrono(startTime, endTime));
  },
  resetChrono: () => {
    dispatch(resetChrono());
  },
  startTimeAttack: () => {
    dispatch(startTimeAttack());
  },
  stopTimeAttack: () => {
    dispatch(stopTimeAttack());
  },
  setRues: (rues) => {
    dispatch(setRues(rues));
  },
  setQuestions: (questions) => {
    dispatch(setQuestions(questions));
  },
  resetQuestions: () => {
    dispatch(resetQuestions);
  },
  increment: () => {
    dispatch(increment());
  },
  controlChamp: (name, value) => {
    dispatch(controlChamp(name, value));
  },
});


const TimeAttackGameContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TimeAttackGame);

export default TimeAttackGameContainer;
