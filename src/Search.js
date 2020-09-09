import React from 'react';
import { Container, Form, FormGroup, Input, Label } from 'reactstrap';

function Search(props) {
  return (
    <div>
    <br></br>
      <Container>
        <Form>
          <FormGroup>
            <Label for="movieTitle"><h6>Search for a Movie to Nominate</h6></Label>
            <Input placeholder= 'Search' onChange={props.searchQuery}/>
          </FormGroup>
        </Form>
      </Container>
    </div>
  );
}

export default Search;
