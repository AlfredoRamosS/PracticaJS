const productos = [
    { nombre: "Telefono", precio: 175 },
    { nombre: "Televisor", precio: 300 },
    { nombre: "Tablet", precio: 210 },
    { nombre: "Mesa", precio: 50 },
    { nombre: "Cama", precio: 150 },
    { nombre: "Sillon", precio: 250 },
    { nombre: "Silla", precio: 20 },
    { nombre: "Chinero", precio: 125 },
    { nombre: "Ropero", precio: 125 },
    { nombre: "Radio", precio: 100 }
];

// Obtener el cuerpo de la tabla
const tablaProductos = document.getElementById("tabla-productos");

// Función para agregar productos a la tabla
function agregarProductosATabla() {
    productos.forEach(producto => {
        const fila = document.createElement("tr");

        const celdaNombre = document.createElement("td");
        celdaNombre.textContent = producto.nombre;
        fila.appendChild(celdaNombre);

        const celdaPrecio = document.createElement("td");
        celdaPrecio.textContent = producto.precio;
        fila.appendChild(celdaPrecio);

        tablaProductos.appendChild(fila);
    });
}

// Llamar a la función para agregar los productos a la tabla
agregarProductosATabla();