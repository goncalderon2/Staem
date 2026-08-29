// ========================================
// DATOS DE LOS VIDEOJUEGOS
// ========================================

const videojuegos = [

    {
        id: 1,
        nombre: "The Witcher 3",
        genero: "RPG",
        plataforma: "PC",
        anio: 2015,
        valoracion: 9.5,
        descripcion: "The Witcher 3: Wild Hunt es un videojuego de rol de mundo abierto en el que acompañas a Geralt de Rivia en la búsqueda de su hija adoptiva mientras enfrentas criaturas, conflictos políticos y decisiones que pueden cambiar el desarrollo de la historia.",
        imagen: "img/juegos/the-witcher-3.jpg"
    },

    {
        id: 2,
        nombre: "Red Dead Redemption 2",
        genero: "Acción",
        plataforma: "PC",
        anio: 2018,
        valoracion: 9.7,
        descripcion: "Red Dead Redemption 2 es una aventura de acción ambientada en el viejo oeste. El jugador controla a Arthur Morgan, miembro de una banda de forajidos que debe sobrevivir mientras el mundo moderno comienza a reemplazar la vida que conocen.",
        imagen: "img/juegos/red-dead-redemption-2.jpg"
    },

    {
        id: 3,
        nombre: "God of War",
        genero: "Acción",
        plataforma: "PlayStation",
        anio: 2018,
        valoracion: 9.6,
        descripcion: "God of War sigue la historia de Kratos y su hijo Atreus en un viaje a través de los reinos de la mitología nórdica. Juntos deberán enfrentar poderosos enemigos y superar diversos desafíos mientras buscan cumplir una importante promesa.",
        imagen: "img/juegos/god-of-war.jpg"
    },

    {
        id: 4,
        nombre: "The Legend of Zelda: Breath of the Wild",
        genero: "Aventura",
        plataforma: "Nintendo",
        anio: 2017,
        valoracion: 9.8,
        descripcion: "The Legend of Zelda: Breath of the Wild es una aventura de mundo abierto en la que Link despierta tras un largo sueño y debe explorar el reino de Hyrule para recuperar sus recuerdos y enfrentarse a la amenaza de Ganon.",
        imagen: "img/juegos/zelda-breath-of-the-wild.jpg"
    },

    {
        id: 5,
        nombre: "Halo Infinite",
        genero: "Shooter",
        plataforma: "Xbox",
        anio: 2021,
        valoracion: 8.2,
        descripcion: "Halo Infinite continúa las aventuras del Jefe Maestro en una nueva misión para enfrentar a sus enemigos y proteger a la humanidad. Combina una campaña de acción con enfrentamientos multijugador utilizando armas, vehículos y habilidades futuristas.",
        imagen: "img/juegos/halo-infinite.jpg"
    },

    {
        id: 6,
        nombre: "Minecraft",
        genero: "Sandbox",
        plataforma: "PC",
        anio: 2011,
        valoracion: 9.0,
        descripcion: "Minecraft es un videojuego de construcción y supervivencia que permite explorar mundos generados de forma procedural. Los jugadores pueden recolectar recursos, construir estructuras, combatir criaturas y jugar de manera creativa o en modo supervivencia.",
        imagen: "img/juegos/minecraft.jpg"
    }

];


// ========================================
// ELEMENTOS DEL HTML
// ========================================

const contenedorVideojuegos =
    document.getElementById("contenedor-videojuegos");

const buscador =
    document.getElementById("buscador");

const filtroGenero =
    document.getElementById("filtro-genero");

const filtroPlataforma =
    document.getElementById("filtro-plataforma");

const ordenar =
    document.getElementById("ordenar");

const contadorJuegos =
    document.getElementById("contador-juegos");

const mensajeVacio =
    document.getElementById("mensaje-vacio");


// ========================================
// MOSTRAR VIDEOJUEGOS
// ========================================

