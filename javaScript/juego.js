var pantalla = document.querySelector('canvas');
var pincel = pantalla.getContext('2d');

//inicio y color
function inicio(color){
    pincel.beginPath();
    pincel.fillStyle = color;
}

/*-------------------- estructura --------------------*/
//base
function base() {
    inicio('black')
    pincel.fillRect(70, 360, 170, 5);
}

//mastil
function mastil() {
    inicio('black')
    pincel.fillRect(150, 110, 5, 250);
}

//viga
function viga() {
    inicio('black')
    pincel.fillRect(150, 110, 170, 5);
}

//palito
function palito() {
    inicio('black')
    pincel.fillRect(315, 110, 5, 20);
}

/*-------------------- munheco --------------------*/
//cabeza
function cabeza() {
    inicio('black')
    pincel.arc(318,155,25,0,2*3.14)
    pincel.fill()
    inicio('blueviolet')
    pincel.arc(318,155,20,0,2*3.14)
    pincel.fill()
}

//cuerpo
function cuerpo() {
    inicio('black')
    pincel.fillRect(315, 180, 5, 110);
}

//brazos izquierdo
function braIzquierdo() {
    inicio('black')
    pincel.moveTo(315, 190);
    pincel.lineTo(315, 200);
    pincel.lineTo(280, 250);
    pincel.fill();
}

//brazo derecho
function braDerecho() {
    inicio('black')
    pincel.moveTo(320, 190);
    pincel.lineTo(320, 200);
    pincel.lineTo(355, 250);
    pincel.fill();
}

//pierna izquierda
function pieIzquierdo() {
    inicio('black')
    pincel.moveTo(315, 275);
    pincel.lineTo(315, 290);
    pincel.lineTo(280, 340);
    pincel.fill();
}

//pierna derecha
function pieDerecho(){
    inicio('black')
    pincel.moveTo(320, 275);
    pincel.lineTo(320, 290);
    pincel.lineTo(355, 340);
    pincel.fill();
}

//estructura
base();
mastil();
viga();
palito()

//munheco
cabeza();
cuerpo();
braIzquierdo();
braDerecho();
pieIzquierdo();
pieDerecho();

