
let carrito = [];

function agregarProducto(producto) {
  carrito.push(producto);
}

function obtenerCarrito() {
  return carrito;
}

function vaciarCarrito() {
  carrito = [];
}
