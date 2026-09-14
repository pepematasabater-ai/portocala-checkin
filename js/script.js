const urlFormulario = "https://tally.so/r/7RYpjR";

function abrirFormulario(event){

    event.preventDefault();

    const boton = document.getElementById("botonRegistro");

    boton.innerHTML = "⏳ Abriendo formulario...";

    boton.style.pointerEvents = "none";

    setTimeout(function(){

        window.location.href = urlFormulario;

    },600);

}
// ========================================
// ACCESO AL ÁREA DE HUÉSPEDES
// ========================================

const parametros = new URLSearchParams(window.location.search);

const apartamentoID = parametros.get("apartamento");

const botonHuespedes = document.getElementById("botonHuespedes");

if (botonHuespedes && apartamentoID) {

    botonHuespedes.href =
    `pages/area-huesped.html?apartamento=${apartamentoID}`;

}