function mostrarVideojuegos(listaVideojuegos) {

    // Limpiamos el contenedor
    contenedorVideojuegos.innerHTML = "";


    // Mostrar mensaje si no existen resultados
    if (listaVideojuegos.length === 0) {

        mensajeVacio.style.display = "block";

    } else {

        mensajeVacio.style.display = "none";

    }


    // Crear tarjetas
    listaVideojuegos.forEach(function(videojuego) {

        const tarjeta = document.createElement("article");

        tarjeta.classList.add("tarjeta-juego");


        tarjeta.innerHTML = `

            <img
                src="${videojuego.imagen}"
                alt="${videojuego.nombre}"
                class="imagen-juego"
            >

            <div class="contenido-juego">

                <h2>
                    ${videojuego.nombre}
                </h2>

                <p>
                    <strong>Género:</strong>
                    ${videojuego.genero}
                </p>

                <p>
                    <strong>Plataforma:</strong>
                    ${videojuego.plataforma}
                </p>

                <p>
                    <strong>Año:</strong>
                    ${videojuego.anio}
                </p>

                <p>
                    ⭐ ${videojuego.valoracion}
                </p>

                <a
                    href="detalle-videojuego.html?id=${videojuego.id}"
                    class="btn-detalle"
                >
                    Ver detalle
                </a>

            </div>

        `;


        // Agregar tarjeta
        contenedorVideojuegos.appendChild(tarjeta);

    });


    // Actualizar contador
    contadorJuegos.textContent =
        `${listaVideojuegos.length} videojuegos encontrados`;

}


// ========================================
// CARGAR FILTROS
// ========================================

function cargarFiltros() {

    // Crear géneros sin repetir
    const generos = [];

    videojuegos.forEach(function(videojuego) {

        if (!generos.includes(videojuego.genero)) {

            generos.push(videojuego.genero);

        }

    });


    // Agregar géneros al select
    generos.forEach(function(genero) {

        const opcion = document.createElement("option");

        opcion.value = genero;

        opcion.textContent = genero;

        filtroGenero.appendChild(opcion);

    });


    // Crear plataformas sin repetir
    const plataformas = [];

    videojuegos.forEach(function(videojuego) {

        if (!plataformas.includes(videojuego.plataforma)) {

            plataformas.push(videojuego.plataforma);

        }

    });


    // Agregar plataformas
    plataformas.forEach(function(plataforma) {

        const opcion = document.createElement("option");

        opcion.value = plataforma;

        opcion.textContent = plataforma;

        filtroPlataforma.appendChild(opcion);

    });

}


// ========================================
// FILTRAR Y ORDENAR
// ========================================

function actualizarCatalogo() {

    // Copia del arreglo original
    let juegosFiltrados = [...videojuegos];


    // TEXTO DEL BUSCADOR
    const textoBusqueda =
        buscador.value.toLowerCase();


    if (textoBusqueda !== "") {

        juegosFiltrados =
            juegosFiltrados.filter(function(videojuego) {

                return videojuego.nombre
                    .toLowerCase()
                    .includes(textoBusqueda);

            });

    }


    // FILTRO GÉNERO
    if (filtroGenero.value !== "todos") {

        juegosFiltrados =
            juegosFiltrados.filter(function(videojuego) {

                return videojuego.genero ===
                    filtroGenero.value;

            });

    }


    // FILTRO PLATAFORMA
    if (filtroPlataforma.value !== "todos") {

        juegosFiltrados =
            juegosFiltrados.filter(function(videojuego) {

                return videojuego.plataforma ===
                    filtroPlataforma.value;

            });

    }


    // ORDENAR
    if (ordenar.value === "nombre") {

        juegosFiltrados.sort(function(a, b) {

            return a.nombre.localeCompare(b.nombre);

        });

    }


    if (ordenar.value === "anio") {

        juegosFiltrados.sort(function(a, b) {

            return b.anio - a.anio;

        });

    }


    if (ordenar.value === "valoracion") {

        juegosFiltrados.sort(function(a, b) {

            return b.valoracion - a.valoracion;

        });

    }


    // Mostrar resultado
    mostrarVideojuegos(juegosFiltrados);

}


