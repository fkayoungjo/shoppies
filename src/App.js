import React, { useState, useEffect } from 'react';
import Header from './Header';
import Search from './Search';
import Results from './Results';
import Nominations from './Nominations';
import { Container, Row, Col, Button, Card, CardImg, CardHeader} from 'reactstrap';

function App(props) {

  const [movieTitle, setMovieTitle] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [nominations, setNominations] = useState([]);


  function searchQuery(event) {
    const value = event.target.value
          setMovieTitle(value)
    }


  function renderResults() {
    if( searchResults !== undefined) {
      return (<ul>
        <Row xs="3" >
        {searchResults.map(movie => (
          <li  key={movie.imdbID} data-index={movie.imdbID}>
          <Card >
          <CardHeader tag="h6"id={movie.Title}>{movie.Title}</CardHeader>
          <CardHeader id={movie.Year}>{movie.Year}</CardHeader>
          <CardImg style={{ height:"235px", width:"164px"}} src={movie.Poster} alt="No Movie Image"/>
          <Button id={movie.imdbID}onClick={(e) => addNomination(e)}>Nominate </Button>
          </Card>
          </li>
        ))}
        </Row>
        </ul>)
      } else if (movieTitle.length > 2 ) {
        return  (<h4>No Results Found</h4>)
      }
      }

  function addNomination(e) {
    if(nominations.length < 5) {
    let index = e.target.parentNode.parentNode.getAttribute('data-index')
    for(let i = 0; i <searchResults.length; i++ ) {
      if(index === searchResults[i].imdbID) {
        setNominations(nominations => [...nominations, searchResults[i]])
        e.target.setAttribute('disabled', true)
      }
    }
  }
    renderNominations()
  }

  function removeNomination(e) {
    let index = e.target.parentNode.parentNode.getAttribute('data-index')
    setNominations(nominations => nominations.filter(movie => movie.imdbID !== index))
    let button = document.getElementById(index)
    if(button !== null) {button.disabled = false}
  }


  function renderNominations() {
    if(nominations !== [] && nominations.length !== 5) {
      return (
      <div>
      <h5> Select Nominations </h5>
      <ul>
      <Row xs="3">
      {nominations.map(movie => (
        <li key={movie.imdbID} data-index={movie.imdbID}>
        <Card >
        <CardHeader tag="h6"id={movie.Title}>{movie.Title}</CardHeader>
        <CardHeader id={movie.Year}>{movie.Year}</CardHeader>
        <CardImg style={{ height:"235px", width:"164px"}} src={movie.Poster} alt="moviePoster"/>
        <Button onClick={(e) => removeNomination(e)}>Remove </Button>
         </Card>
        </li>
      ))}
      </Row>
      </ul>
      </div>
      )}else if (nominations.length === 5) {
        return (
          <div>
          <h5> You Have Selected 5 Movies. Remove Movie to Add Another </h5>
          <ul>
          <Row xs="3">
          {nominations.map(movie => (
            <li key={movie.imdbID} data-index={movie.imdbID}>
            <Card >
            <CardHeader tag="h6"id={movie.Title}>{movie.Title}</CardHeader>
            <CardHeader id={movie.Year}>{movie.Year}</CardHeader>
            <CardImg style={{ height:"235px", width:"164px"}} src={movie.Poster} alt="moviePoster"/>
            <Button onClick={(e) => removeNomination(e)}>Remove </Button>
             </Card>
            </li>
          ))}
          </Row>
          </ul>
          </div>
      )}
      }



  useEffect(() => {
    fetch(`http://omdbapi.com/?apikey=15257de9&type=movie&s=${movieTitle}`).then(resp => resp)
    .then(resp => resp.json()).then(
      results => setSearchResults(results.Search)
        )
    }, [movieTitle])

    useEffect(() => {
      if (localStorage.getItem("choices") !== [null]){
      let choices = JSON.parse(localStorage.getItem("choices"))
      console.log(choices)
      setNominations(choices)
      }

    }, [])

    





  return (
    <div>
    <Container id = 'home'>
      <Header />
      <Search searchQuery= {searchQuery}/>
      <Row>
        <Col>
          <Results renderResults={renderResults} movieTitle={movieTitle}/>
        </Col>
        <Col>
          <Nominations renderNominations={renderNominations}/>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default App;
