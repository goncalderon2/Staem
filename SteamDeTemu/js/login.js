document.addEventListener("DOMContentLoaded", function () {

    const formulario = document.getElementById("form-login");
    const mensaje = document.getElementById("mensaje-login");

    formulario.addEventListener("submit", function (evento) {

        evento.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        if (email === "" || password === "") {
            mostrarMensaje("Por favor completa todos los campos.", "error");
            return;
        }

        const formatoValido = email.includes("@") && email.includes(".");

        if (!formatoValido) {
            mostrarMensaje("Ingresa un correo electrónico válido.", "error");
            return;
        }

        if (password.length < 6) {
            mostrarMensaje("La contraseña debe tener al menos 6 caracteres.", "error");
            return;
        }

        // Si todo está bien, mostramos un mensaje de éxito
        mostrarMensaje("Inicio de sesión exitoso. ¡Bienvenido de nuevo!", "exito");

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