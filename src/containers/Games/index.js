import { connect } from 'react-redux';

import Games from 'src/components/Games';

import {
  setTeam,
  stockRues,
} from 'src/store/reducer';

const mapStateToProps = (state) => ({
  team: state.team !== undefined ? state.team : 0,
  rues: state.rues !== undefined ? state.rues : null,
});

const mapDispatchToProps = (dispatch) => ({
  setTeam: (team) => {
    dispatch(setTeam(team));
  },
  stockRues: (rues) => {
    dispatch(stockRues(rues));
  },
});

const GamesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Games);

export default GamesContainer;
