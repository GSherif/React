import React from 'react';
import { FormControl } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';
import MovieCard from './Card';
import {Form} from 'react-bootstrap';

export default class MovieList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            isChecked: false,
            searchWord: ''
        }
    }

    handleChange = e => {
        let {isChecked , searchWord} = this.state;
        if(e.target.type === 'checkbox'){
            isChecked = e.target.checked;
        }else{
            searchWord =  e.target.value;
        }
        debugger
        const newData = this.props.data.filter(e => (e.Title.toLowerCase().includes(searchWord.toLowerCase())) && e.Watched === isChecked);
        this.setState({ data: newData , isChecked:isChecked , searchWord:searchWord });
    }

    render() {
        return (
            <>
                <Form>
                    <Form.Group controlId="formBasicChecbox">
                        <Form.Check type="checkbox" label="Watched" onChange={this.handleChange}/>
                    </Form.Group>
                </Form>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-default">Search</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                        onChange={this.handleChange} />
                </InputGroup>
                {this.state.data.map(e => <MovieCard key={e.imdbID} {...e} />)}
            </>
        );
    }

}