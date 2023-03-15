
fetch('https://restcountries.com/v2/all')
.then(response => response.json())
.then(json => mostrarPaises(json))
.catch(err => console.log('Solicitud fallida', err))

export function filtrar(json, num){
    let paises = [];
    for(let i = 0; i < num ; i++){
        paises.push(json[i])
    }
    return paises
}

// function mostrarPaises(json){
//     var resultado = filtrar(json, 10);
//     // console.log(resultado[0].flags.png)
//     var res = resultado.map(function(i){
//         console.log(i.name + " " + i.flags.png)
//     })

// }