// ========================================
// EVENTOS
// ========================================

if (buscador) {

    buscador.addEventListener(
        "input",
        actualizarCatalogo
    );

}


if (filtroGenero) {

    filtroGenero.addEventListener(
        "change",
        actualizarCatalogo
    );

}


if (filtroPlataforma) {

    filtroPlataforma.addEventListener(
        "change",
        actualizarCatalogo
    );

}


if (ordenar) {

    ordenar.addEventListener(
        "change",
        actualizarCatalogo
    );

}


// ========================================
// INICIAR CATÁLOGO
// ========================================

if (contenedorVideojuegos) {

    cargarFiltros();

    actualizarCatalogo();

}


// ========================================
// DETALLE DEL VIDEOJUEGO
// ========================================

function cargarDetalleVideojuego() {

    // Buscar el contenedor del detalle
    const contenidoDetalle =
        document.getElementById("contenido-detalle");


    // Si no estamos en la página de detalle,
    // terminamos la función
    if (!contenidoDetalle) {

        return;

    }


    // Obtener los parámetros de la URL
    const parametros =
        new URLSearchParams(window.location.search);


    // Obtener el ID del videojuego
    const idVideojuego =
        Number(parametros.get("id"));


    // Buscar el videojuego en el arreglo
    const videojuego =
        videojuegos.find(function(juego) {

            return juego.id === idVideojuego;

        });


    // Si no encontramos el videojuego
    if (!videojuego) {

        contenidoDetalle.innerHTML = `

            <div class="error-detalle">

                <h1>
                    Videojuego no encontrado
                </h1>

                <p>
                    El videojuego que buscas no existe.
                </p>

                <a
                    href="catalogo.html"
                    class="btn-principal"
                >
                    Volver al catálogo
                </a>

            </div>

        `;

        return;

    }


    // Mostrar información del videojuego
    contenidoDetalle.innerHTML = `

        <article class="detalle-contenido">

            <div class="detalle-imagen">

                <img
                    src="${videojuego.imagen}"
                    alt="${videojuego.nombre}"
                >

            </div>


            <div class="detalle-info">

                <span class="detalle-genero">
                    ${videojuego.genero}
                </span>


                <h1>
                    ${videojuego.nombre}
                </h1>


                <p class="detalle-descripcion">

                    ${videojuego.descripcion}

                </p>


                <div class="detalle-datos">

                    <p>

                        <strong>Género:</strong>

                        ${videojuego.genero}

                    </p>


                    <p>

                        <strong>Plataforma:</strong>

                        ${videojuego.plataforma}

                    </p>


                    <p>

                        <strong>Año de lanzamiento:</strong>

                        ${videojuego.anio}

                    </p>


                    <p>

                        <strong>Valoración:</strong>

                        ⭐ ${videojuego.valoracion} / 10

                    </p>

                </div>


                <!-- BOTONES -->

                <div class="detalle-acciones">

                    <button
                        class="btn-favorito"
                        data-id="${videojuego.id}"
                    >
                        ♡ Agregar a favoritos
                    </button>

                    <button
                        class="btn-jugado"
                        data-id="${videojuego.id}"
                    >
                        ✓ Marcar como jugado
                    </button>

                    <button
                        class="btn-pendiente"
                        data-id="${videojuego.id}"
                    >
                        ⏳ Marcar como pendiente
                    </button>

                </div>


                <a
                    href="catalogo.html"
                    class="btn-volver"
                >
                    ← Volver al catálogo
                </a>

            </div>

        </article>

    `;

}


// ========================================
// CARGAR DETALLE
// ========================================

cargarDetalleVideojuego();