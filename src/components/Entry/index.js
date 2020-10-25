import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import isConnected from 'src/thirdparty/tests/isConnected';
import Login from 'src/containers/User/Login';

const Entry = (props) => {
  const { Component } = props;
  const { type } = useParams();

  return (
    <>
      {(!isConnected()) ? (
        <Login />
      ) : (
        <Component type={type} />
      )}
    </>
  );
};

Entry.defaultProps = {
  Component: null,
};

Entry.propTypes = {
  Component: PropTypes.elementType,
};

export default Entry;
