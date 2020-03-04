import React from 'react';
import PropTypes from 'prop-types';

import './TimeAttack.scss';
// eslint-disable-next-line import/no-cycle
import TimeAttackGame from 'src/containers/TimeAttack/TimeAttackGame';
import Rules from 'src/components/TimeAttack/Rules';

const TimeAttack = (props) => {
  const {
    timeAttackStarted,
    startTimeAttack,
    rues,
  } = props;

  return (
    <div className="game">
      {(timeAttackStarted !== undefined && timeAttackStarted === false) ? (
        <Rules startTimeAttack={startTimeAttack} />
      )
        : (
          <TimeAttackGame
            token={localStorage.getItem('token')}
            rues={rues}
          />
        )}
    </div>
  );
};

TimeAttack.defaultProps = {
  timeAttackStarted: null,
  startTimeAttack: null,
  rues: null,
};

TimeAttack.propTypes = {
  timeAttackStarted: PropTypes.bool,
  startTimeAttack: PropTypes.func,
  rues: PropTypes.array,
};

export default TimeAttack;
