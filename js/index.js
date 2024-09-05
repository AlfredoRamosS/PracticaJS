function calcular() {
    //Entradas
    var numero1 = document.getElementById("txtNumero1");
    var numero2 = document.getElementById("txtNumero2");

    //Procesos
    var total = parseFloat(numero1.value) + parseFloat(numero2.value);

    //Salida
    document.getElementById("txtResultado").value = total;
}