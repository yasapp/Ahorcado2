let palabrita;
let cant_errores = 0; //cuantasveces me equicoque
let cant_aciertos = 0; //cuantas veces acerte

const palabras = [
    'MANZANA',
    'CAMISETA',
    'CARAMELO',
    'ÑOQUI',
    'STREAMER',
    'MURCIELAGO'
];

const btn = id('jugar');
const btn_letras = document.querySelectorAll( "#letras button" );

// Click iniciar juego
btn.addEventListener('click', iniciar);

function iniciar(event){

    id('resultado').innerHTML = "";
    id("imagen").src="imagenes/img0.png";
    cant_errores = 0; 
    cant_aciertos = 0; 
    btn.disabled = true;

    const parrafo = id('palabra_a_adivinar');
    parrafo.innerHTML = "";

    const cant_palabras = palabras.length;
    const valor_a_azar = obtener_random( 0, cant_palabras );
    
    palabrita = palabras[ valor_a_azar ];
    console.log(palabrita);
    const cant_letras = palabrita.length;

    for(let i = 0; i < btn_letras.length; i++){
        btn_letras[i].disabled = false;
    }

    for(let i = 0; i < cant_letras; i++){
        const span = document.createElement('span');
        parrafo.appendChild( span );
    }    
}

// Clic de adivinar letras
for(let i = 0; i < btn_letras.length; i++){
    btn_letras[i].addEventListener('click', click_letras);
}
function click_letras(event){

    const spans = document.querySelectorAll( "#palabra_a_adivinar span" );
    const button = event.target;//cual de todas las letras, llamo a la funcion
    button.disabled = true;
    const letra = button.innerHTML.toUpperCase();
    const palabra = palabrita.toUpperCase();


    let acerto = false;
    for(let i = 0; i < palabra.length; i++){
        if( letra == palabra[i] ){
    // la variable i es la posicion de la letra en la palabra
    //que coinside con el span al que tenemos que mostrar la letra
          
          spans[i].innerHTML = letra;
          cant_aciertos++; 
          acerto = true;
        } 
    }

    if( acerto == false ){
        
        cant_errores++;
        id("imagen").src=`imagenes/img${cant_errores}.png`;
        if( cant_errores == 6 ){
            id("imagen").src="imagenes/explosion.gif";
            id('resultado').innerHTML = "Fin del juego la palabra era " + palabrita;
            gameover();
        } 
    }

    if( cant_aciertos == palabrita.length ){
            id('resultado').innerHTML = "Ganaste, Felicidades!";
            gameover();
        }    
   
    console.log( "la letra " + letra + " en la palabra " + palabra + " existe?" + acerto );
}

// Fin del juego
function gameover(){
    for(let i = 0; i < btn_letras.length; i++){
        btn_letras[i].disabled = true;
    }
    btn.disabled = false;
}

const btn_agregar_palabra = id('agregar');
// click para agregar palabras 
btn_agregar_palabra.addEventListener('click', palabra_agregada);

function palabra_agregada(event){
    
    const palabra_nueva = id('palabra_agregar').value;
          
    id('palabra_agregar').focus();

        if(palabra_nueva != ("")){
        
        palabras.push(palabra_nueva);
    } 
    console.log(palabra_nueva);
    console.log(palabras);
    id('palabra_agregar').value = "";
    
}

gameover();