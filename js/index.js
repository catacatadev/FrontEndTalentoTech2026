import { agregarAlCarrito } from "./funcionesCarrito.js";
import { obtenerCarrito } from "./storage.js";
import { actualizarContador } from "./ui.js"; 


const renderizarProductos = () => {
    const contenedor = document.getElementById("contenedor-tarjetas"); 

    fetch("./data/productos.json") 
        .then((response) => response.json()) 
        .then((data) => {
            data.forEach((producto) => {
                const tarjeta = document.createElement("article"); 
                tarjeta.classList.add("card", "text-dark", "text-secondary"); 

                const img = document.createElement("img"); 
                img.src = `./${producto.img}`; 
                img.alt = producto.nombre; 

                const titulo = document.createElement("h3"); 
                titulo.textContent = producto.nombre; 

                const descripcion = document.createElement("p"); 
                descripcion.classList.add("card-description"); 
                descripcion.textContent = producto.descripcion;

                const precio = document.createElement("p"); 
                precio.textContent = `$${producto.precio}`; 

                const boton = document.createElement("button"); 
                boton.classList.add("btn", "bg-secondary", "text-dark"); 
                boton.textContent = "Reservar";

                boton.addEventListener("click", () => {
                    agregarAlCarrito(producto);
                });

                //estructura tarjeta 
                tarjeta.appendChild(img);
                tarjeta.appendChild(titulo);
                tarjeta.appendChild(descripcion);
                tarjeta.appendChild(precio);
                tarjeta.appendChild(boton);

                //agregar tarjeta al dom 
                contenedor.appendChild(tarjeta);

            }); 
              
        })
        .catch((error) => console.log(error)); 
}; 

document.addEventListener("DOMContentLoaded", () => {
    const carrito = obtenerCarrito(); 
    actualizarContador(carrito);
    renderizarProductos();
});