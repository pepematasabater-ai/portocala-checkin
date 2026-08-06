const urlFormulario = "https://tally.so/r/D4oqWE";

function abrirFormulario(event){

    event.preventDefault();

    const boton = document.getElementById("botonRegistro");

    boton.innerHTML = "⏳ Abriendo formulario...";

    boton.style.pointerEvents = "none";

    setTimeout(function(){

        window.location.href = urlFormulario;

    },600);

}