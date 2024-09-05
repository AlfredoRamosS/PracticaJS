var frutas = ["Manzana", "Uva", "Pera", "Mango", "Jocote", "Sandia"];

for (var i = 0; i < frutas.length; i++) {
    document.getElementById("listaFrutas").innerHTML += "<li>" + frutas[i] + "</li>";

}

// Objeto
var persona = { nombre: "Juan", telefono: "1234-5678" };

// Array  de objeto
var contactos = [
    { nombre: "Luis", telefono: "1934-5678" },
    { nombre: "Pedro", telefono: "8765-4321" }
];

contactos.push(persona); // Agregando un elemento = 2

console.log(contactos)

for (var i = 0; i < contactos.length; i++) {

    let li = "<li>" + contactos[i].nombre + ": " + contactos[i].telefono + "</li>";
    document.getElementById("listaPersonas").innerHTML += li;
}