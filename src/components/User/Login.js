import React from 'react';
import { Container, Form, Button } from 'semantic-ui-react';
import Axios from 'axios';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';

const Login = (props) => {
  const history = useHistory();
  const {
    email,
    password,
    setError,
    deleteError,
    controlChamp,
  } = props;

  function handleChange(e, { name, value }) {
    e.preventDefault();
    controlChamp(name, value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    Axios.post('http://back.quizztg.fr/authentication_token', {
      email,
      password,
    })
      .then((value) => {
        sessionStorage.setItem('token', value.data.token);
        setError(
          'positive',
          'Connexion réussie',
          'Connexion réussie',
        );
        setTimeout(() => {
          deleteError();
        }, 6000);
        controlChamp('email', null);
        controlChamp('password', null);
        history.push('/');
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
          controlChamp('email', null);
          controlChamp('password', null);
        }
        else if (error.response !== undefined && error.response.status === 500) {
          setError(
            'negative',
            'Erreur de connexion',
            error.response.statusText,
          );
          setTimeout(() => {
            deleteError();
          }, 6000);
        }
      });
  }
  return (
    <Container className="main-login-form">
      <h1>Il semblerait que vous ne soyez point connecté cher collègue... remédions à cela!</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Input label="E-mail" type="email" name="email" width={8} required autoFocus onChange={handleChange} />
          <Form.Input label="Mot de passe" type="password" name="password" required width={8} onChange={handleChange} />
        </Form.Group>
        <Button type="submit">Se connecter</Button>
      </Form>
    </Container>
  );
};

Login.defaultProps = {
  email: null,
  password: null,
  setError: null,
  deleteError: null,
  controlChamp: null,
};
Login.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  setError: PropTypes.func,
  deleteError: PropTypes.func,
  controlChamp: PropTypes.func,
};

export default Login;
