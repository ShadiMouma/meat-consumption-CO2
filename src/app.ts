import './css/style.scss';
import Datamap from 'datamaps/dist/datamaps.world.min';
import axios from "axios";



const filterCountry = (data, name) => {
    return data.filter(country => country.name === name.toLowerCase());
};


const controlMeat = async () => {
    const results = await axios('http://localhost:8080/api/countries');

    const map = new Datamap({
        element: document.getElementById('container'),
        fills: {
            defaultFill: '#ddd' // Any hex, color name or rgb/rgba value
        },
        geographyConfig: {
            popupTemplate: function(geography, data) {
                const country = filterCountry(results.data, geography.properties.name)[0],
                        co2 = country.co2,
                        electro = country.electroUse;

                return `<div class="map-hoverinfo hoverinfo">
                            <strong> ${geography.properties.name} </strong>
                            <div class="map-co2"> CO2 emmision ${co2 !== undefined ? co2 : 'no co2'} MT</div>
                            <div class="map-electro"> Strom verbrauch ${electro !== undefined ? electro : 'no strom'} gCO2eq/kWh</div>
                        </div>`;
            }
        }
    });

    console.log(results.data);
};


controlMeat().then();

