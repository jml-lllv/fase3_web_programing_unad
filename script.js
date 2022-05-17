var valor = document.getElementById("valor");
//detecta el evento cuando se escribe un numero
//y llamo a la funcion convertir
valor.addEventListener('keyup', convertir);
txtResultado = document.getElementById("resultado");

unidad1 = document.getElementById("unidad1");
//detecta el evento cuando se selecciona la unidad
unidad1.addEventListener('change', convertir);
unidad2 = document.getElementById("unidad2");
//detecta el evento cuando se selecciona la unidad
unidad2.addEventListener('change', convertir);

//variable donde se calcula el resultado
var resultado;

//funcion qeu realiza el calculo
function convertir() {
    //Caso en que no haya nada en el input
    if(valor.value==''){
        return;
    }
    
    //Tomo el nuemero del input y convierto a numerico
    numero = valor.value;
    numero = parseFloat(numero);

    if (unidad1.value=="byte" && unidad2.value=="byte") {
        resultado = numero / 1;
        txtResultado.innerHTML = numero + " Bytes equvalen a " + resultado + " Bytes";
    }
    if (unidad1.value=="byte" && unidad2.value=="kilobyte") {
        resultado = numero / 1024;
        txtResultado.innerHTML = numero + " Bytes equvalen a " + resultado + " Kilobytes";
    }
    if (unidad1.value=="byte" && unidad2.value=="megabyte") {
        resultado = numero / 1048576;
        txtResultado.innerHTML = numero + " Bytes equvalen a " + resultado + " Megabytes";
    }
    if (unidad1.value=="byte" && unidad2.value=="gigabyte") {
        resultado = numero / 1073741824;
        txtResultado.innerHTML = numero + " Bytes equvalen a " + resultado + " Gigaytes";
    }
    if (unidad1.value=="byte" && unidad2.value=="terabyte") {
        resultado = numero / 1099511.627776;
        txtResultado.innerHTML = numero + " Bytes equvalen a " + resultado + " Terabytes";
    }
}