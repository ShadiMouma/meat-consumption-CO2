import country from '../interfaces/country'


export default class Main {
    countries: country[];
    constructor() {
        this.countries = [
            {
                name: 'germany',
                co2: this.minMax(500, 9000),
                electroUse: this.minMax(),
            },
            {
                name: 'france',
                co2: this.minMax(500, 9000),
                electroUse: this.minMax(),
            },
            {
                name: 'italy',
                co2: this.minMax(500, 9000),
                electroUse: this.minMax(),
            },
            {
                name: 'greece',
                co2: this.minMax(500, 9000),
                electroUse: this.minMax(),
            },
            {
                name: 'china',
                co2: this.minMax(500, 9000),
                electroUse: this.minMax(),
            },
            {
                name: 'syria',
                co2: this.minMax(500, 9000),
                electroUse: this.minMax(),
            },
            {
                name: 'lebanon',
                co2: this.minMax(500, 9000),
                electroUse: this.minMax(),
            },
            {
                name: 'poland',
                co2: this.minMax(500, 9000),
                electroUse: this.minMax(),
            }
            ,
            {
                name: 'sweden',
                co2: this.minMax(500, 9000),
                electroUse: this.minMax(),
            },
            {
                name: 'spain',
                co2: this.minMax(500, 9000),
                electroUse: this.minMax(),
            },
            {
                name: 'portugal',
                co2: this.minMax(500, 9000),
                electroUse: this.minMax(),
            },
            {
                name: 'india',
                co2: this.minMax(500, 9000),
                electroUse: this.minMax(),
            },
            {
                name: 'australia',
                co2: this.minMax(500, 9000),
                electroUse: this.minMax(),
            },
            {
                name: 'austria',
                co2: this.minMax(500, 9000),
                electroUse: this.minMax(),
            },
            {
                name: 'japan',
                co2: this.minMax(500, 9000),
                electroUse: this.minMax(),
            },
            {
                name: 'north korea',
                co2: this.minMax(500, 9000),
                electroUse: this.minMax(),
            },
            {
                name: 'south korea',
                co2: this.minMax(500, 9000),
                electroUse: this.minMax(),
            },
            {
                name: 'usa',
                co2: this.minMax(500, 9000),
                electroUse: this.minMax(),
            },
            {
                name: 'russia',
                co2: this.minMax(500, 9000),
                electroUse: this.minMax(),
            },
            {
                name: 'canada',
                co2: this.minMax(500, 9000),
                electroUse: this.minMax(),
            },
            {
                name: 'south africa',
                co2: this.minMax(500, 9000),
                electroUse: this.minMax(),
            },
            {
                name: 'algeria',
                co2: this.minMax(500, 9000),
                electroUse: this.minMax(),
            },
            {
                name: 'morocco',
                co2: this.minMax(500, 9000),
                electroUse: this.minMax(),
            },
            {
                name: 'england',
                co2: this.minMax(500, 9000),
                electroUse: this.minMax(),
            },
            {
                name: 'armenia',
                co2: this.minMax(500, 9000),
                electroUse: this.minMax(),
            }
        ]
    }


    minMax(min = 100, max = 1000) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
};