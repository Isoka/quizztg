import { connect } from 'react-redux';

import Login from 'src/components/User/Login';
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


const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);

export default LoginContainer;
