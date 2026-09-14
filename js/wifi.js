function copiar(id) {

    const elemento = document.getElementById(id);

    if (!elemento) {
        return;
    }

    const texto = elemento.textContent;

    navigator.clipboard.writeText(texto)
        .then(function () {

            const mensaje = document.getElementById("mensajeCopiado");

            if (mensaje) {
                mensaje.textContent = "✓ Copiado al portapapeles";

                setTimeout(function () {
                    mensaje.textContent = "";
                }, 2000);
            }

        })
        .catch(function (error) {

            console.error("No se pudo copiar:", error);

        });

}

// ========================================
// INFORMACIÓN WIFI DEL APARTAMENTO
// ========================================

const datosWifi = apartamento.wifi;

// Mostrar nombre de la red
const elementoSSID = document.getElementById("wifi-ssid");

if (elementoSSID) {
    elementoSSID.textContent = datosWifi.ssid;
}

// Mostrar contraseña
const elementoPassword = document.getElementById("wifi-password");

if (elementoPassword) {
    elementoPassword.textContent = "••••••••";
    elementoPassword.dataset.password = datosWifi.password;
}

// ========================================
// MOSTRAR / OCULTAR CONTRASEÑA
// ========================================

const botonMostrar = document.getElementById("mostrar-password");

if (botonMostrar && elementoPassword) {

    botonMostrar.addEventListener("click", function () {

        if (elementoPassword.textContent === "••••••••") {

            elementoPassword.textContent = elementoPassword.dataset.password;

            botonMostrar.textContent = "Ocultar";

        } else {

            elementoPassword.textContent = "••••••••";

            botonMostrar.textContent = "Mostrar";

        }

    });

}

// ========================================
// COPIAR CONTRASEÑA
// ========================================

function copiarPassword() {

    const password = elementoPassword.dataset.password;

    navigator.clipboard.writeText(password)
        .then(function () {

            const mensaje = document.getElementById("mensajeCopiado");

            if (mensaje) {

                mensaje.textContent = "✓ Copiado al portapapeles";

                setTimeout(function () {

                    mensaje.textContent = "";

                }, 2000);

            }

        })
        .catch(function (error) {

            console.error("No se pudo copiar la contraseña:", error);

        });

}