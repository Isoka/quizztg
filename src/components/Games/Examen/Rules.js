import React from 'react';
import { Container, Button, Message } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import { nbOfAuthorizedErrors } from 'src/config/gamesConfig';

const Rules = (props) => {
  const { startGame } = props;

  function handleStartGame() {
    startGame();
  }

  return (
    <Container className="test">
      <p>Tu as choisi l'examen blanc, tu dois donc en connaître les règles:</p>
      <ul className="rule-list">
        <li>Tu as 20 minutes, pas une seconde de plus!</li>
        <li>
          Toutes les réponses sont comptées, bonnes et mauvaises
        </li>
        <li>Si tu n'a pas le temps de finir, le jeu s'arrêtera automatiquement!</li>
        <li>
          Si tu fais plus de {nbOfAuthorizedErrors} fautes,
          tu perds! (Mais tu ne le saura qu'après avoir fini!)
        </li>
        <li>
          Les tricheries (modification des réponses par exemple)
          seront TOUJOURS détectées et supprimées
        </li>
      </ul>
      <div className="ready">
        <p className="ready">
          Si tu est prêt et que tu as bien révisé ton TG,
          tu peux cliquer sur le bouton ci-dessous pour commencer la partie! <br />
        </p>
        <Message error>
          A tout moment, si vous souhaitez arrêter le jeu et/ou revenir à la page d'accueil,
          cliquez sur le logo "La Poste" ou le gros bouton "STOPPER"!
        </Message>
      </div>
      <Button size="massive" color="green" onClick={handleStartGame}>START!</Button>
    </Container>
  );
};

Rules.defaultProps = {
  startGame: null,
};

Rules.propTypes = {
  startGame: PropTypes.func,
};

export default Rules;
