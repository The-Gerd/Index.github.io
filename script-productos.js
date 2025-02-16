function mostrarCategoria(categoria) {
    // Oculta todas las categorías
    document.querySelectorAll('.categoria').forEach(function(seccion) {
        seccion.style.display = 'none';
    });

    // Muestra la categoría seleccionada
    document.getElementById(categoria).style.display = 'block';
}

// Mostrar la categoría de alimentos por defecto al cargar la página
window.onload = function() {
    mostrarCategoria('alimentos');
};