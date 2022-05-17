function calcularVenta() {
    let valorCompra = parseInt(document.getElementById("inputValorCompra").value);
    let porcentajeUtilidad = parseInt(document.getElementById("inputPorcentajeUtilidad").value);
    let porcentajeImpuestos = parseInt(document.getElementById("inputPorcentajeImpuestos").value);

    let porcentajeIva = valorCompra * porcentajeImpuestos / 100

    //variables de salida
    document.getElementById("outputValorVenta").value = (valorCompra * porcentajeUtilidad / 100) + valorCompra + porcentajeIva;
    document.getElementById("outputGanancia").value = (valorCompra * porcentajeUtilidad / 100);
}

function borrarCampos() {
    let elements = document.getElementById("calculadoraVentas").getElementsByTagName("input");
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].type == "number") {
            elements[i].value = "";
        }
    }
}