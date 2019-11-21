import country from '../interfaces/country'
import { minMax } from '../utility/math'
import { lands } from './lands'


export default class World {
    countries: country[];
    constructor() {
        this.countries = [];
        this.addData();
    }

    addData(): void {
        this.countries = lands.map(name => {
            return {
                name,
                co2: minMax(1000, 9000),
                electroUse: minMax(),
                meatConsumption: minMax(10, 100)
            }
        });
    }
};


