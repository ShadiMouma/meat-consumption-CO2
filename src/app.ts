import './css/style.scss';
import Datamap from 'datamaps/dist/datamaps.world.min';
import axios from "axios";
import { mapHTML } from './js/html/map'


const container = document.getElementById('container');


const filterCountry = (data, name): object  => {
    return data.filter(country => country.name.toLowerCase() === name.toLowerCase());
};

const renderMap = (results) => {
    return new Promise(function(resolve, reject) {
        resolve(new Datamap({
            element: container,
            fills: {
                defaultFill: '#2d2d2d'
            },
            geographyConfig: {
                borderColor: '#696f80',
                popupTemplate: function(geography, data): string {
                    const country = filterCountry(results.data, geography.properties.name)[0],
                        co2 = country.co2,
                        electro = country.electroUse,
                        meat = country.meatConsumption;

                    return mapHTML(geography.properties.name, co2, electro, meat);
                }
            }
        }));
    })
};


const controlMeat = async () => {
    if(container) {
        try {
            const results = await axios('http://localhost:8080/api/countries');
            const map = await renderMap(results);
            const element:HTMLDivElement = document.querySelector('.map-wrapper');
            element.classList.add('fade-in');
        }
        catch(error) {
            console.log(error);
        }
    }
};


controlMeat().then();

