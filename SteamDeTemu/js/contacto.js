document.addEventListener("DOMContentLoaded", function () {

    const formulario = document.getElementById("form-contacto");
    const mensaje = document.getElementById("mensaje-contacto");

    if (!formulario) {
        return;
    }

    formulario.addEventListener("submit", function (evento) {

        evento.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const asunto = document.getElementById("asunto").value.trim();
        const texto = document.getElementById("mensaje").value.trim();

        // Validar que los campos no estén vacíos
        if (nombre === "" || email === "" || asunto === "" || texto === "") {
            mostrarMensaje("Por favor completa todos los campos.", "error");
            return;
        }

        // Validar formato básico de correo
        const formatoValido = email.includes("@") && email.includes(".");

        if (!formatoValido) {
            mostrarMensaje("Ingresa un correo electrónico válido.", "error");
            return;
        }

        // Validar largo mínimo del mensaje
        if (texto.length < 10) {
            mostrarMensaje("Tu mensaje debe tener al menos 10 caracteres.", "error");
            return;
        }

        // Si todo está bien, mostramos un mensaje de éxito
        mostrarMensaje("¡Gracias por escribirnos! Te responderemos pronto.", "exito");

        formulario.reset();
    });


    function mostrarMensaje(texto, tipo) {

        mensaje.textContent = texto;

        mensaje.className = "mensaje-formulario";

        if (tipo === "error") {
            mensaje.classList.add("mensaje-error");
        } else {
            mensaje.classList.add("mensaje-exito");
        }
    }

});