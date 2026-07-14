import {
    guardarCarrito,
    obtenerCarrito,
    vaciarCarritoStorage,
} from "./storage.js"; 

import { actualizarContador, mostrarMensaje } from "./ui.js"; 

export const agregarAlCarrito = (producto) => {
    //carrito pide al localStorage 
    const carrito = obtenerCarrito();
    carrito.push(producto); 

    //guarda el carrito en localStorage 
    guardarCarrito(carrito); 

    //actualiza numero en el carrito 
    actualizarContador(carrito); 
    mostrarMensaje("Producto agregado "); 
}; 

export const eliminarProducto = (indice) => {
    const carrito = obtenerCarrito() 
    carrito.splice(indice, 1); 

    //actualiza carrito en el localstorage
    guardarCarrito(carrito); 

    //actualiza contador 
    actualizarContador(carrito);
    mostrarMensaje("Producto eliminado");
}; 

export const vaciarCarrito = () => {
    vaciarCarritoStorage(); 
    actualizarContador([]); 
    mostrarMensaje("Se vació el carrito");
};