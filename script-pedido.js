let pedido = [];
let total = 0;

function agregarAlPedido(nombre, precio) {
    // Agrega el plato al pedido
    pedido.push({ nombre, precio });
    total += precio;

    // Actualiza la lista y el total
    actualizarResumen();
}

function actualizarResumen() {
    const listaPedido = document.getElementById('lista-pedido');
    const totalPedido = document.getElementById('total-pedido');

    // Limpia la lista
    listaPedido.innerHTML = '';

    // Agrega los platos al resumen
    pedido.forEach((plato) => {
        const item = document.createElement('li');
        item.textContent = `${plato.nombre} - $${plato.precio.toFixed(2)}`;
        listaPedido.appendChild(item);
    });

    // Actualiza el total
    totalPedido.textContent = total.toFixed(2);
}

function confirmarPedido() {
    if (pedido.length === 0) {
        alert('Por favor, agrega al menos un plato a tu pedido.');
    } else {
        alert(`Pedido confirmado! Total: $${total.toFixed(2)}\nGracias por tu compra.`);
        pedido = [];
        total = 0;
        actualizarResumen();
    }
}

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});