// ======================================
// PORTOCALA APARTMENTS
// Aplicación principal
// ======================================

// Leer el parámetro "apartamento" de la URL
const parametros = new URLSearchParams(window.location.search);

const apartamentoID = parametros.get("apartamento");

// Obtener los datos del apartamento
const apartamento = apartamentos[apartamentoID];
console.log(apartamento);

// Si no existe el apartamento, redirigir al inicio
if (!apartamento) {

    window.location.href = "../index.html";

}

// Mostrar el nombre del apartamento en la página
const nombreApartamento = document.getElementById("nombre-apartamento");

if (nombreApartamento) {

    nombreApartamento.textContent = apartamento.nombre;

}

// Mantener el apartamento en todos los enlaces

document.querySelectorAll("[data-page]").forEach(enlace => {

    const pagina = enlace.dataset.page;

    enlace.href = `${pagina}.html?apartamento=${apartamento.id}`;

});

