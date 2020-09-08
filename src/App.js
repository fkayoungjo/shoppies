import React, { useState, useEffect } from 'react';
import Header from './Header';
import Search from './Search';
import Results from './Results';
import Nominations from './Nominations';
import { Container, Row, Col } from 'reactstrap';

function App() {

  const [movieTitle, setMovieTitle] = useState("");
  const [searchResults, setSearchResults] = useState([])

  function searchQuery(event) {
    const value = event.target.value
          setMovieTitle(value)
    }

  function renderResults() {
    if( searchResults !== undefined) {
      return (<ul>
        {searchResults.map(movie => (
          <li key={movie.imdbID}>
          <img src={movie.Poster} alt="moviePoster" width="65" height="65"/>
          {movie.Title} {movie.Year}
          </li>
        ))}
        </ul>)
      } else if (movieTitle.length !== 0 ) {
        return  (<p>No Results Found</p>)
      }else {
          return  (<p>Enter Search Term</p>)
        }
      }


  useEffect(() => {
    fetch(`http://omdbapi.com/?apikey=15257de9&type=movie&s=${movieTitle}`).then(resp => resp)
    .then(resp => resp.json()).then(
      results => setSearchResults(results.Search)
        )
    }, [movieTitle])


  return (
    <div>
    <Container id = 'home'>
      <Header />
      <Search searchQuery= {searchQuery}/>
      <Row>
        <Col>
          <Results renderResults={renderResults}/>
        </Col>
        <Col>
          <Nominations />
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default App;
