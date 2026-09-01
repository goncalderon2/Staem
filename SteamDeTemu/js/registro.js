// Manejo del formulario de registro

document.addEventListener("DOMContentLoaded", function () {

    const formulario = document.getElementById("form-registro");
    const mensaje = document.getElementById("mensaje-registro");

    formulario.addEventListener("submit", function (evento) {

        evento.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const confirmarPassword = document.getElementById("confirmar-password").value.trim();

        // Validar que ningún campo esté vacío
        if (nombre === "" || email === "" || password === "" || confirmarPassword === "") {
            mostrarMensaje("Por favor completa todos los campos.", "error");
            return;
        }

        // Validar formato básico de correo
        const formatoValido = email.includes("@") && email.includes(".");

        if (!formatoValido) {
            mostrarMensaje("Ingresa un correo electrónico válido.", "error");
            return;
        }

        // Validar que el correo no esté ya registrado
        const correoExistente = usuarios.some(function (usuario) {
            return usuario.email === email;
        });

        if (correoExistente) {
            mostrarMensaje("Ese correo ya está registrado.", "error");
            return;
        }

        // Validar largo mínimo de la contraseña
        if (password.length < 6) {
            mostrarMensaje("La contraseña debe tener al menos 6 caracteres.", "error");
            return;
        }

        // Validar que las contraseñas coincidan
        if (password !== confirmarPassword) {
            mostrarMensaje("Las contraseñas no coinciden.", "error");
            return;
        }

        // Si todo está bien, guardamos el nuevo usuario
        usuarios.push({
            nombre: nombre,
            email: email,
            password: password
        });

        mostrarMensaje("Cuenta creada con éxito. ¡Ya puedes iniciar sesión!", "exito");

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