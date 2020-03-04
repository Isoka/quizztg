import { connect } from 'react-redux';

import Game from 'src/components/TimeAttack/Game';
import {
  increment,
  controlChamp,
  setBadAnswers,
  setGoodAnswers,
} from 'src/store/reducer';

const mapStateToProps = (state) => ({
  questions: state.questions !== undefined ? state.questions : [],
  iteration: state.iteration !== undefined ? state.iteration : 0,
  answer: state.answer !== undefined ? state.answer : null,
  goodAnswers: state.goodAnswers !== undefined ? state.goodAnswers : 0,
  badAnswers: state.badAnswers !== undefined ? state.badAnswers : 0,
});

const mapDispatchToProps = (dispatch) => ({
  increment: (iteration) => {
    dispatch(increment(iteration));
  },
  controlChamp: (name, value) => {
    dispatch(controlChamp(name, value));
  },
  setBadAnswers: (answer) => {
    dispatch(setBadAnswers(answer));
  },
  setGoodAnswers: () => {
    dispatch(setGoodAnswers());
  },
});


const GameContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Game);

export default GameContainer;
