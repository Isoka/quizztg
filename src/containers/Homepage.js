import { connect } from 'react-redux';

import Homepage from 'src/components/Homepage';
import { controlChamp, setError, deleteError } from 'src/store/reducer';

const mapStateToProps = (state) => ({
  email: state.email,
  password: state.password,
});

const mapDispatchToProps = (dispatch) => ({
  updateChamp: (name, value) => {
    dispatch(controlChamp(name, value));
  },
  setError: (type, header, message) => {
    dispatch(setError(type, header, message));
  },
  deleteError: () => {
    dispatch(deleteError());
  },
});


const HomepageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Homepage);

export default HomepageContainer;
