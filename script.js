let lienzo = document.querySelector("canvas");
let pincel = lienzo.getContext("2d");



// Dibujo de la base:
function dibujoBase() {
    pincel.beginPath();
    pincel.moveTo(100, 500);
    pincel.lineTo(150, 500);
    pincel.lineTo(125, 475);
    pincel.closePath();
    pincel.stroke();
}

// Dibujo de columna:
function dibujoColumna() {
    pincel.beginPath();
    pincel.moveTo(125, 475);
    pincel.lineTo(125, 175);
    pincel.closePath();
    pincel.stroke();
}

// Dibujo de viga:
function dibujoViga() {
    pincel.beginPath();
    pincel.moveTo(125, 200);
    pincel.lineTo(150, 175);
    pincel.moveTo(125, 175);
    pincel.lineTo(275, 175);
    pincel.closePath();
    pincel.stroke();
}

// Dibujo de soga:
function dibujoSoga() {
    pincel.beginPath();
    pincel.moveTo(275, 175);
    pincel.lineTo(275, 225);
    pincel.closePath();
    pincel.stroke();
}

// Dibujo de cabeza:
function dibujoCabeza() {
    pincel.beginPath();
    pincel.arc(275, 250, 25, 0, 2 * Math.PI);
    pincel.stroke();
}

// Dibujo de cuerpo:
function dibujoCuerpo() {
    pincel.beginPath();
    pincel.moveTo(275, 275);
    pincel.lineTo(275, 350);
    pincel.closePath();
    pincel.stroke();
}

// Dibujo de pierna izquierda:
function dibujoPiernaIzq() {
    pincel.beginPath();
    pincel.moveTo(275, 350);
    pincel.lineTo(250, 425);
    pincel.closePath();
    pincel.stroke();
}

// Dibujo de pierna derecha:
function dibujoPiernaDer() {
    pincel.beginPath();
    pincel.moveTo(275, 350);
    pincel.lineTo(300, 425);
    pincel.closePath();
    pincel.stroke();
}

// Dibujo de brazo izquierdo:
function dibujoBrazoIzq() {
    pincel.beginPath();
    pincel.moveTo(275, 285);
    pincel.lineTo(250, 335);
    pincel.closePath();
    pincel.stroke();
}

// Dibujo de brazo derecho:
function dibujoBrazoDer() {
    pincel.beginPath();
    pincel.moveTo(275, 285);
    pincel.lineTo(300, 335);
    // pincel.lineTo(335, 285);
    // pincel.strokeRect(330, 280, 5, 5);
    // pincel.moveTo(335, 285);
    // pincel.lineTo(335, 275)
    pincel.closePath();
    pincel.stroke();
}







