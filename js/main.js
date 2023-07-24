
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btn0 = document.getElementById("btn0");
let btnPunto = document.getElementById("btnPunto");
let btnSumar = document.getElementById("btnSumar");
let btnRestar = document.getElementById("btnRestar");
let btnMultiplicar = document.getElementById("btnMultiplicar");
let btnDividir = document.getElementById("btnDividir");
let btnIgual = document.getElementById("btnIgual");
let btnLimpiar = document.getElementById("btnLimpiar");
let btnBorrar = document.getElementById("btnBorrar");
let pantalla = document.getElementById("pantalla");
let historial = document.getElementById("historial");
let historialOperaciones = "";
let operacion = "";
let resultado = 0;
let equals;
let ultimoDigito = "";

function limpiar(){
    operacion="";
    historialOperaciones="";
    historial.innerText=`-`;
    pantalla.value="0";
    resultado = 0;
    equals = false;
}

btnLimpiar.addEventListener("click", function(event){
    event.preventDefault();
    limpiar();
})//btnLimpiar

btnIgual.addEventListener("click", function(event) {
    event.preventDefault();
    historialOperaciones += btnIgual.innerText;
    resultado = eval(operacion);
    pantalla.value = `${resultado}`;
    historialOperaciones += resultado;
    historial.innerText =`${historialOperaciones}`;
    historialOperaciones = resultado;
    operacion = resultado;
    equals = true;
})//btnIgual

btnSumar.addEventListener("click", function(event) {
    event.preventDefault();
    operacion += btnSumar.innerText;
    pantalla.value=operacion;
    historialOperaciones += btnSumar.innerText;
    equals = false;
    ultimoDigito = btnSumar.innerText;
})//btnSumar

btnRestar.addEventListener("click", function(event) {
    event.preventDefault();
    operacion += btnRestar.innerText;
    pantalla.value=operacion;
    historialOperaciones += btnRestar.innerText;
    equals = false;
})//btnRestar

btnMultiplicar.addEventListener("click", function(event) {
    event.preventDefault();
    operacion += btnMultiplicar.innerText;
    pantalla.value=operacion;
    historialOperaciones += btnMultiplicar.innerText;
    equals = false;
})//btbMultiplicar

btnDividir.addEventListener("click", function(event) {
    event.preventDefault();
    operacion += btnDividir.innerText;
    pantalla.value=operacion;
    historialOperaciones += btnDividir.innerText;
    equals = false;
})//btnDividir

btnBorrar.addEventListener("click", function(event) {
    event.preventDefault();
    operacion = operacion.slice(0,-1);
    pantalla.value=operacion;
    equals = false;
})//btnBorrar

btn1.addEventListener("click", function(event){
    event.preventDefault();
    if(equals){
        historialOperaciones = resultado;
        historial.innerText=`${historialOperaciones}`;
        operacion = btn1.innerText;
        pantalla.value = operacion;
        equals = false;
        ultimoDigito = btnSumar.innerText;
    }
    else{
        operacion += btn1.innerText;
        pantalla.value=operacion;
        historialOperaciones = operacion;
        ultimoDigito = btnSumar.innerText;
    }
})//btn1

btn2.addEventListener("click", function(event){
    event.preventDefault();
    if(equals){
        historialOperaciones = resultado;
        historial.innerText=`${historialOperaciones}`;
        operacion = btn2.innerText;
        pantalla.value = operacion;
        equals = false;
    }
    else{
        operacion += btn2.innerText;
        pantalla.value=operacion;
        historialOperaciones = operacion;
    }
})//btn2

btn3.addEventListener("click", function(event){
    event.preventDefault();
    if(equals){
        historialOperaciones = resultado;
        historial.innerText=`${historialOperaciones}`;
        operacion = btn3.innerText;
        pantalla.value = operacion;
        equals = false;
    }
    else{
        operacion += btn3.innerText;
        pantalla.value=operacion;
        historialOperaciones = operacion;
    }
})//btn3

btn4.addEventListener("click", function(event){
    event.preventDefault();
    if(equals){
        historialOperaciones = resultado;
        historial.innerText=`${historialOperaciones}`;
        operacion = btn4.innerText;
        pantalla.value = operacion;
        equals = false;
    }
    else{
        operacion += btn4.innerText;
        pantalla.value=operacion;
        historialOperaciones = operacion;
    }
})//btn4

btn5.addEventListener("click", function(event){
    event.preventDefault();
    if(equals){
        historialOperaciones = resultado;
        historial.innerText=`${historialOperaciones}`;
        operacion = btn5.innerText;
        pantalla.value = operacion;
        equals = false;
    }
    else{
        operacion += btn5.innerText;
        pantalla.value=operacion;
        historialOperaciones = operacion;
    }
})//btn5

btn6.addEventListener("click", function(event){
    event.preventDefault();
    if(equals){
        historialOperaciones = resultado;
        historial.innerText=`${historialOperaciones}`;
        operacion = btn6.innerText;
        pantalla.value = operacion;
        equals = false;
    }
    else{
        operacion += btn6.innerText;
        pantalla.value=operacion;
        historialOperaciones = operacion;
    }
})//btn6

btn7.addEventListener("click", function(event){
    event.preventDefault();
    if(equals){
        historialOperaciones = resultado;
        historial.innerText=`${historialOperaciones}`;
        operacion = btn7.innerText;
        pantalla.value = operacion;
        equals = false;
    }
    else{
        operacion += btn7.innerText;
        pantalla.value=operacion;
        historialOperaciones = operacion;
    }
})//btn7

btn8.addEventListener("click", function(event){
    event.preventDefault();
    if(equals){
        historialOperaciones = resultado;
        historial.innerText=`${historialOperaciones}`;
        operacion = btn8.innerText;
        pantalla.value = operacion;
        equals = false;
    }
    else{
        operacion += btn8.innerText;
        pantalla.value=operacion;
        historialOperaciones = operacion;
    }
})//btn8

btn9.addEventListener("click", function(event){
    event.preventDefault();
    if(equals){
        historialOperaciones = resultado;
        historial.innerText=`${historialOperaciones}`;
        operacion = btn9.innerText;
        pantalla.value = operacion;
        equals = false;
    }
    else{
        operacion += btn9.innerText;
        pantalla.value=operacion;
        historialOperaciones = operacion;
    }
})//btn9

btn0.addEventListener("click", function(event){
    event.preventDefault();
    if(equals){
        historialOperaciones = resultado;
        historial.innerText=`${historialOperaciones}`;
        operacion = btn0.innerText;
        pantalla.value = operacion;
        equals = false;
    }
    else{
        operacion += btn0.innerText;
        pantalla.value=operacion;
        historialOperaciones = operacion;
    }
})//btn0

btnPunto.addEventListener("click", function(event){
    event.preventDefault();
    if(equals){
        historialOperaciones = resultado;
        historial.innerText=`${historialOperaciones}`;
        operacion = btnPunto.innerText;
        pantalla.value = operacion;
        equals = false;
    }
    else{
        operacion += btnPunto.innerText;
        pantalla.value=operacion;
        historialOperaciones = operacion;
    }
})//btnPunto