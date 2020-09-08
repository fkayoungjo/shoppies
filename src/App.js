import React, { useState, useEffect } from 'react';
import Header from './Header';
import Search from './Search';
import Results from './Results';
import Nominations from './Nominations';
import { Container, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

function App(props) {

  const [movieTitle, setMovieTitle] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [nominations, setNominations] = useState([]);

  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);


  function searchQuery(event) {
    const value = event.target.value
          setMovieTitle(value)
    }

    function buttonClick(e) {
      addNomination(e)
      toggle()
      }

  function renderResults() {
    if( searchResults !== undefined) {
      return (<ul>
        {searchResults.map(movie => (
          <li key={movie.imdbID} data-index={movie.imdbID}>
          <img src={movie.Poster} alt="moviePoster" width= "71.7px"    height="106.5px" />
          <span id={movie.Title}>{movie.Title}</span> {movie.Year} <br></br>
          <Button id={movie.imdbID}onClick={(e) => buttonClick(e)}>Nominate </Button>
          <Modal isOpen={modal} toggle={toggle} >
        <ModalBody>
          Nomination Added! Select {5 - nominations.length} more
        </ModalBody>
      </Modal>
          </li>
        ))}
        </ul>)
      } else if (movieTitle.length > 2 ) {
        return  (<p>No Results Found</p>)
      }
      }

  function addNomination(e) {
    if(nominations.length < 5) {
    let index = e.target.parentNode.getAttribute('data-index')
    for(let i = 0; i <searchResults.length; i++ ) {
      if(index === searchResults[i].imdbID) {
        setNominations(nominations => [...nominations, searchResults[i]])
        e.target.setAttribute('disabled', true)
      }
    }
  }else {

  }
    renderNominations()
  }

  function removeNomination(e) {
    let index = e.target.parentNode.getAttribute('data-index')
    setNominations(nominations => nominations.filter(movie => movie.imdbID !== index))
    let button = document.getElementById(index)
    button.disabled = false
  }


  function renderNominations() {
    if(nominations !== []) {
      return (<ul>
        {nominations.map(movie => (
          <li key={movie.imdbID} data-index={movie.imdbID}>
          <img src={movie.Poster} alt="moviePoster" width= "71.7px"    height="106.5px" />
          <span id={movie.Title}>{movie.Title}</span> {movie.Year} <br></br><Button onClick={(e) => removeNomination(e)}>Remove </Button>
          </li>
        ))}
        </ul>)
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
