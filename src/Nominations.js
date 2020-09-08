import React from 'react';
import { Container } from 'reactstrap';


function Nominations(props) {
  return (
    <div>
      <Container>
        <p>Nominations</p>
        {props.renderNominations()}
      </Container>
    </div>
  );
}

export default Nominations;
