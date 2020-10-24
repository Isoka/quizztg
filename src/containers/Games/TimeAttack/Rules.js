import { connect } from 'react-redux';

import Rules from 'src/components/Games/TimeAttack/Rules';
import {
  startTimeAttack,
} from 'src/store/reducer';

const mapStateToProps = (state) => ({
  timeAttackStarted: state.timeAttackStarted !== undefined ? state.timeAttackStarted : false,
});

const mapDispatchToProps = (dispatch) => ({
  startTimeAttack: () => {
    dispatch(startTimeAttack());
  },
});

const RulesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Rules);

export default RulesContainer;
