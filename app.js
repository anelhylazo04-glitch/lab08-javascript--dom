// ========== PASO 2: Clase Producto ==========
class Producto {
    constructor(nombre, precio, descuento, imagen) {
        this.nombre = nombre;
        this.precio = precio;
        this.descuento = descuento; 
        this.imagen = imagen;
    }

    // Retorna el precio con el descuento aplicado
    calcularPrecioFinal() {
        return this.precio - (this.precio * this.descuento / 100);
    }
}

// ========== PASO 3: Instanciar objetos y catálogo ==========
const catalogo = [
    new Producto("Laptop", 2500, 15, "https://picsum.photos/250/150"),
    new Producto("Teclado", 120, 10, "https://picsum.photos/251/150"),
    new Producto("Mouse", 80, 25, "https://picsum.photos/252/150")
];

// ========== PASO 4: Renderizado dinámico en el DOM ==========
const contenedor = document.getElementById("contenedor-productos");

catalogo.forEach((producto, index) => {
    // Crear la tarjeta
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");

    // Imagen
    const img = document.createElement("img");
    img.src = producto.imagen;
    img.alt = producto.nombre;

    // Nombre
    const nombre = document.createElement("h3");
    nombre.textContent = producto.nombre;

    // Precio base
    const precio = document.createElement("p");
    precio.textContent = `Precio: S/ ${producto.precio.toFixed(2)}`;
    precio.id = `precio-${index}`;

    // Botón
    const boton = document.createElement("button");
    boton.textContent = "Aplicar Descuento";

    // ========== PASO 5: Evento click ==========
    boton.addEventListener("click", () => {
        const precioFinal = producto.calcularPrecioFinal();
        const parrafoPrecio = document.getElementById(`precio-${index}`);
        parrafoPrecio.textContent = `Precio final: S/ ${precioFinal.toFixed(2)}`;
        parrafoPrecio.style.color = "#28a745";
        boton.disabled = true;
    });

    // Armar la tarjeta
    tarjeta.appendChild(img);
    tarjeta.appendChild(nombre);
    tarjeta.appendChild(precio);
    tarjeta.appendChild(boton);

    // Insertar en el DOM
    contenedor.appendChild(tarjeta);
});
