import React from 'react';
import PropTypes from 'prop-types';

import { nbOfAuthorizedErrors } from '../../../config/gamesConfig';

const Chronoended = (props) => {
  const { nbOfErrors, chrono } = props;

  const missed = () => (
    <>
      <h1>Aïe! Trop de fautes!</h1>
      <p>J'ai le regret de te dire que tu as loupé ton examen blanc</p>
      <p>En effet, nous avons compté {nbOfErrors} erreurs dans ton tri</p>
    </>
  );

  const agreed = () => (
    <>
      <h1>Gagné!</h1>
      <p>j'ai l'insigne honneur de t'annoncer que tu as réussi!</p>
      <p>
        Bravo!
        {(
          nbOfErrors === 0
        )
          && (
            <>Tu n'a fait aucune faute!</>
          )}
        {(
          nbOfErrors > 0
          && nbOfErrors <= nbOfAuthorizedErrors
        )
        && (
          <>Tu n'a fait que {nbOfErrors} fautes, c'est très bien!</>
        )}
      </p>
    </>
  );

  const chronoEndedBefore = () => (
    <>
      <h1>Chrono terminé!</h1>
      <p>Dommage, tu n'a pas pu finir à temps et du coup tu as loupé l'examen!</p>
      <p>Retente ta chance en étant plus rapide!</p>
    </>
  );

  return (
    <>
      {(
        chrono
      ) && chronoEndedBefore() }
      {(
        nbOfErrors <= nbOfAuthorizedErrors
        && nbOfErrors !== null
      ) && agreed() }
      {(
        nbOfErrors > nbOfAuthorizedErrors
        && nbOfErrors !== null
      ) && missed() }
    </>
  );
};

Chronoended.defaultProps = {
  nbOfErrors: null,
};

Chronoended.propTypes = {
  nbOfErrors: PropTypes.number,
};

export default Chronoended;
