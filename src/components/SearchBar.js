import React, {Component} from 'react';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: "",
            results: []
        };
    }

    doSearch() {
        console.log(this.state.term);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <div>
                <InputGroup>
                    <Input type="text" value={this.state.term} onChange={this.handleChange} placeholder="Search your favorite superhero" />
                    <InputGroupAddon addonType="append">
                        <Button onClick={this.doSearch()}>Search</Button>
                    </InputGroupAddon>
                </InputGroup>
            </div>
        )
    }
}

export default SearchBar;