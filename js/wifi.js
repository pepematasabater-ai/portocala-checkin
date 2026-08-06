function copiar(id){

    const texto = document.getElementById(id).innerText;

    navigator.clipboard.writeText(texto);

    const mensaje = document.getElementById("mensajeCopiado");

    mensaje.innerHTML = "✅ ¡Copiado al portapapeles!";

    setTimeout(function(){

        mensaje.innerHTML = "";

    },2000);

}

