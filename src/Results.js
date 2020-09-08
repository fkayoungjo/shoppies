import React from 'react';
import { Container } from 'reactstrap';


function Results(props) {

  if(props.movieTitle.length >= 3) {
  return (
    <div>
      <Container>
        <p>Results for "{props.movieTitle}"</p>
        {props.renderResults()}
      </Container>
    </div>
  );
}else {
  return (<div>
    <Container>
      <p>Results</p>
      {props.renderResults()}
    </Container>
  </div>)
}
}

export default Results;
