import React from 'react';

import {FormControl} from 'react-bootstrap';

import {InputGroup} from 'react-bootstrap';

class MovieSearch extends React.Component {

    render(){
        return <div>
        <InputGroup className="mb-3">
            <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-default">Search</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            />
        </InputGroup>
        </div>;
    }

}

export default MovieSearch;