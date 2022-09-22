function id( str ){
    return document.getElementById( str );
}

function obtener_random(num_min , num_max){

    const amplitud_de_valores = num_max - num_min;
    const valor_a_azar = Math.floor(Math.random() * amplitud_de_valores)
    + num_min;
    return valor_a_azar;
}
