import React from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';
import {
  Button,
  Dimmer,
  Loader,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { apiUrl } from 'src/thirdparty/data';
import TimeAttack from 'src/containers/Games/TimeAttack';
import QuinteFlushRoyale from 'src/containers/Games/QuinteFlushRoyale';
import Examen from 'src/containers/Games/Examen';

class Games extends React.Component {
  constructor(props) {
    super(props);
    this.responses = null;
    this.lsToken = sessionStorage.getItem('token');
    this.ruesByTeam = null;
    this.streetsArray = [];
    this.Mode = null;
  }

  componentDidMount() {
    // Data initialization
    const { stockRues, team } = this.props;

    if (team !== 0) {
      const equipeUrl = `${apiUrl}/equipes?number=${team}`;

      Axios.get(equipeUrl, {
        headers: {
          Authorization: `Bearer ${this.lsToken}`,
        },
      })
        .then((response) => {
          const { tournees } = response.data['hydra:member'][0];
          const numbers = [];
          tournees.forEach((element) => {
            numbers.push(element.name);
          });
          const tourneeMin = Math.min(...numbers);
          const tourneeMax = Math.max(...numbers);
          const ruesUrl = `${apiUrl}/rues?tournee.name[between]=${tourneeMin}..${tourneeMax}`;
          Axios.get(ruesUrl, {
            headers: {
              Authorization: `Bearer ${this.lsToken}`,
            },
          })
            .then((ruesData) => {
              stockRues(ruesData.data['hydra:member']);
              console.info('[INFO] Chargement des rues par équipe terminé');
            })
            .catch((error) => {
              // eslint-disable-next-line no-console
              console.error(error);
            });
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.error(error);
        });
    }
    else {
      const allRues = `${apiUrl}/rues`;
      Axios.get(allRues, {
        headers: {
          Authorization: `Bearer ${this.lsToken}`,
        },
      })
        .then((response) => {
          stockRues(response.data['hydra:member']);
          console.info('[INFO] Chargement de toutes les rues terminé');
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.error(error);
        });
    }
  }

  render() {
    const { rues, type } = this.props;

    if (rues !== null) {
      switch (type) {
        case 'timeattack':
          this.Mode = <TimeAttack />;
          break;
        case 'quinteflushroyale':
          this.Mode = <QuinteFlushRoyale />;
          break;
        case 'examen':
          this.Mode = <Examen />;
          break;
        default:
          this.Mode = (
            <>
              <p>
                Ce mode de jeu n'existe pas,
                veuillez contacter l'administrateur en cas de problème,
                merci
              </p>
              <Link to="/"><Button>Retour à l'accueil</Button></Link>
            </>
          );
          break;
      }
    }
    else {
      this.mode = (
        <Dimmer active inverted>
          <Loader inverted content="Chargement" />
        </Dimmer>
      );
    }

    return (
      <>
        <div>
          {this.Mode}
        </div>
      </>
    );
  }
}

Games.defaultProps = {
  team: 0,
  type: null,
  rues: null,
  stockRues: null,
};

Games.propTypes = {
  team: PropTypes.number,
  type: PropTypes.string,
  rues: PropTypes.array,
  stockRues: PropTypes.func,
};

export default Games;
