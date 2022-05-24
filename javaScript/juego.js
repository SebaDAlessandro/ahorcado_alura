const pantalla = document.querySelector('canvas');
let pincel = pantalla.getContext('2d');
const panelId = document.getElementById('panelGrafico')
const letrasDescartadasId = document.getElementById('letras-descartadas')
const btnInicioId = document.getElementById('btn-nuevoJuego');
const letrasAcertadas = document.getElementById('letras-acertadas')

/*-------------------- toma el boton de reinicio de pagina --------------------*/

const reload = document.getElementById('reload');

const cargar = document.getElementById('cargar');

/*-------------------- Guardar Palabras --------------------*/

const btnGuardarId = document.getElementById('btn-guardar');

/*-------------------- input para agregar palabra --------------------*/

const inputEl = document.getElementById('ingresopalabra')

/*-------------------- Letras --------------------*/

// let arrayPalabras = ['Biedma', 'Cushamen', 'Escalante', 'Ameghino', 'Futaleufu', 'Gaiman', 'Gastre', 'Languiñeo', 'Martires', 'Indios', 'Rawson', 'Senguer', 'Sarmiento', 'Tehuelches', 'Telsen'];

let arrayPalabras = ['Alura', 'Oracle', 'Education', 'HTML', 'JavaScript', 'Developer', 'Challenge']

/*-------------------- Tablero Canvas --------------------*/
//inicio y color
function inicio(color){
    pincel.beginPath();
    pincel.fillStyle = color;
}

/*-------------------- estructura --------------------*/
//base
const base =(color)=> {
    inicio(color)
    pincel.fillRect(70, 360, 170, 10);
}

//mastil
function mastil(color) {
    inicio(color)
    pincel.fillRect(150, 110, 10, 250);
}

//viga
function viga(color) {
    inicio(color)
    pincel.fillRect(150, 110, 170, 10);
}

//soporte
function soporte(color) {
    inicio(color)
    pincel.fillRect(315, 110, 5, 20);
}

/*-------------------- munheco --------------------*/
//cabeza
function cabeza(color) {
    inicio(color)
    pincel.arc(318,155,25,0,2*3.14)
    pincel.fill()
    inicio('blueviolet')
    pincel.arc(318,155,20,0,2*3.14)
    pincel.fill()
}

//cuerpo
function cuerpo(color) {
    inicio(color)
    pincel.fillRect(315, 180, 5, 110);
}

//brazos izquierdo
function braIzquierdo(color) {
    inicio(color)
    pincel.moveTo(315, 190);
    pincel.lineTo(315, 200);
    pincel.lineTo(280, 250);
    pincel.fill();
}

//brazo derecho
function braDerecho(color) {
    inicio(color)
    pincel.moveTo(320, 190);
    pincel.lineTo(320, 200);
    pincel.lineTo(355, 250);
    pincel.fill();
}

//pierna izquierda
function pieIzquierdo(color) {
    inicio(color)
    pincel.moveTo(315, 275);
    pincel.lineTo(315, 290);
    pincel.lineTo(280, 340);
    pincel.fill();
}

//pierna derecha
function pieDerecho(color){
    inicio(color)
    pincel.moveTo(320, 275);
    pincel.lineTo(320, 290);
    pincel.lineTo(355, 340);
    pincel.fill();
}


/*-------------------- logica de juego --------------------*/

let palabraSeleccionada;
let letrasUsadas;
let errores;
let aciertos;

const addLetra = letra => {
    const letraElemento = document.createElement('span');
    letraElemento.innerHTML = letra;
    letrasDescartadasId.appendChild(letraElemento)
}

const perdiste = ()=> {
    alert('Fin del juego, la palabra seleccionada era: '+ palabraSeleccionada.join(''));
    document.removeEventListener("keydown",eventoLetra);
}

const letraErrada = ()=>{
    switch (errores) {
        case 0: base('brown');
                break;
        case 1: mastil('brown');
                break;
        case 2: viga('brown');
                break;
        case 3: soporte('brown');
                break;
        case 4: cabeza('black');
                break;
        case 5: cuerpo('black');
                break;
        case 6: braIzquierdo('black');
                break;
        case 7: braDerecho('black');
                break;
        case 8: pieIzquierdo('black');
                break;
        case 9: pieDerecho('black');
                break;
        default:
            break;
    }
    errores++;
    if (errores === 10) perdiste()
}

const ganaste = ()=>{
    alert('GANASTE - Felicitaciones!!!');
    document.removeEventListener("keydown",eventoLetra);
}

const letraCorrecta = letra =>{
    const {children} = letrasAcertadas;
    for (let i = 0; i < children.length; i++) {
        if(children[i].innerHTML === letra){
            children[i].classList.toggle('hidden');
            aciertos++;
        }  
    }
    if (aciertos === palabraSeleccionada.length) ganaste();
}

const letraInput = letra =>{
    if(palabraSeleccionada.includes(letra)){
            letraCorrecta(letra)
    }else{
        letraErrada();
    }
    addLetra(letra);
}

const eventoLetra = event =>{
    let newLetra = event.key.toUpperCase();
    if(newLetra.match(/^[a-zñ]$/i) && !letrasUsadas.includes(newLetra)){
        letraInput(newLetra);
        letrasUsadas.push(newLetra);
    }
}

const printPalabra = ()=>{
    palabraSeleccionada.forEach(letra =>{
        const letraElement = document.createElement('span')
        letraElement.innerHTML = letra;
        letraElement.classList.add('letra');
        letraElement.classList.add('hidden');
        letrasAcertadas.appendChild(letraElement);
    })
}

const seleccionRandom = ()=>{
    let palabra = arrayPalabras[Math.floor((Math.random()*arrayPalabras.length))].toUpperCase();
    palabraSeleccionada = palabra.split('');
}

const iniciarJuego = ()=>{
    letrasUsadas = [];
    errores=0;
    aciertos=0;
    base('blueviolet');
    mastil('blueviolet');
    viga('blueviolet');
    soporte('blueviolet');
    cabeza('blueviolet');
    cuerpo('blueviolet');
    braIzquierdo('blueviolet');
    braDerecho('blueviolet');
    pieIzquierdo('blueviolet');
    pieDerecho('blueviolet');
    letrasAcertadas.innerHTML = '';
    letrasDescartadasId.innerHTML = '';
    seleccionRandom()
    printPalabra()
    document.addEventListener('keydown', eventoLetra)
}

base('brown');
mastil('brown');
viga('brown');
soporte('brown');
cabeza('black');
cuerpo('black');
braIzquierdo('black');
braDerecho('black');
pieIzquierdo('black');
pieDerecho('black');
btnInicioId.addEventListener('click', iniciarJuego)

//Funciona que guarda la palabra
btnGuardarId.addEventListener('click', (e)=>{
    e.preventDefault();
    let newPalabra;
    newPalabra = document.getElementById('ingresopalabra').value;
    newPalabra=newPalabra.toUpperCase();
    var expreg = new RegExp("^[A-ZÑ]{3,10}$");
    if(expreg.test(newPalabra)){
        arrayPalabras = [newPalabra]
    }else{
        alert('IMPORTANTE: No ingresar números, símbolos o caracteres especiales (nada de espacios, acentos, etc)! Solo se aceptan palabras que contengan de 3 a 10 letras!')
    }
})

//reinicia todo el juego
reload.addEventListener('click', _ => {
    location.reload();
});

cargar.addEventListener('click', _ => {
    location.reload();
});