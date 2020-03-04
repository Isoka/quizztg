import React from 'react';
import isConnected from 'src/thirdparty/tests/isConnected';
import Login from 'src/containers/User/Login';

const Entry = (props) => {
  const { Component } = props;

  return (
    <>
      {(!isConnected()) ? (
        <Login />
      ) : (
        <Component />
      )}
    </>
  );
};

export default Entry;
