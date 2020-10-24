import React, { useEffect } from 'react';
import {
  Container,
  Card,
  Icon,
  Select,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Homepage.scss';

const Homepage = (props) => {
  const {
    rues,
    team,
    stockRues,
    setTeam,
    timeAttackStarted,
    stopTimeAttack,
    resetChrono,
    resetQuestions,
    resetGoodAnswers,
    resetIncrement,
    setTotalTime,
  } = props;

  useEffect(() => {
    if (rues.length !== 0) {
      stockRues([]);
      stopTimeAttack();
      resetChrono();
      resetQuestions();
      resetGoodAnswers();
      resetIncrement();
      setTotalTime(null);
    }
  });

  const handleSetTeam = (e, { value }) => {
    if (team !== value) {
      setTeam(value);
    }
  };

  const options = [
    {
      key: 'equipe0', value: 0, text: 'Toutes les équipes',
    },
    {
      key: 'equipe1', value: 1, text: 'Équipe 1',
    },
    {
      key: 'equipe2', value: 2, text: 'Équipe 2',
    },
    {
      key: 'equipe3', value: 3, text: 'Équipe 3',
    },
    {
      key: 'equipe4', value: 4, text: 'Équipe 4',
    },
    {
      key: 'equipe5', value: 5, text: 'Équipe 5',
    },
  ];

  return (
    <Container>
      <h1>Bienvenue cher collègue!</h1>
      <p>
        Bienvenue sur la plateforme d'entraînement au TG!
        Développé par les facteurs, POUR les facteurs!
      </p>
      <img src="src/thirdparty/img/caroule.gif" alt="Ca roule!" loading="lazy" />
      <p>
        Si tu souhaite t'entraîner, tu a trois choix de challenge possible:
      </p>
      <Select placeholder="Sélectionnez votre équipe" options={options} onChange={handleSetTeam} defaultValue={team} />
      <Card.Group itemsPerRow={3}>
        <Card color="yellow">
          <Link to="/game/timeattack">
            <Icon name="stopwatch" size="massive" />
            <h2>Contre la montre!</h2>
            <p>
              Relève le défi d'être le plus rapide trieur du bureau dans un contre la montre!
            </p>
            <p>
              Ce mode te fera répondre à 20 questions,
              les mauvaises réponses reviendront te hanter
              jusqu'a ce que tu trouve la bonne!
            </p>
            <p>
              Et bien sûr, tu est chronométré! Alors chauffe toi bien les doigts!
            </p>
          </Link>
        </Card>
        <Card color="yellow">
          <Link to="/game/quinteflushroyale">
            <Icon name="grab" size="massive" />
            <h2>Quinte flush royale</h2>
            <p>
              Ce mode est certainement le plus massif que
              l'on puisse faire et le principe est très simple...
            </p>
            <p>
              Prenez toutes les rues de votre bureau, mélangez les,
              comptez les bonnes réponses... et voilà!
            </p>
            <p>
              En résumé, tu a intérêt à connaitre ton TG... par coeur!
            </p>
          </Link>
        </Card>
        <Card color="yellow">
          <Link to="/game/examen">
            <Icon name="write" size="massive" />
            <h2>Examen blanc</h2>
            <p>
              Ce mode n'a pas pour vocation de remplacer ou de simuler
              l'examen de tri mais s'en rapproche.
            </p>
            <p>
              Durant cet examen blanc, 200 questions te seront posées
              et tu aura 20 minutes pour y répondre!
            </p>
            <p>
              L'examen de tri se déroule en 10 minutes normalement,
              mais étant donné que nous tapons au clavier
              plus lentement que nous mettons le courrier dans les cases, ce temps a été allongé.
            </p>
          </Link>
        </Card>
      </Card.Group>
    </Container>
  );
};

Homepage.defaultProps = {
  timeAttackStarted: false,
  rues: [],
  stockRues: null,
  team: 0,
  setTeam: null,
  stopTimeAttack: null,
};

Homepage.propTypes = {
  timeAttackStarted: PropTypes.bool,
  rues: PropTypes.array,
  stockRues: PropTypes.func,
  team: PropTypes.number,
  setTeam: PropTypes.func,
  stopTimeAttack: PropTypes.func,
};

export default Homepage;
