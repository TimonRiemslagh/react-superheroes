import db from './firebaseHandler';
import HeroData from "./dataTypes/heroData";

export default class DatabaseService {
    constructor() {}

    static search(term) {
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

    static getAllHeroes() {
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