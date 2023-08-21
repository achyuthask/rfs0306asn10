import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';                             
import Card from 'react-bootstrap/Card';
import { Stack } from 'react-bootstrap';



const MovieSearch = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');


   
  const navigate = useNavigate();




  useEffect(() => {
    if (searchQuery.trim() !== '') {
      fetchMovies();
    } else {
      setMovies([]);
    }
  }, [searchQuery]);

  const fetchMovies = async () => {
    try {
      const response = await fetch(`https://www.omdbapi.com/?s=${searchQuery}&apikey=880bc194&plot=full`);
      const data = await response.json();
      if (data.Search) {
        setMovies(data.Search);
        console.log(data);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div >
     



  

     <Navbar bg="info" data-bs-theme="dark" >
      <Container fluid>
        <Navbar.Brand href="#">MovieSearch</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
         
          <Form className="d-flex">
            <Form.Control
              type="text"
              placeholder="Search Movies"
              className="me-2"
              value={searchQuery}
              onChange={handleSearchChange}
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>






      {/* <nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand">Navbar</a>
    <form class="d-flex">
    <input class="form-control me-2" type="text" value={searchQuery} onChange={handleSearchChange} placeholder="Search movies" aria-label="SearchMovies" />
      <Button class="btn btn-outline-success" type="submit">Search</Button>
    </form>
  </div>
</nav> */}

{/* {`/deatils/${movie.imdbID}` */}

<ul  style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between"}}>
        {movies.map((movie) => (
          <li key={movie.imdbID}>
       
        <div onClick={()=> navigate(`/details/${movie.Title}`)} >
        <Stack gap={5}>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movie.Poster} />
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        
        <Card.Text>
        {movie.Year}
        </Card.Text>
        
      </Card.Body>
    </Card>
            </Stack>
        </div>

        {/* <Link to="/details/123" state={ {catName: "123"}}>

          <img src={movie.Poster} alt=" " />
          <li>{movie.Title}</li>
         <h5>id :{movie.imdbID}</h5>
         </Link> */}
   
          
          </li>
        ))}
      </ul>


    
    </div>
  );
};

export default MovieSearch;
