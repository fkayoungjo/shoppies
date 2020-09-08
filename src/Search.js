import React from 'react';
import { Container, Form, FormGroup, Input, Label } from 'reactstrap';

function Search(props) {
  return (
    <div>
      <Container>
        <Form>
          <FormGroup>
            <Label for="movieTitle">Movie Title</Label>
            <Input placeholder= 'Search' onChange={props.searchQuery}/>
          </FormGroup>
        </Form>
      </Container>
    </div>
  );
}

export default Search;
