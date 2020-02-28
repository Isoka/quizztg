import React from 'react';
import { Message } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const ShowErrors = (props) => {
  let warning = false;
  let positive = false;
  let negative = false;
  let info = false;

  const { type, header, message } = props;

  if (type === 'warning') {
    warning = true;
  }
  else if (type === 'positive') {
    positive = true;
  }
  else if (type === 'negative') {
    negative = true;
  }
  else if (type === 'info') {
    info = true;
  }

  return (
    <Message
      warning={warning}
      positive={positive}
      negative={negative}
      info={info}
    >
      <Message.Header>
        <p>{header}</p>
      </Message.Header>
      <p>{message}</p>
    </Message>
  );
};

ShowErrors.defaultProps = {
  type: null,
  message: null,
  header: null,
};

ShowErrors.propTypes = {
  type: PropTypes.string,
  message: PropTypes.string,
  header: PropTypes.string,
};

export default ShowErrors;
