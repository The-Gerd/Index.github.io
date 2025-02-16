function reservarMesa() {
    alert("Gracias por reservar una mesa. Nos pondremos en contacto contigo pronto.");
}

document.getElementById('formularioContacto').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Gracias por contactarnos. Te responderemos lo antes posible.");
});

function mostrarCategoria(categoria) {
    document.querySelectorAll('.categoria').forEach(function(seccion) {
        seccion.style.display = 'none';
    });

    document.getElementById(categoria).style.display = 'block';
}

window.onload = function() {
    mostrarCategoria('entradas');
};