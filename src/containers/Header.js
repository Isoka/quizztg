import { connect } from 'react-redux';

import Header from 'src/components/Layout/Header';

const mapStateToProps = (state) => ({
  error: state.error,
});

const mapDispatchToProps = {};


const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);

export default HeaderContainer;
