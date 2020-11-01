import { connect } from 'react-redux';

import Rules from 'src/components/Games/Examen/Rules';
import {
  startGame,
  startChrono,
} from 'src/store/reducer';

const mapStateToProps = (state) => ({
  gameStarted: state.gameStarted !== undefined ? state.gameStarted : false,
});

const mapDispatchToProps = (dispatch) => ({
  startGame: () => {
    dispatch(startGame());
  },
  startChrono: () => {
    dispatch(startChrono());
  },
});

const RulesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Rules);

export default RulesContainer;
