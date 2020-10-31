import { connect } from 'react-redux';

import Rules from 'src/components/Games/QuinteFlushRoyale/Rules';
import {
  startGame,
} from 'src/store/reducer';

const mapStateToProps = (state) => ({
  gameStarted: state.gameStarted !== undefined ? state.gameStarted : false,
});

const mapDispatchToProps = (dispatch) => ({
  startGame: () => {
    dispatch(startGame());
  },
});

const RulesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Rules);

export default RulesContainer;
