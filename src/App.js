import React from 'react';
import './App.css';
import MoviesList from './components/Movies/List';
import data from './data';
import {Container, Row} from 'react-bootstrap';


const App = props => (
    <Container>
        <Row className="justify-content-md-center">
            <MoviesList data={data} />
        </Row>
    </Container>);

export default App;
