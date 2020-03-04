import React from 'react';
import { Container, Button } from 'semantic-ui-react';

const Rules = (props) => {
  const { startTimeAttack } = props;

  function handleStartGame() {
    startTimeAttack();
  }

  return (
    <Container className="test">
      <p>Tu as choisi le contre la montre, tu dois donc en connaître les règles:</p>
      <ul className="rule-list">
        <li>Le temps est calculé, mais pas limité</li>
        <li>
          Chaque question ayant une mauvaise réponse est passée,
          mais reviendra inexorablement plus tard
        </li>
        <li>
          En rapport avec le point précédent, tu ne peut terminer
          le contre la montre qu'au moment ou tu aura répondu aux 20 questions
        </li>
        <li>
          Le temps sera enregistré à la fin du jeu,
          puis affiché dans la page /bestscores si tu a fait un temps record
        </li>
        <li>
          Les tricheries (modification du timer par exemple)
          seront TOUJOURS détectées et supprimées,
          inutile donc de chercher à répondre aux 20 questions en 2 secondes ;)
        </li>
      </ul>
      <p className="ready">
        Si tu est prêt et que tu as bien révisé ton TG,
        tu peux cliquer sur le bouton ci-dessous pour commencer la partie! <br />
        (Le chrono ne partira qu'au moment ou
        le chargement du jeu sera terminé, pas de panique!)
      </p>
      <Button size="massive" color="green" onClick={handleStartGame}>START!</Button>
    </Container>
  );
};

export default Rules;
