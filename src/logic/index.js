fetch('http://127.0.0.1:5500/src/api/data.json')
    .then((response) => response.json())
    .then((json) => obtenerDatos(json))
    .catch((err) => console.log('A ocurrido un error', err));

const listaDePaises = [];

function obtenerDatos(json){
    for(let i = 0; i < 10; i++){
        let nombres = json[i];
        listaDePaises.push(nombres)
    }
    pintaApi() 
}

function pintaApi(){
    const contenedor = document.querySelector("#contenedor")
    
    for(let i=0; i < listaDePaises.length; i++){
        
        const div = document.createElement("div");
        div.className = "p-5";
        div.id = "cardPaises";

        const bandera = document.createElement("img");
        bandera.className = "imgBandera";
        bandera.src = listaDePaises[i].flags.png;

        const nombreCard = document.createElement("h1");
        nombreCard.innerHTML = listaDePaises[i].name;

        const population = document.createElement("p");
        population.innerHTML = `Population : ${listaDePaises[i].population}`;
        
        const region = document.createElement("p");
        region.innerHTML = `Region : ${listaDePaises[i].region}`;

        const capital = document.createElement("p");
        capital.innerHTML = `Capital : ${listaDePaises[i].capital}`;

        contenedor.appendChild(div);
        div.appendChild(bandera);
        div.appendChild(nombreCard);
        div.appendChild(population);
        div.appendChild(region);
        div.appendChild(capital);
    }
}



