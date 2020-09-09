import React from 'react';
import { Container } from 'reactstrap';


function Results(props) {

  if(props.movieTitle.length >= 3) {
  return (
    <div>
      <Container >
        <h4>Results for "{props.movieTitle}"</h4>
        {props.renderResults()}
      </Container>
    </div>
  );
}else {
  return (<div>
    <Container>
      <h4>Results</h4>
      {props.renderResults()}
    </Container>
  </div>)
}
}

export default Results;
