import { connect } from 'react-redux';

import TimeAttack from 'src/components/TimeAttack';
import {
  startChrono,
  endChrono,
  calcTimeFromChrono,
  resetChrono,
  startTimeAttack,
  stopTimeAttack,
  setRues,
} from 'src/store/reducer';

const mapStateToProps = (state) => ({
  startTime: state.startTime !== undefined ? state.startTime : null,
  endTime: state.endTime !== undefined ? state.endTime : null,
  finalTime: state.finalTime !== undefined ? state.finalTime : null,
  timeAttackStarted: state.timeAttackStarted !== undefined ? state.timeAttackStarted : false,
  rues: state.rues !== undefined ? state.rues : null,
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
});


const TimeAttackContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TimeAttack);

export default TimeAttackContainer;
