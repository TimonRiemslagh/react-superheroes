import React, {Component} from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: "",
            results: []
        };
    }

    doSearch() {

    }

    render() {
        return (
            <div>
                <InputGroup>
                    <Input placeholder="Search your favorite superhero" />
                    <InputGroupAddon addonType="append"><Button>Search</Button></InputGroupAddon>
                </InputGroup>
            </div>
        )
    }
}

export default SearchBar;