import React from 'react';
import { Container } from 'reactstrap';


function Results(props) {

  return (
    <div>
      <Container>
        <p>Top Results</p>
        {props.renderResults()}
      </Container>
    </div>
  );
}

export default Results;
