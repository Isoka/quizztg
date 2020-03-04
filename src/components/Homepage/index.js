import React from 'react';
import {
  Form,
  Button,
  Container,
  Card,
  Icon,
} from 'semantic-ui-react';
import Axios from 'axios';
import { useHistory, Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import isConnected from '../../thirdparty/tests/isConnected';
import './Homepage.scss';

function Homepage(props) {
  const history = useHistory();
  const { updateChamp } = props;

  function handleChange(e, { name, value }) {
    e.preventDefault();
    updateChamp(name, value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const {
      email,
      password,
      setError,
      deleteError,
    } = props;

    Axios.post('http://back.quizztg.fr/authentication_token', {
      email,
      password,
    })
      .then((value) => {
        localStorage.setItem('token', value.data.token);
        history.push('/');
        setError(
          'positive',
          'Connexion réussie',
          '',
        );
        setTimeout(() => {
          deleteError();
        }, 6000);
      })
      .catch((error) => {
        if (error.response !== undefined && error.response.status === 401) {
          setError(
            'negative',
            'Erreur de connexion',
            'Vous avez entré une mauvaise combinaison E-mail/Mot de passe',
          );
          setTimeout(() => {
            deleteError();
          }, 6000);
        }
      });
  }

  return (
    <Container>
      <h1>Bienvenue cher collègue!</h1>
      <p>
        Bienvenue sur la plateforme d'entraînement au TG!
        Développé par les facteurs, POUR les facteurs!
      </p>
      <img src="src/thirdparty/img/caroule.gif" alt="Ca roule!" />
      <p>
        Si tu souhaite t'entraîner, tu a trois choix de challenge possible:
      </p>
      <Card.Group itemsPerRow={3}>
        <Card color="yellow">
          <Link to="/timeattack">
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
        </Card>
        <Card color="yellow">
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
        </Card>
      </Card.Group>
    </Container>
  );
}

Homepage.defaultProps = {
  updateChamp: null,
  email: null,
  password: null,
  setError: null,
  deleteError: null,
};

Homepage.propTypes = {
  updateChamp: PropTypes.func,
  email: PropTypes.string,
  password: PropTypes.string,
  setError: PropTypes.func,
  deleteError: PropTypes.func,
};

export default Homepage;
