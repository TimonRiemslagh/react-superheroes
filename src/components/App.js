import React, {Component} from 'react';
import Hero from './Hero';
import DatabaseService from "../databaseService";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { isLoaded: false, heroes: [] };
        this.getSuperHeroes();
    }


    getSuperHeroes() {

        DatabaseService.getAllHeroes()
            .then((res) => {
                this.setState({
                    heroes: res,
                    isLoaded: true
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        return (
            <div>
                <div className="container">
                    <h1>Super heroes</h1>
                    <div className="row">
                    {
                        this.state.heroes.map(hero => {
                            return <Hero key={ hero.id } data={ hero } />;
                        })
                    }
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
