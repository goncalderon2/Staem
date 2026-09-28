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
    },

    {
        id: 7,
        nombre: "Cyberpunk 2077",
        genero: "RPG",
        plataforma: "PC",
        anio: 2020,
        valoracion: 8.8,
        descripcion: "Cyberpunk 2077 es un videojuego de rol y acción ambientado en Night City, una enorme ciudad futurista dominada por corporaciones, tecnología y conflictos entre diferentes grupos. El jugador controla a V, un mercenario que busca hacerse un nombre mientras se ve envuelto en una peligrosa conspiración.",
        imagen: "img/juegos/cyberpunk-2077.jpg"
    },

    {
        id: 8,
        nombre: "Elden Ring",
        genero: "RPG",
        plataforma: "PlayStation",
        anio: 2022,
        valoracion: 9.5,
        descripcion: "Elden Ring es un videojuego de rol y acción ambientado en un enorme mundo de fantasía. El jugador explora diferentes regiones, descubre secretos y se enfrenta a numerosos enemigos y jefes mientras intenta reconstruir el Círculo de Elden.",
        imagen: "img/juegos/elden-ring.jpg"
    },

    {
        id: 9,
        nombre: "Super Mario Odyssey",
        genero: "Aventura",
        plataforma: "Nintendo",
        anio: 2017,
        valoracion: 9.4,
        descripcion: "Super Mario Odyssey es una aventura de plataformas en la que Mario recorre diferentes mundos junto a Cappy, un personaje que le permite controlar temporalmente a otros seres y objetos. Su objetivo principal es rescatar a Peach y detener los planes de Bowser.",
        imagen: "img/juegos/super-mario-odyssey.jpg"
    },

    {
        id: 10,
        nombre: "Forza Horizon 5",
        genero: "Carreras",
        plataforma: "Xbox",
        anio: 2021,
        valoracion: 9.0,
        descripcion: "Forza Horizon 5 es un videojuego de carreras ambientado en un extenso mundo abierto inspirado en México. Los jugadores pueden conducir una gran variedad de vehículos, participar en diferentes eventos y explorar libremente el mapa mientras mejoran su colección de coches.",
        imagen: "img/juegos/forza-horizon-5.jpg"
    },

    {
        id: 11,
        nombre: "Hades",
        genero: "Roguelike",
        plataforma: "PC",
        anio: 2020,
        valoracion: 9.2,
        descripcion: "Hades es un videojuego de acción y exploración en el que Zagreus, hijo de Hades, intenta escapar del inframundo para descubrir más sobre su pasado. Cada intento ofrece nuevos combates, habilidades y acontecimientos que ayudan a avanzar en la historia.",
        imagen: "img/juegos/hades.jpg"
    },

    {
        id: 12,
        nombre: "Resident Evil 4",
        genero: "Terror",
        plataforma: "PlayStation",
        anio: 2023,
        valoracion: 9.3,
        descripcion: "Resident Evil 4 es un videojuego de acción y terror en el que Leon S. Kennedy debe rescatar a la hija del presidente de los Estados Unidos. Durante su misión tendrá que enfrentarse a numerosos enemigos mientras descubre los secretos de una misteriosa organización.",
        imagen: "img/juegos/resident-evil-4.jpg"
    },

    {
        id: 13,
        nombre: "Animal Crossing: New Horizons",
        genero: "Simulación",
        plataforma: "Nintendo",
        anio: 2020,
        valoracion: 8.9,
        descripcion: "Animal Crossing: New Horizons es un videojuego de simulación en el que el jugador se instala en una isla desierta y comienza a construir su propio hogar. Es posible decorar la isla, pescar, capturar insectos, recolectar recursos y relacionarse con diferentes personajes.",
        imagen: "img/juegos/animal-crossing-new-horizons.jpg"
    },

    {
        id: 14,
        nombre: "The Last of Us Part II",
        genero: "Acción",
        plataforma: "PlayStation",
        anio: 2020,
        valoracion: 9.2,
        descripcion: "The Last of Us Part II es una aventura de acción ambientada en un mundo devastado por una infección. La historia sigue a diferentes personajes mientras se enfrentan a conflictos, pérdidas y decisiones difíciles que ponen a prueba sus relaciones y sus motivaciones.",
        imagen: "img/juegos/the-last-of-us-part-2.jpg"
    },

    {
        id: 15,
        nombre: "Starfield",
        genero: "RPG",
        plataforma: "Xbox",
        anio: 2023,
        valoracion: 8.0,
        descripcion: "Starfield es un videojuego de rol y exploración espacial en el que el jugador puede recorrer numerosos planetas y sistemas mientras descubre nuevos lugares, personajes y conflictos. La aventura combina exploración, combate, personalización y toma de decisiones.",
        imagen: "img/juegos/starfield.jpg"
    },

    {
        id: 16,
        nombre: "Portal 2",
        genero: "Puzzle",
        plataforma: "PC",
        anio: 2011,
        valoracion: 9.6,
        descripcion: "Portal 2 es un videojuego de puzzles en primera persona en el que el jugador debe resolver diferentes pruebas utilizando un dispositivo capaz de crear portales. Los desafíos requieren observar el entorno, experimentar con las físicas y encontrar soluciones creativas.",
        imagen: "img/juegos/portal-2.jpg"
    },

    {
        id: 17,
        nombre: "Street Fighter 6",
        genero: "Lucha",
        plataforma: "PlayStation",
        anio: 2023,
        valoracion: 9.0,
        descripcion: "Street Fighter 6 es un videojuego de lucha que combina combates competitivos con diferentes modos de juego. Los jugadores pueden elegir entre numerosos luchadores, aprender sus movimientos y enfrentarse a otros jugadores mientras desarrollan su propio estilo de combate.",
        imagen: "img/juegos/street-fighter-6.jpg"
    },

    {
        id: 18,
        nombre: "Pokémon Escarlata",
        genero: "RPG",
        plataforma: "Nintendo",
        anio: 2022,
        valoracion: 7.5,
        descripcion: "Pokémon Escarlata es un videojuego de rol y aventura en el que el jugador explora una región abierta, captura diferentes Pokémon y participa en numerosos combates. La aventura permite recorrer el mundo libremente mientras se completa la Pokédex y se descubren nuevas historias.",
        imagen: "img/juegos/pokemon-escarlata.jpg"
    },

    {
        id: 19,
        nombre: "DOOM Eternal",
        genero: "Shooter",
        plataforma: "Xbox",
        anio: 2020,
        valoracion: 9.1,
        descripcion: "DOOM Eternal es un shooter en primera persona centrado en combates rápidos y frenéticos contra hordas de demonios. El jugador controla al Doom Slayer y debe utilizar diferentes armas, habilidades y movimientos para sobrevivir y detener la invasión demoníaca.",
        imagen: "img/juegos/doom-eternal.jpg"
    },

    {
        id: 20,
        nombre: "Stardew Valley",
        genero: "Simulación",
        plataforma: "PC",
        anio: 2016,
        valoracion: 9.3,
        descripcion: "Stardew Valley es un videojuego de simulación y gestión en el que el jugador hereda una antigua granja y comienza una nueva vida en el campo. Es posible cultivar, pescar, explorar minas, mejorar la granja y establecer relaciones con los habitantes del pueblo.",
        imagen: "img/juegos/stardew-valley.jpg"
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
                        <strong>Valoración general:</strong>

                        ⭐ ${videojuego.valoracion} / 10
                    </p>

                    <div class="valoracion-personal">

                        <label for="valoracion-personal">
                            👤 Mi valoración
                        </label>

                        <div class="valoracion-form">

                            <input
                                type="number"
                                id="valoracion-personal"
                                min="1"
                                max="10"
                                step="0.1"
                                placeholder="Ej: 8.5"
                            >

                            <button
                                type="button"
                                id="guardar-valoracion"
                            >
                                Guardar valoración
                            </button>

                        </div>

                        <p
                            id="mensaje-valoracion"
                            class="mensaje-valoracion"
                        ></p>

                    </div>

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


                <button
                    class="btn-volver"
                    onclick="history.back()"
                >
                    ← Volver
                </button>

            </div>

        </article>

    `;

}


// ========================================
// CARGAR DETALLE
// ========================================

cargarDetalleVideojuego();