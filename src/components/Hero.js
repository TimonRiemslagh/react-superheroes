import React, {Component} from 'react';
import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';

class Hero extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hero: props.data
        };
    }

    render() {
        return (
            <div className="col-4">
                <Card>
                    <CardImg top width="100%" src={"/img/" + this.state.hero.avatar} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>{this.state.hero.name}</CardTitle>
                        <CardText>{this.state.hero.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default Hero;