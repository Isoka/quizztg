import { connect } from 'react-redux';

import TimeAttack from 'src/components/TimeAttack';
import {
  startTimeAttack,
  stopTimeAttack,
  resetQuestions,
  resetIncrement,
  resetChrono,
} from 'src/store/reducer';

const mapStateToProps = (state) => ({
  timeAttackStarted: state.timeAttackStarted !== undefined ? state.timeAttackStarted : false,
});

const mapDispatchToProps = (dispatch) => ({
  resetQuestions: () => {
    dispatch(resetQuestions());
  },
  resetIncrement: () => {
    dispatch(resetIncrement());
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
});


const TimeAttackContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TimeAttack);

export default TimeAttackContainer;
