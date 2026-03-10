/**
 * Script principal que inicializa la animación
 * Versión SIN pétalos de rosa
 * Solo tulipanes con viento por CSS
 */

/**
 * Inicializa la aplicación
 */
function init() {

    // 🔹 Mantener mejoras del cristal
    if (typeof enhanceGlass === "function") {
        enhanceGlass();
    }

    // 🌸 Agregar apertura al hacer click
    const tulipanes = document.querySelectorAll(".tulipan");

    tulipanes.forEach(tulipan => {
        tulipan.addEventListener("click", () => {
            tulipan.classList.toggle("open");
        });
    });

}

// Cuando el documento esté listo, inicializar la aplicación
document.addEventListener('DOMContentLoaded', init);