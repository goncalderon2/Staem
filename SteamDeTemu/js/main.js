console.log("SteamdeTemu iniciado correctamente");


// ========================================
// VIDEOJUEGOS DESTACADOS
// ========================================

const contenedorDestacados =
    document.getElementById("juegos-destacados");


if (contenedorDestacados) {

    // Seleccionamos los primeros 3 videojuegos

    const juegosDestacados =
        videojuegos.slice(0, 3);


    juegosDestacados.forEach(function(videojuego) {

        const tarjeta =
            document.createElement("article");

        tarjeta.classList.add("game-card");


        tarjeta.innerHTML = `

            <div class="game-image">

                <img
                    src="${videojuego.imagen}"
                    alt="${videojuego.nombre}"
                >

            </div>


            <div class="game-info">

                <h3>
                    ${videojuego.nombre}
                </h3>

                <p>
                    Género: ${videojuego.genero}
                </p>

                <p>
                    ⭐ ${videojuego.valoracion}
                </p>

                <a
                    href="detalle-videojuego.html?id=${videojuego.id}"
                >
                    Ver detalles
                </a>

            </div>

        `;


        contenedorDestacados.appendChild(tarjeta);

    });

}