window.onload = () => {
    document.querySelector('#btn').addEventListener("click", () => {
        document.querySelector('#excuse').innerHTML = generateExcuse();
    })
}

let generateExcuse = () => {
    
    let who = ['Mi padre', 'Mi carro', 'El perro', 'Mi celular', 'Mi esposa', 'Mi casa', 'Mi hámster'];
    let what = ['se cayó', 'se quemó', 'fue secuestrado', 'desapareció', 'se suicidó', 'se murió', 'está descompuesto'];
    let where = ['en la casa', 'en el parque', 'en Delta Amacuro', 'en el Bingo', 'en la tercera dimensión'];
    let when = ['hace 30 min', 'ayer', 'esta tarde', 'en la madrugada'];

    let whoRandom = Math.floor(Math.random() * who.length);
    let whatRandom = Math.floor(Math.random() * what.length);
    let whereRandom = Math.floor(Math.random() * where.length);
    let whenRandom = Math.floor(Math.random() * when.length);

    return who[whoRandom] + ' ' + what[whatRandom] + ' ' + where[whereRandom] + ' ' + when[whenRandom];
    
}
