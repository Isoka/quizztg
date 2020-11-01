import React from 'react';
import { Container, Button, Message } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Rules = (props) => {
  const { startGame } = props;

  function handleStartGame() {
    startGame();
  }

  return (
    <Container className="test">
      <p>Tu as choisi la Quinte Flush Royale, tu dois donc en connaître les règles:</p>
      <ul className="rule-list">
        <li>Le temps n'est pas compté</li>
        <li>
          Toutes les réponses sont comptées, bonnes et mauvaises
        </li>
        <li>
          A la fin du jeu, les bonnes et mauvaises réponses te seront listées,
          cela représenteras ton score
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
