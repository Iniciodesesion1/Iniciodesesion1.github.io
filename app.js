document.addEventListener('DOMContentLoaded', () => {
    const botonesCompra = document.querySelectorAll('.informacion button');
    const carrito = document.querySelector('#lista-carrito');
    const carritoContenedor = document.querySelector('#carrito');
    const carritoLogo = document.querySelector('#carrito-logo');
    const totalCarrito = document.querySelector('#total-carrito');
    const productosEnCarrito = [];
    let total = 0;

    botonesCompra.forEach((boton) => {
        boton.addEventListener('click', function() {
            const producto = this.parentElement.querySelector('p:first-child').innerText;
            const precioTexto = this.parentElement.querySelector('.precio').innerText;
            const precio = parseFloat(precioTexto.replace('$', '').replace('.', '').replace(',', '.'));
            agregarAlCarrito(producto, precio);
        });
    });

    carritoLogo.addEventListener('click', function() {
        carritoContenedor.classList.toggle('visible');
    });

    function agregarAlCarrito(nombre, precio) {
        productosEnCarrito.push({ nombre, precio });
        total += precio;
        actualizarVistaCarrito();
    }

    function actualizarVistaCarrito() {
        carrito.innerHTML = '';
        productosEnCarrito.forEach(producto => {
            const productoElemento = document.createElement('div');
            productoElemento.classList.add('producto');
            productoElemento.innerHTML = `
                <p>${producto.nombre}</p>
                <p>$${producto.precio.toFixed(2)}</p>
            `;
            carrito.appendChild(productoElemento);
        });
        totalCarrito.innerText = `Total: $${total.toFixed(2)}`;
    }
});
