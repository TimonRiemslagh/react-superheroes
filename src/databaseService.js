import db from './firebaseHandler';
import HeroData from "./dataTypes/heroData";

export default class DatabaseService {
    constructor() {}

    static search(term) {

    }

    static getAllHeroes() {
        // Get the data
        /*db.ref('/Heroes').once('value').then(snapshot => {
            snapshot.val().map(hero => {
                const newHero = new HeroData(hero.id, hero.avatar, hero.name, hero.powers, hero.description);
                this.setState({
                    heroes: [...this.state.heroes, newHero]
                });
            });

            this.setState({
                isLoaded: true
            });

        });*/

        return new Promise((resolve, reject) => {
            let heroes = [];
            db.ref('/Heroes').once('value').then(snapshot => {
                snapshot.val().map(hero => {
                    heroes.push(new HeroData(hero.id, hero.avatar, hero.name, hero.powers, hero.description));
                    heroes.length > 0 ? resolve(heroes) : reject('No superheroes found.');
                });
            });
        });
    }
}