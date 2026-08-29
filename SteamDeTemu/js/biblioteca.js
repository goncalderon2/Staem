// ========================================
// BIBLIOTECA PERSONAL
// ========================================


// ========================================
// OBTENER DATOS DE LOCALSTORAGE
// ========================================

function obtenerBiblioteca() {

    const biblioteca =
        localStorage.getItem("biblioteca");


    // Si todavía no existe una biblioteca
    if (biblioteca === null) {

        return {
            favoritos: [],
            jugados: [],
            pendientes: []
        };

    }


    // Convertimos el texto guardado
    // en un objeto JavaScript
    return JSON.parse(biblioteca);

}


// ========================================
// GUARDAR BIBLIOTECA
// ========================================

function guardarBiblioteca(biblioteca) {

    localStorage.setItem(
        "biblioteca",
        JSON.stringify(biblioteca)
    );

}


// ========================================
// VERIFICAR SI EXISTE UN VIDEOJUEGO
// ========================================

function videojuegoExiste(categoria, idVideojuego) {

    const biblioteca =
        obtenerBiblioteca();


    return biblioteca[categoria].includes(
        Number(idVideojuego)
    );

}


// ========================================
// AGREGAR VIDEOJUEGO
// ========================================

function agregarVideojuego(categoria, idVideojuego) {

    const biblioteca =
        obtenerBiblioteca();


    idVideojuego =
        Number(idVideojuego);


    // Si no existe, lo agregamos
    if (!biblioteca[categoria].includes(idVideojuego)) {

        biblioteca[categoria].push(idVideojuego);

        guardarBiblioteca(biblioteca);

    }

}


// ========================================
// QUITAR VIDEOJUEGO
// ========================================

function quitarVideojuego(categoria, idVideojuego) {

    const biblioteca =
        obtenerBiblioteca();


    idVideojuego =
        Number(idVideojuego);


    biblioteca[categoria] =
        biblioteca[categoria].filter(function(id) {

            return id !== idVideojuego;

        });


    guardarBiblioteca(biblioteca);

}


// ========================================
// FAVORITOS
// ========================================

function cambiarFavorito(idVideojuego) {

    // Si ya está en favoritos
    if (videojuegoExiste("favoritos", idVideojuego)) {

        quitarVideojuego(
            "favoritos",
            idVideojuego
        );

    } else {

        agregarVideojuego(
            "favoritos",
            idVideojuego
        );

    }

}


// ========================================
// ESTADO DEL VIDEOJUEGO
// ========================================

function cambiarEstadoVideojuego(
    categoria,
    idVideojuego
) {

    const biblioteca =
        obtenerBiblioteca();


    idVideojuego =
        Number(idVideojuego);


    // Categoría contraria
    const categoriaContraria =
        categoria === "jugados"
            ? "pendientes"
            : "jugados";


    // Si ya tiene ese estado,
    // quitamos el videojuego
    if (
        biblioteca[categoria].includes(
            idVideojuego
        )
    ) {

        biblioteca[categoria] =
            biblioteca[categoria].filter(
                function(id) {

                    return id !== idVideojuego;

                }
            );


        guardarBiblioteca(biblioteca);

        return;

    }


    // Agregamos al nuevo estado
    biblioteca[categoria].push(
        idVideojuego
    );


    // Quitamos de la categoría contraria
    biblioteca[categoriaContraria] =
        biblioteca[categoriaContraria].filter(
            function(id) {

                return id !== idVideojuego;

            }
        );


    guardarBiblioteca(biblioteca);

}


// ========================================
// ACTUALIZAR BOTONES
// ========================================

function actualizarBotones() {

    const botonFavorito =
        document.querySelector(".btn-favorito");

    const botonJugado =
        document.querySelector(".btn-jugado");

    const botonPendiente =
        document.querySelector(".btn-pendiente");


    // Si no estamos en la página de detalle
    if (!botonFavorito) {

        return;

    }


    const idVideojuego =
        Number(botonFavorito.dataset.id);


    // FAVORITOS

    if (
        videojuegoExiste(
            "favoritos",
            idVideojuego
        )
    ) {

        botonFavorito.textContent =
            "♥ 𝗔𝗴𝗿𝗲𝗴𝗮𝗱𝗼 𝗮 𝗳𝗮𝘃𝗼𝗿𝗶𝘁𝗼𝘀";

    } else {

        botonFavorito.textContent =
            "♡ Agregar a favoritos";

    }


    // JUGADOS

    if (
        videojuegoExiste(
            "jugados",
            idVideojuego
        )
    ) {

        botonJugado.textContent =
            "✔ 𝗠𝗮𝗿𝗰𝗮𝗱𝗼 𝗰𝗼𝗺𝗼 𝗷𝘂𝗴𝗮𝗱𝗼";

    } else {

        botonJugado.textContent =
            "✓ Marcar como jugado";

    }


    // PENDIENTES

    if (
        videojuegoExiste(
            "pendientes",
            idVideojuego
        )
    ) {

        botonPendiente.textContent =
            "⌛ 𝗠𝗮𝗿𝗰𝗮𝗱𝗼 𝗰𝗼𝗺𝗼 𝗽𝗲𝗻𝗱𝗶𝗲𝗻𝘁𝗲";

    } else {

        botonPendiente.textContent =
            "⏳ Marcar como pendiente";

    }

}


// ========================================
// EVENTOS DE LOS BOTONES
// ========================================

function iniciarBotonesBiblioteca() {

    const botonFavorito =
        document.querySelector(".btn-favorito");

    const botonJugado =
        document.querySelector(".btn-jugado");

    const botonPendiente =
        document.querySelector(".btn-pendiente");


    // Si los botones todavía no existen,
    // terminamos la función
    if (!botonFavorito) {

        return;

    }


    // FAVORITO

    botonFavorito.addEventListener(
        "click",
        function() {

            cambiarFavorito(
                this.dataset.id
            );


            actualizarBotones();

        }
    );


    // JUGADO

    botonJugado.addEventListener(
        "click",
        function() {

            cambiarEstadoVideojuego(
                "jugados",
                this.dataset.id
            );


            actualizarBotones();

        }
    );


    // PENDIENTE

    botonPendiente.addEventListener(
        "click",
        function() {

            cambiarEstadoVideojuego(
                "pendientes",
                this.dataset.id
            );


            actualizarBotones();

        }
    );

}


// ========================================
// INICIAR
// ========================================

iniciarBotonesBiblioteca();

actualizarBotones();