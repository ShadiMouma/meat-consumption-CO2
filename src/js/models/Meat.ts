import meat from '../interfaces/meat'
import axios from "axios";


export default class Meat {
    courses: meat[];
    meat: any;
    constructor() {
        this.courses = [
            {
                name: 'js course',
                id: 1
            },
            {
                name: 'Become the next Senior html developer',
                id: 2
            },
            {
                name: 'SCSS Crash course',
                id: 3
            }
        ];

        this.meat = null;
    }

    getData() {
        return axios('https://cors-anywhere.herokuapp.com/http://www.hqcasanova.com/co2?callback=process');
    }
};