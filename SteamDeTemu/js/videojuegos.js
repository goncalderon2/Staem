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
        imagen: "img/juegos/the-witcher-3.jpg"
    },

    {
        id: 2,
        nombre: "Red Dead Redemption 2",
        genero: "Acción",
        plataforma: "PC",
        anio: 2018,
        valoracion: 9.7,
        imagen: "img/juegos/red-dead-redemption-2.jpg"
    },

    {
        id: 3,
        nombre: "God of War",
        genero: "Acción",
        plataforma: "PlayStation",
        anio: 2018,
        valoracion: 9.6,
        imagen: "img/juegos/god-of-war.jpg"
    },

    {
        id: 4,
        nombre: "The Legend of Zelda: Breath of the Wild",
        genero: "Aventura",
        plataforma: "Nintendo",
        anio: 2017,
        valoracion: 9.8,
        imagen: "img/juegos/zelda-breath-of-the-wild.jpg"
    },

    {
        id: 5,
        nombre: "Halo Infinite",
        genero: "Shooter",
        plataforma: "Xbox",
        anio: 2021,
        valoracion: 8.2,
        imagen: "img/juegos/halo-infinite.jpg"
    },

    {
        id: 6,
        nombre: "Minecraft",
        genero: "Sandbox",
        plataforma: "PC",
        anio: 2011,
        valoracion: 9.0,
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

buscador.addEventListener("input", actualizarCatalogo);

filtroGenero.addEventListener("change", actualizarCatalogo);

filtroPlataforma.addEventListener("change", actualizarCatalogo);

ordenar.addEventListener("change", actualizarCatalogo);


// ========================================
// INICIAR CATÁLOGO
// ========================================

cargarFiltros();

actualizarCatalogo();