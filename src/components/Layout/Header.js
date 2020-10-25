import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// eslint-disable-next-line import/no-unresolved
import ShowErrors from 'src/components/Messages/showErrors';
import 'src/components/Layout/Header.scss';

const Header = (props) => {
  const { error } = props;

  return (
    <header>
      <Link to="/">
        <img src="/src/thirdparty/img/logolp.png" alt="logo" />
      </Link>
      <Menu>
        <Menu.Item
          name="Meilleurs scores"
        >
          <Link to="/bestscores">Meilleurs scores</Link>
        </Menu.Item>
      </Menu>
      {(error !== undefined && error !== null) && (
        <ShowErrors type={error.type} header={error.header} message={error.message} />
      )}
    </header>

  );
};

Header.defaultProps = {
  error: null,
};

Header.propTypes = {
  error: PropTypes.object,
};

export default Header;
