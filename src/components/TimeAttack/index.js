import React from 'react';
import PropTypes from 'prop-types';

import './TimeAttack.scss';
// eslint-disable-next-line import/no-cycle
import Game from 'src/containers/TimeAttack/Game';
import Rules from 'src/components/TimeAttack/Rules';

const TimeAttack = (props) => {
  const {
    timeAttackStarted,
    startTimeAttack,
    resetQuestions,
    resetIncrement,
    resetChrono,
  } = props;

  if (timeAttackStarted === false) {
    resetQuestions();
    resetIncrement();
    resetChrono();
  }

  return (
    <div className="game">
      {(timeAttackStarted !== undefined && timeAttackStarted === false) ? (
        <Rules startTimeAttack={startTimeAttack} />
      )
        : (
          <Game nbOfQuestions={20} type="timeattack" />
        )}
    </div>
  );
};

TimeAttack.defaultProps = {
  timeAttackStarted: null,
  startTimeAttack: null,
  resetQuestions: null,
  resetIncrement: null,
  resetChrono: null,
};

TimeAttack.propTypes = {
  timeAttackStarted: PropTypes.bool,
  startTimeAttack: PropTypes.func,
  resetQuestions: PropTypes.func,
  resetIncrement: PropTypes.func,
  resetChrono: PropTypes.func,
};

export default TimeAttack;
