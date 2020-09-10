import React from 'react';
import { Container } from 'reactstrap';


function Results(props) {

  if(props.movieTitle.length >= 1) {
  return (
    <div>
      <Container >
        <h5>Results for "{props.movieTitle}"</h5>
        {props.renderResults()}
      </Container>
    </div>
  );
}else {
  return (<div>
    <Container>
      <h5>Search Results</h5>
      {props.renderResults()}
    </Container>
  </div>)
}
}

export default Results;
