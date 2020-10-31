import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import isConnected from 'src/thirdparty/tests/isConnected';

const Entry = (props) => {
  const { Component } = props;
  const { type } = useParams();
  const history = useHistory();
  const loggedIn = isConnected();

  useEffect(() => {
    if (!loggedIn) {
      history.push('/login');
    }
  });

  return <Component type={type} />;
};

Entry.defaultProps = {
  Component: null,
};

Entry.propTypes = {
  Component: PropTypes.elementType,
};

export default Entry;
