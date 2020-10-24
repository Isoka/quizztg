import React from 'react';
import { Button, Container } from 'semantic-ui-react';

import 'src/components/Layout/Footer.scss';

function Footer() {
  return (
    <footer>
      <Container>
        <p>
          Application développée et maintenue par
          &nbsp;<a href="https://isoweb.eu" target="_blank" rel="noreferrer"><Button>Thomas BALANS</Button></a>
          Facteur à TOULOUSE NORD
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
