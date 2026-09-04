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

// ELEMENTOS DE LA BIBLIOTECA

const contenedorBiblioteca = document.getElementById("contenedor-biblioteca");
const mensajeBibliotecaVacio = document.getElementById("mensaje-biblioteca-vacio");
const buscarVideojuego = document.getElementById("buscar-videojuego");
const botonesFiltro = document.querySelectorAll(".biblioteca-filtros button");

// MOSTRAR VIDEOJUEGOS DE LA BIBLIOTECA

function mostrarBiblioteca(filtro = "todos", textoBusqueda = "") {

    if (!contenedorBiblioteca) {
        return;
    }

    const biblioteca = obtenerBiblioteca();

    let idsVideojuegos = [];

    if (filtro === "todos") {

        idsVideojuegos = [
            ...biblioteca.jugados,
            ...biblioteca.pendientes,
            ...biblioteca.favoritos
        ];

    } else {

        idsVideojuegos = biblioteca[filtro];

    }

    // Evitar videojuegos repetidos

    idsVideojuegos = [...new Set(idsVideojuegos)];

    // Buscar información de los videojuegos

    let juegosMostrar = videojuegos.filter(function(videojuego) {

        return idsVideojuegos.includes(videojuego.id);

    });

 // Aplicar búsqueda

    if (textoBusqueda !== "") {

        juegosMostrar = juegosMostrar.filter(function(videojuego) {

            return videojuego.nombre
                .toLowerCase()
                .includes(textoBusqueda.toLowerCase());

        });

    }

    contenedorBiblioteca.innerHTML = "";

    if (juegosMostrar.length === 0) {

        mensajeBibliotecaVacio.style.display = "block";

        if (textoBusqueda !== "") {

            document.getElementById("texto-biblioteca-vacio").textContent =
                "No encontramos videojuegos que coincidan con tu búsqueda.";

        } else {

            document.getElementById("texto-biblioteca-vacio").textContent =
                "No tienes videojuegos guardados en esta categoría.";

        }

        return;

    }

    mensajeBibliotecaVacio.style.display = "none";

    juegosMostrar.forEach(function(videojuego) {

        const tarjeta = document.createElement("div");

        tarjeta.classList.add("tarjeta-juego");

        const esJugado = biblioteca.jugados.includes(videojuego.id);
        const esPendiente = biblioteca.pendientes.includes(videojuego.id);
        const esFavorito = biblioteca.favoritos.includes(videojuego.id);

        let estado = "";

        if (esJugado) {

            estado = `
                <span class="biblioteca-estado estado-jugado">
                    Jugado
                </span>
            `;

        } else if (esPendiente) {

            estado = `
                <span class="biblioteca-estado estado-pendiente">
                    Pendiente
                </span>
            `;

        }

        if (esFavorito) {

            estado += `
                <span class="biblioteca-estado estado-favorito">
                    Favorito
                </span>
            `;

        }

        tarjeta.innerHTML = `
    <img 
        src="${videojuego.imagen}" 
        alt="${videojuego.nombre}" 
        class="imagen-juego"
    >

    <div class="contenido-juego">

        <h3>${videojuego.nombre}</h3>

        <p>${videojuego.genero}</p>

        <div class="biblioteca-info">
            <span>⭐ ${videojuego.valoracion}</span>
            <span>${videojuego.plataforma}</span>
            <span>${videojuego.anio}</span>
        </div>

        <div>
            ${estado}
        </div>

        <div class="biblioteca-acciones">

            <a 
                href="detalle-videojuego.html?id=${videojuego.id}" 
                class="btn-detalle"
            >
                Ver detalle
            </a>

            <button 
                class="btn-quitar-biblioteca"
                data-id="${videojuego.id}"
            >
                Quitar
            </button>

        </div>

    </div>
`;

        contenedorBiblioteca.appendChild(tarjeta);

    });

    agregarEventosQuitar();

}

