export const actualizarContador = (carrito) => {
    const contador = document.getElementById("contador-carrito"); 
    if (contador) {
        contador.textContent = carrito.lenght;
    }
}; 

export const mostrarMensaje = (texto) => {
    alert(texto);
}; 