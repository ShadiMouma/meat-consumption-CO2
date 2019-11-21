export const mapHTML = (name, co2, meat, electro): string =>
    `<div class="map-hoverinfo hoverinfo">
        <strong class="map-name mb-1 d-block"> ${name} </strong>
        
        <div class="d-flex flex-between">
            <div>
                <div class="map-co2 bold"> CO2 Emmision: </div>
                <div class="bold"> CO2-Fleischkonsum: </div>
                <div class="map-electro bold"> Stromverbrauch: </div>
    
            </div>
           
            <div>       
                <div> ${co2} MT </div>
                <div> ${meat} MT</div>
                <div> ${electro} gCO2eq/kWh </div>
            </div>
        </div>
    </div>`;