// QUITAR VIDEOJUEGO DE LA BIBLIOTECA

function agregarEventosQuitar() {

    const botonesQuitar = document.querySelectorAll(".btn-quitar-biblioteca");

    botonesQuitar.forEach(function(boton) {

        boton.addEventListener("click", function() {

            const idVideojuego = Number(boton.dataset.id);

            const confirmar = confirm(
                "¿Estás seguro de que quieres quitar este videojuego de tu biblioteca?"
            );

            if (!confirmar) {
                return;
            }

            const biblioteca = obtenerBiblioteca();

            biblioteca.jugados =
                biblioteca.jugados.filter(function(id) {
                    return id !== idVideojuego;
                });

            biblioteca.pendientes =
                biblioteca.pendientes.filter(function(id) {
                    return id !== idVideojuego;
                });

            biblioteca.favoritos =
                biblioteca.favoritos.filter(function(id) {
                    return id !== idVideojuego;
                });

            guardarBiblioteca(biblioteca);

            const filtroActivo = document.querySelector(
                ".biblioteca-filtros .filtro-activo"
            );

            const filtro = filtroActivo.dataset.filtro;

            mostrarBiblioteca(
                filtro,
                buscarVideojuego.value
            );

            actualizarEstadisticasBiblioteca();

            actualizarProgresoBiblioteca();

        });

    });

}

// ACTUALIZAR ESTADÍSTICAS

function actualizarEstadisticasBiblioteca() {

    const biblioteca = obtenerBiblioteca();

    const totalVideojuegos = new Set([
        ...biblioteca.jugados,
        ...biblioteca.pendientes,
        ...biblioteca.favoritos
    ]).size;

    document.getElementById("total-juegos").textContent =
        totalVideojuegos;

    document.getElementById("total-jugados").textContent =
        biblioteca.jugados.length;

    document.getElementById("total-pendientes").textContent =
        biblioteca.pendientes.length;

    document.getElementById("total-favoritos").textContent =
        biblioteca.favoritos.length;

}

// FILTROS

botonesFiltro.forEach(function(boton) {

    boton.addEventListener("click", function() {

        botonesFiltro.forEach(function(boton) {

            boton.classList.remove("filtro-activo");

        });

        boton.classList.add("filtro-activo");

        const filtro = boton.dataset.filtro;

        mostrarBiblioteca(
            filtro,
            buscarVideojuego.value
        );

    });

});

// BUSCADOR

if (buscarVideojuego) {

    buscarVideojuego.addEventListener("input", function() {

        const filtroActivo = document.querySelector(
            ".biblioteca-filtros .filtro-activo"
        );

        const filtro = filtroActivo.dataset.filtro;

        mostrarBiblioteca(
            filtro,
            buscarVideojuego.value
        );

    });

}

// INICIAR BIBLIOTECA

if (contenedorBiblioteca) {

    mostrarBiblioteca();

    actualizarEstadisticasBiblioteca();

    actualizarProgresoBiblioteca();

}

// ACTUALIZAR PROGRESO DE LA BIBLIOTECA

function actualizarProgresoBiblioteca() {

    const biblioteca = obtenerBiblioteca();

    const totalVideojuegos = new Set([
        ...biblioteca.jugados,
        ...biblioteca.pendientes,
        ...biblioteca.favoritos
    ]).size;

    const totalJugados = biblioteca.jugados.length;

    let porcentaje = 0;

    if (totalVideojuegos > 0) {

        porcentaje = Math.round(
            (totalJugados / totalVideojuegos) * 100
        );

    }

    document.getElementById("porcentaje-progreso").textContent =
        porcentaje + "%";

    document.getElementById("barra-progreso-llenado").style.width =
        porcentaje + "%";

    document.getElementById("texto-progreso").textContent =
        totalJugados +
        " de " +
        totalVideojuegos +
        " videojuegos jugados";
}
