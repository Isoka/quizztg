import { connect } from 'react-redux';

import Homepage from 'src/components/Homepage';

import {
  setTeam,
  stockRues,
  stopGame,
  resetChrono,
  resetQuestions,
  resetGoodAnswers,
  resetIncrement,
  setTotalTime,
} from 'src/store/reducer';

const mapStateToProps = (state) => ({
  team: state.team !== undefined ? state.team : false,
  rues: state.rues !== undefined ? state.rues : [],
});

const mapDispatchToProps = (dispatch) => ({
  setTeam: (team) => {
    dispatch(setTeam(team));
  },
  stockRues: (rues) => {
    dispatch(stockRues(rues));
  },
  stopGame: () => {
    dispatch(stopGame());
  },
  resetChrono: () => {
    dispatch(resetChrono());
  },
  resetQuestions: () => {
    dispatch(resetQuestions());
  },
  setGoodAnswsers: () => {
    dispatch(resetGoodAnswers());
  },
  resetIncrement: () => {
    dispatch(resetIncrement());
  },
  resetGoodAnswers: () => {
    dispatch(resetGoodAnswers());
  },
  setTotalTime: (time) => {
    dispatch(setTotalTime(time));
  },
});

const HomepageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Homepage);

export default HomepageContainer;
