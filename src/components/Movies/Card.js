import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import {Card} from 'react-bootstrap';

class MovieCard extends React.Component {

  render() {
      const { Title, Year, Type, Poster } = this.props;
      return <Card style={{ width: '18rem'}}>
          <Card.Img style={{ height: '18rem'}} variant="top" src={Poster === 'N/A' ? 'https://about.canva.com/wp-content/uploads/sites/3/2016/08/Band-Logo.png' : Poster} />
          <Card.Body>
          <Card.Title>{Title}</Card.Title>
          <Card.Text>{Year}</Card.Text>
          <Card.Text>{Type}</Card.Text>
          </Card.Body>
      </Card>;
    }
}
export default MovieCard;
