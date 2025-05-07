
document.getElementById("agregar-al-carrito").addEventListener("click", function() {
    const producto = { nombre: "Producto 1", precio: 20 };
    model.agregarProducto(producto);
    actualizarVista();
  });
  
  function actualizarVista() {
    const lista = document.getElementById("carrito-lista");
    lista.innerHTML = "";
    model.obtenerCarrito().forEach(item => {
      const li = document.createElement("li");
      li.textContent = `${item.nombre} - $${item.precio}`;
      lista.appendChild(li);
    });
    document.getElementById("total").textContent = model.obtenerCarrito().reduce((total, item) => total + item.precio, 0);
  }
  