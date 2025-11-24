/* ============================================
   DATOS DE ARTISTAS (EJEMPLO)
   ============================================ */

const artistas = {
    panama: [
        {
            id: 1,
            nombre: "Rubén Blades",
            pais: "Panamá",
            bandera: "🇵🇦",
            genero: "Salsa",
            imagen: "https://images.unsplash.com/photo-1511671782779-c97d3d27a5d4?w=400&h=400&fit=crop&crop=faces",
            biografia: "Rubén Blades es un cantante, compositor, actor y político panameño. Es considerado uno de los artistas más influyentes de la música latina, conocido por fusionar salsa con letras sociales y políticas.",
            premios: ["Grammy Latino", "Premio Grammy", "Premio Lo Nuestro"],
            curiosidades: "Además de su carrera musical, Blades ha actuado en películas de Hollywood y ha sido candidato presidencial en Panamá.",
            videoId: "dQw4w9WgXcQ"
        },
        {
            id: 2,
            nombre: "Danilo Pérez",
            pais: "Panamá",
            bandera: "🇵🇦",
            genero: "Jazz",
            imagen: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=400&h=400&fit=crop&crop=faces",
            biografia: "Danilo Pérez es un pianista y compositor de jazz panameño, ganador de múltiples premios Grammy. Es reconocido por fusionar el jazz con ritmos latinoamericanos.",
            premios: ["Grammy Award", "Grammy Latino"],
            curiosidades: "Es director artístico del Berklee Global Jazz Institute y embajador cultural de UNICEF.",
            videoId: "dQw4w9WgXcQ"
        }
    ],
    mexico: [
        {
            id: 3,
            nombre: "Carlos Santana",
            pais: "México",
            bandera: "🇲🇽",
            genero: "Rock Latino",
            imagen: "https://images.unsplash.com/photo 1511671782779-c97d3d27a5d4?w=400&h=400&fit=crop&crop=faces",
            biografia: "Carlos Santana es un guitarrista mexicano-estadounidense que fusiona rock, blues y música latina. Su álbum 'Supernatural' ganó 8 premios Grammy.",
            premios: ["10 Grammy Awards", "3 Grammy Latinos", "Rock and Roll Hall of Fame"],
            curiosidades: "Santana ha vendido más de 100 millones de discos en todo el mundo.",
            videoId: "dQw4w9WgXcQ"
        },
        {
            id: 4,
            nombre: "Lila Downs",
            pais: "México",
            bandera: "🇲🇽",
            genero: "World Music",
            imagen: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=faces",
            biografia: "Lila Downs es una cantante y compositora mexicana que fusiona música tradicional mexicana con jazz, blues y música latinoamericana.",
            premios: ["Grammy Latino", "Premio Lo Nuestro"],
            curiosidades: "Canta en español, inglés, mixteco y zapoteco, preservando las lenguas indígenas de México.",
            videoId: "dQw4w9WgXcQ"
        }
    ],
    usa: [
        {
            id: 5,
            nombre: "Bob Dylan",
            pais: "Estados Unidos",
            bandera: "🇺🇸",
            genero: "Folk Rock",
            imagen: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&h=400&fit=crop&crop=faces",
            biografia: "Bob Dylan es un cantautor, músico y poeta estadounidense, considerado una de las figuras más influyentes de la música popular del siglo XX. Ganador del Premio Nobel de Literatura en 2016.",
            premios: ["Premio Nobel de Literatura", "Grammy Lifetime Achievement", "Oscar"],
            curiosidades: "Es el primer músico en recibir el Premio Nobel de Literatura.",
            videoId: "dQw4w9WgXcQ"
        },
        {
            id: 6,
            nombre: "Aretha Franklin",
            pais: "Estados Unidos",
            bandera: "🇺🇸",
            genero: "Soul",
            imagen: "https://images.unsplash.com/photo-1492562080023-ab3db95a942e?w=400&h=400&fit=crop&crop=faces",
            biografia: "Aretha Franklin, conocida como 'La Reina del Soul', fue una de las cantantes más influyentes de la música estadounidense. Ganó 18 premios Grammy.",
            premios: ["18 Grammy Awards", "Presidential Medal of Freedom"],
            curiosidades: "Fue la primera mujer en ingresar al Rock and Roll Hall of Fame.",
            videoId: "dQw4w9WgXcQ"
        }
    ],
    japon: [
        {
            id: 7,
            nombre: "Yoko Kanno",
            pais: "Japón",
            bandera: "🇯🇵",
            genero: "J-Pop / Soundtrack",
            biografia: "Yoko Kanno es una compositora y pianista japonesa conocida por sus bandas sonoras de anime y videojuegos. Ha trabajado en series como 'Cowboy Bebop' y 'Ghost in the Shell'.",
            premios: ["Japan Academy Prize", "Anime Awards"],
            curiosidades: "Ha compuesto música para más de 50 series de anime y películas.",
            videoId: "dQw4w9WgXcQ"
        },
        {
            id: 8,
            nombre: "Ryuichi Sakamoto",
            pais: "Japón",
            bandera: "🇯🇵",
            genero: "Electrónica / Ambient",
            biografia: "Ryuichi Sakamoto fue un compositor, productor y actor japonés, pionero de la música electrónica. Ganó un Oscar por la banda sonora de 'El último emperador'.",
            premios: ["Oscar", "Golden Globe", "BAFTA"],
            curiosidades: "Fue miembro fundador de Yellow Magic Orchestra, grupo pionero del synth-pop.",
            videoId: "dQw4w9WgXcQ"
        }
    ],
    francia: [
        {
            id: 9,
            nombre: "Édith Piaf",
            pais: "Francia",
            bandera: "🇫🇷",
            genero: "Chanson",
            biografia: "Édith Piaf fue una cantante francesa, una de las más grandes intérpretes del siglo XX. Conocida como 'El pequeño gorrión de París', su canción 'La Vie en Rose' es un ícono mundial.",
            premios: ["Grammy Hall of Fame"],
            curiosidades: "Su vida fue llevada al cine en la película 'La Vie en Rose' (2007).",
            videoId: "dQw4w9WgXcQ"
        },
        {
            id: 10,
            nombre: "Daft Punk",
            pais: "Francia",
            bandera: "🇫🇷",
            genero: "Electronic",
            biografia: "Daft Punk fue un dúo francés de música electrónica formado por Thomas Bangalter y Guy-Manuel de Homem-Christo. Revolucionaron la música dance con álbumes como 'Random Access Memories'.",
            premios: ["6 Grammy Awards", "Grammy Album of the Year"],
            curiosidades: "Se disolvieron en 2021 después de 28 años de carrera, siempre ocultando sus identidades con cascos.",
            videoId: "dQw4w9WgXcQ"
        }
    ],
    espana: [
        {
            id: 20,
            nombre: "Rosalía",
            pais: "España",
            bandera: "🇪🇸",
            genero: "Flamenco Pop",
            biografia: "Rosalía es una cantante y compositora española que fusiona flamenco tradicional con música urbana y pop moderno. Su álbum 'El Mal Querer' ganó múltiples premios.",
            premios: ["Grammy Latino", "Premios Latin Grammy"],
            curiosidades: "Es la primera artista española en ganar un Grammy Latino como Mejor Álbum.",
            videoId: "dQw4w9WgXcQ"
        },
        {
            id: 21,
            nombre: "Paco de Lucía",
            pais: "España",
            bandera: "🇪🇸",
            genero: "Flamenco",
            biografia: "Paco de Lucía fue un guitarrista español considerado uno de los mejores guitarristas de flamenco de todos los tiempos.",
            premios: ["Grammy Award", "Premio Príncipe de Asturias"],
            curiosidades: "Revolucionó el flamenco fusionándolo con jazz y otros géneros.",
            videoId: "dQw4w9WgXcQ"
        }
    ],
    brasil: [
        {
            id: 22,
            nombre: "Caetano Veloso",
            pais: "Brasil",
            bandera: "🇧🇷",
            genero: "MPB / Bossa Nova",
            biografia: "Caetano Veloso es un músico, cantante y compositor brasileño, una de las figuras más importantes de la música popular brasileña y del movimiento tropicalista.",
            premios: ["Grammy Latino", "Premio Grammy"],
            curiosidades: "Fue exiliado durante la dictadura militar brasileña por sus letras políticas.",
            videoId: "dQw4w9WgXcQ"
        },
        {
            id: 23,
            nombre: "Gilberto Gil",
            pais: "Brasil",
            bandera: "🇧🇷",
            genero: "MPB / Samba",
            biografia: "Gilberto Gil es un cantante, guitarrista y compositor brasileño, pionero del movimiento tropicalista y ex ministro de Cultura de Brasil.",
            premios: ["Grammy Award", "Grammy Latino"],
            curiosidades: "Fue Ministro de Cultura de Brasil de 2003 a 2008.",
            videoId: "dQw4w9WgXcQ"
        }
    ],
    argentina: [
        {
            id: 24,
            nombre: "Gustavo Cerati",
            pais: "Argentina",
            bandera: "🇦🇷",
            genero: "Rock",
            biografia: "Gustavo Cerati fue un músico, cantante y compositor argentino, líder de la banda Soda Stereo, considerada una de las más influyentes del rock en español.",
            premios: ["Grammy Latino", "MTV Video Music Awards"],
            curiosidades: "Soda Stereo fue la primera banda de rock en español en llenar estadios en toda Latinoamérica.",
            videoId: "dQw4w9WgXcQ"
        },
        {
            id: 25,
            nombre: "Mercedes Sosa",
            pais: "Argentina",
            bandera: "🇦🇷",
            genero: "Folklore",
            biografia: "Mercedes Sosa fue una cantante argentina de música folclórica, conocida como 'La Negra Sosa', símbolo de la música latinoamericana.",
            premios: ["Grammy Latino", "Premio Gardel"],
            curiosidades: "Fue exiliada durante la dictadura militar argentina.",
            videoId: "dQw4w9WgXcQ"
        }
    ],
    colombia: [
        {
            id: 26,
            nombre: "Shakira",
            pais: "Colombia",
            bandera: "🇨🇴",
            genero: "Pop / Latin",
            biografia: "Shakira es una cantante, compositora y bailarina colombiana, una de las artistas latinas más exitosas del mundo con múltiples premios Grammy.",
            premios: ["3 Grammy Awards", "12 Grammy Latinos"],
            curiosidades: "Es la artista colombiana con más ventas de discos en la historia.",
            videoId: "dQw4w9WgXcQ"
        },
        {
            id: 27,
            nombre: "Carlos Vives",
            pais: "Colombia",
            bandera: "🇨🇴",
            genero: "Vallenato / Pop",
            biografia: "Carlos Vives es un cantante y compositor colombiano que popularizó el vallenato fusionándolo con pop y rock.",
            premios: ["2 Grammy Awards", "11 Grammy Latinos"],
            curiosidades: "Revolucionó la música colombiana llevando el vallenato a nivel internacional.",
            videoId: "dQw4w9WgXcQ"
        }
    ],
    reino_unido: [
        {
            id: 28,
            nombre: "The Beatles",
            pais: "Reino Unido",
            bandera: "🇬🇧",
            genero: "Rock",
            biografia: "The Beatles fue una banda de rock británica formada en Liverpool, considerada la más influyente de la historia de la música popular.",
            premios: ["7 Grammy Awards", "Oscar"],
            curiosidades: "Han vendido más de 600 millones de discos en todo el mundo.",
            videoId: "dQw4w9WgXcQ"
        },
        {
            id: 29,
            nombre: "Adele",
            pais: "Reino Unido",
            bandera: "🇬🇧",
            genero: "Soul / Pop",
            biografia: "Adele es una cantante y compositora británica conocida por su poderosa voz y sus baladas emotivas.",
            premios: ["15 Grammy Awards", "Oscar", "Golden Globe"],
            curiosidades: "Su álbum '21' es uno de los más vendidos del siglo XXI.",
            videoId: "dQw4w9WgXcQ"
        }
    ],
    italia: [
        {
            id: 30,
            nombre: "Luciano Pavarotti",
            pais: "Italia",
            bandera: "🇮🇹",
            genero: "Ópera",
            biografia: "Luciano Pavarotti fue un tenor italiano, uno de los cantantes de ópera más famosos del mundo y parte de Los Tres Tenores.",
            premios: ["5 Grammy Awards", "Grammy Lifetime Achievement"],
            curiosidades: "Fue conocido como 'El Rey del Do de pecho' por su capacidad vocal excepcional.",
            videoId: "dQw4w9WgXcQ"
        },
        {
            id: 31,
            nombre: "Andrea Bocelli",
            pais: "Italia",
            bandera: "🇮🇹",
            genero: "Ópera / Pop Clásico",
            biografia: "Andrea Bocelli es un tenor italiano que fusiona ópera clásica con música pop, vendiendo millones de discos mundialmente.",
            premios: ["Grammy Award", "Golden Globe"],
            curiosidades: "A pesar de ser ciego desde los 12 años, se convirtió en uno de los tenores más exitosos del mundo.",
            videoId: "dQw4w9WgXcQ"
        }
    ],
    corea_sur: [
        {
            id: 32,
            nombre: "BTS",
            pais: "Corea del Sur",
            bandera: "🇰🇷",
            genero: "K-Pop",
            biografia: "BTS es un grupo de K-pop surcoreano que ha revolucionado la música global, siendo el primer grupo coreano en alcanzar el número 1 en Billboard.",
            premios: ["Billboard Music Awards", "American Music Awards"],
            curiosidades: "Son embajadores de buena voluntad de UNICEF y han hablado en la ONU.",
            videoId: "dQw4w9WgXcQ"
        },
        {
            id: 33,
            nombre: "BLACKPINK",
            pais: "Corea del Sur",
            bandera: "🇰🇷",
            genero: "K-Pop",
            biografia: "BLACKPINK es un grupo femenino de K-pop que ha roto múltiples récords y es uno de los grupos más populares del mundo.",
            premios: ["MTV Video Music Awards", "Billboard Music Awards"],
            curiosidades: "Son el grupo femenino de K-pop más exitoso de la historia.",
            videoId: "dQw4w9WgXcQ"
        }
    ],
    cuba: [
        {
            id: 34,
            nombre: "Celia Cruz",
            pais: "Cuba",
            bandera: "🇨🇺",
            genero: "Salsa",
            biografia: "Celia Cruz fue una cantante cubana conocida como 'La Reina de la Salsa', una de las artistas latinas más influyentes del siglo XX.",
            premios: ["3 Grammy Awards", "Grammy Lifetime Achievement"],
            curiosidades: "Su frase 'Azúcar!' se convirtió en su marca registrada.",
            videoId: "dQw4w9WgXcQ"
        },
        {
            id: 35,
            nombre: "Buena Vista Social Club",
            pais: "Cuba",
            bandera: "🇨🇺",
            genero: "Son / Trova",
            biografia: "Buena Vista Social Club es un grupo de músicos cubanos que popularizó la música tradicional cubana en todo el mundo.",
            premios: ["Grammy Award"],
            curiosidades: "Su documental ganó un Grammy y fue nominado al Oscar.",
            videoId: "dQw4w9WgXcQ"
        }
    ],
    nigeria: [
        {
            id: 36,
            nombre: "Fela Kuti",
            pais: "Nigeria",
            bandera: "🇳🇬",
            genero: "Afrobeat",
            biografia: "Fela Kuti fue un músico y activista político nigeriano, creador del género afrobeat y símbolo de resistencia en África.",
            premios: ["Grammy Hall of Fame"],
            curiosidades: "Fue encarcelado más de 200 veces por su activismo político.",
            videoId: "dQw4w9WgXcQ"
        },
        {
            id: 37,
            nombre: "Burna Boy",
            pais: "Nigeria",
            bandera: "🇳🇬",
            genero: "Afrobeat / Reggae",
            biografia: "Burna Boy es un cantante y compositor nigeriano que ha llevado el afrobeat a la escena musical global.",
            premios: ["Grammy Award"],
            curiosidades: "Ganó el Grammy al Mejor Álbum de Música Global en 2021.",
            videoId: "dQw4w9WgXcQ"
        }
    ]
};

// Datos de países con información detallada
const paisesInfo = {
    panama: {
        nombre: "Panamá",
        bandera: "🇵🇦",
        descripcion: "Panamá es un país centroamericano con una rica herencia musical que fusiona influencias caribeñas, latinas y afrodescendientes. Su música refleja la diversidad cultural del país.",
        generosPopulares: ["Salsa", "Reggae", "Plena", "Cumbia"],
        generosTradicionales: ["Tamborito", "Mejorana", "Pindín"]
    },
    mexico: {
        nombre: "México",
        bandera: "🇲🇽",
        descripcion: "México tiene una de las tradiciones musicales más ricas de América Latina, desde la música ranchera hasta el rock mexicano, pasando por el mariachi y la música tradicional indígena.",
        generosPopulares: ["Pop", "Rock", "Regional Mexicano", "Cumbia"],
        generosTradicionales: ["Mariachi", "Ranchera", "Son Jarocho", "Huapango"]
    },
    usa: {
        nombre: "Estados Unidos",
        bandera: "🇺🇸",
        descripcion: "Estados Unidos es el epicentro de la música popular mundial, cuna del jazz, blues, rock, hip hop y muchos otros géneros que han influenciado la música global.",
        generosPopulares: ["Pop", "Hip Hop", "Rock", "Country"],
        generosTradicionales: ["Jazz", "Blues", "Country", "Gospel"]
    },
    japon: {
        nombre: "Japón",
        bandera: "🇯🇵",
        descripcion: "Japón combina tradiciones musicales milenarias con innovación moderna. El J-Pop y la música electrónica japonesa han ganado reconocimiento mundial.",
        generosPopulares: ["J-Pop", "J-Rock", "Anime Music", "Electrónica"],
        generosTradicionales: ["Gagaku", "Shakuhachi", "Koto", "Enka"]
    },
    francia: {
        nombre: "Francia",
        bandera: "🇫🇷",
        descripcion: "Francia es conocida por su chanson francesa, música clásica y su influencia en la música electrónica moderna. París ha sido un centro cultural musical durante siglos.",
        generosPopulares: ["Pop", "Electrónica", "Hip Hop", "Rock"],
        generosTradicionales: ["Chanson", "Musette", "Bal-musette", "Música Clásica"]
    },
    espana: {
        nombre: "España",
        bandera: "🇪🇸",
        descripcion: "España tiene una rica tradición musical que incluye flamenco, música clásica y una escena pop moderna vibrante. El flamenco es Patrimonio Cultural Inmaterial de la Humanidad.",
        generosPopulares: ["Pop", "Rock", "Reggaeton", "Indie"],
        generosTradicionales: ["Flamenco", "Sevillanas", "Jota", "Fandango"]
    },
    brasil: {
        nombre: "Brasil",
        bandera: "🇧🇷",
        descripcion: "Brasil es el país más grande de Sudamérica con una música increíblemente diversa, desde la bossa nova hasta el samba, el forró y la música popular brasileña (MPB).",
        generosPopulares: ["Sertanejo", "Funk Carioca", "MPB", "Pop"],
        generosTradicionales: ["Samba", "Bossa Nova", "Forró", "Choro"]
    },
    argentina: {
        nombre: "Argentina",
        bandera: "🇦🇷",
        descripcion: "Argentina es conocida por el tango, el rock nacional y el folklore. Buenos Aires es considerada una de las capitales musicales de Latinoamérica.",
        generosPopulares: ["Rock", "Pop", "Cumbia", "Reggaeton"],
        generosTradicionales: ["Tango", "Folklore", "Chamamé", "Milonga"]
    },
    colombia: {
        nombre: "Colombia",
        bandera: "🇨🇴",
        descripcion: "Colombia es la cuna de la cumbia, el vallenato y la salsa. Su música refleja la diversidad cultural del país y ha influenciado toda Latinoamérica.",
        generosPopulares: ["Reggaeton", "Pop", "Salsa", "Vallenato"],
        generosTradicionales: ["Cumbia", "Vallenato", "Porro", "Bambuco"]
    },
    reino_unido: {
        nombre: "Reino Unido",
        bandera: "🇬🇧",
        descripcion: "El Reino Unido ha sido fundamental en la música popular mundial, desde The Beatles hasta el rock británico, el pop y la música electrónica.",
        generosPopulares: ["Pop", "Rock", "Indie", "Electronic"],
        generosTradicionales: ["Folk", "Celtic", "Music Hall", "Brass Band"]
    },
    italia: {
        nombre: "Italia",
        bandera: "🇮🇹",
        descripcion: "Italia es la cuna de la ópera y tiene una rica tradición de música clásica. También tiene una escena pop moderna vibrante.",
        generosPopulares: ["Pop", "Rock", "Hip Hop", "Dance"],
        generosTradicionales: ["Ópera", "Canzone Napoletana", "Tarantella", "Música Clásica"]
    },
    corea_sur: {
        nombre: "Corea del Sur",
        bandera: "🇰🇷",
        descripcion: "Corea del Sur ha revolucionado la música pop global con el K-pop, combinando pop, hip hop, R&B y música electrónica en un estilo único.",
        generosPopulares: ["K-Pop", "K-Rock", "Hip Hop", "R&B"],
        generosTradicionales: ["Pansori", "Gugak", "Samulnori", "Arirang"]
    },
    cuba: {
        nombre: "Cuba",
        bandera: "🇨🇺",
        descripcion: "Cuba es la cuna de muchos géneros musicales latinos como el son, la salsa, el mambo y el cha-cha-chá. Su música ha influenciado el mundo entero.",
        generosPopulares: ["Salsa", "Reggaeton", "Timba", "Pop"],
        generosTradicionales: ["Son", "Rumba", "Mambo", "Cha-cha-chá"]
    },
    nigeria: {
        nombre: "Nigeria",
        bandera: "🇳🇬",
        descripcion: "Nigeria es el país más poblado de África y tiene una rica tradición musical. El afrobeat nigeriano ha ganado reconocimiento mundial.",
        generosPopulares: ["Afrobeat", "Afropop", "Hip Hop", "R&B"],
        generosTradicionales: ["Highlife", "Jùjú", "Fuji", "Apala"]
    }
};

const artistasEmergentes = [
    {
        id: 11,
        nombre: "Luna Martínez",
        pais: "Panamá",
        bandera: "🇵🇦",
        genero: "Indie Pop",
        votos: 0
    },
    {
        id: 12,
        nombre: "Diego Vega",
        pais: "México",
        bandera: "🇲🇽",
        genero: "Rock Alternativo",
        votos: 0
    },
    {
        id: 13,
        nombre: "Sakura Yamamoto",
        pais: "Japón",
        bandera: "🇯🇵",
        genero: "J-Pop",
        votos: 0
    },
    {
        id: 14,
        nombre: "Sophie Dubois",
        pais: "Francia",
        bandera: "🇫🇷",
        genero: "Electro Pop",
        votos: 0
    },
    {
        id: 15,
        nombre: "Alex Rivers",
        pais: "Estados Unidos",
        bandera: "🇺🇸",
        genero: "Indie Folk",
        votos: 0
    }
];

const preguntasTrivia = [
    {
        pregunta: "¿Qué artista panameño es conocido como 'El Poeta de la Salsa'?",
        opciones: ["Rubén Blades", "Marc Anthony", "Celia Cruz", "Willie Colón"],
        correcta: 0
    },
    {
        pregunta: "¿Qué premio ganó Bob Dylan en 2016 que ningún otro músico había recibido antes?",
        opciones: ["Grammy Lifetime Achievement", "Premio Nobel de Literatura", "Oscar", "Golden Globe"],
        correcta: 1
    },
    {
        pregunta: "¿Qué dúo francés de música electrónica se disolvió en 2021 después de 28 años?",
        opciones: ["Justice", "Daft Punk", "Air", "Phoenix"],
        correcta: 1
    },
    {
        pregunta: "¿Qué compositora japonesa es famosa por las bandas sonoras de 'Cowboy Bebop'?",
        opciones: ["Yoko Kanno", "Joe Hisaishi", "Ryuichi Sakamoto", "Susumu Hirasawa"],
        correcta: 0
    },
    {
        pregunta: "¿Cuántos premios Grammy ganó Aretha Franklin durante su carrera?",
        opciones: ["10", "15", "18", "20"],
        correcta: 2
    }
];

/* ============================================
   VARIABLES GLOBALES
   ============================================ */

let preguntaActual = 0;
let puntuacionTrivia = 0;
let preguntaRespondida = false;
let votosGuardados = {};

/* ============================================
   INICIALIZACIÓN
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    inicializarApp();
});

function inicializarApp() {
    cargarArtistas();
    cargarArtistasEmergentes();
    inicializarTrivia();
    inicializarModoOscuro();
    inicializarMenu();
    inicializarScroll();
    inicializarMapa();
    inicializarReproductor();
    cargarVotosGuardados();
    aplicarAnimacionesScroll();
}

/* ============================================
   CARGA DE ARTISTAS
   ============================================ */

function cargarArtistas() {
    const grid = document.getElementById('artistsGrid');
    if (!grid) return;

    // Combinar todos los artistas
    const todosArtistas = [
        ...artistas.panama,
        ...artistas.mexico,
        ...artistas.usa,
        ...artistas.japon,
        ...artistas.francia
    ];

    grid.innerHTML = todosArtistas.map(artista => `
        <div class="artist-card" onclick="abrirModalArtista(${artista.id})">
            <div class="artist-image">
                ${artista.bandera}
            </div>
            <span class="artist-flag">${artista.bandera}</span>
            <div class="artist-info">
                <h3 class="artist-name">${artista.nombre}</h3>
                <p class="artist-country">${artista.pais}</p>
                <span class="artist-genre">${artista.genero}</span>
            </div>
            <div class="artist-listen">▶</div>
        </div>
    `).join('');

    // Agregar animación de aparición
    const cards = grid.querySelectorAll('.artist-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease-out';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

/* ============================================
   MODAL DE ARTISTA
   ============================================ */

function abrirModalArtista(id) {
    // Buscar artista en todos los países
    let artista = null;
    for (const pais in artistas) {
        artista = artistas[pais].find(a => a.id === id);
        if (artista) break;
    }

    if (!artista) return;

    const modal = document.getElementById('artistModal');
    const modalBody = document.getElementById('modalBody');

    modalBody.innerHTML = `
        <div class="modal-artist-header">
            <div class="modal-artist-image">
                ${artista.bandera}
            </div>
            <div class="modal-artist-info">
                <h2>${artista.nombre}</h2>
                <p><strong>País:</strong> ${artista.pais} ${artista.bandera}</p>
                <p><strong>Género:</strong> ${artista.genero}</p>
            </div>
        </div>
        <div class="modal-section">
            <h3>Biografía</h3>
            <p>${artista.biografia}</p>
        </div>
        <div class="modal-section">
            <h3>Premios y Reconocimientos</h3>
            <div class="modal-awards">
                ${artista.premios.map(premio => `<span class="award-badge">${premio}</span>`).join('')}
            </div>
        </div>
        <div class="modal-section">
            <h3>Curiosidades</h3>
            <p>${artista.curiosidades}</p>
        </div>
        <div class="modal-section">
            <h3>Video Musical</h3>
            <div class="modal-video">
                <iframe 
                    src="https://www.youtube.com/embed/${artista.videoId}" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Actualizar reproductor
    actualizarReproductor(artista.nombre, artista.pais);
}

function cerrarModal() {
    const modal = document.getElementById('artistModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Event listeners para el modal
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('artistModal');
    const closeBtn = document.getElementById('modalClose');

    if (closeBtn) {
        closeBtn.addEventListener('click', cerrarModal);
    }

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                cerrarModal();
            }
        });
    }

    // Cerrar con ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            cerrarModal();
        }
    });
});

/* ============================================
   ARTISTAS EMERGENTES
   ============================================ */

function cargarArtistasEmergentes() {
    const carousel = document.getElementById('emergentesCarousel');
    if (!carousel) return;

    // Cargar votos guardados
    const votos = JSON.parse(localStorage.getItem('votosEmergentes') || '{}');

    carousel.innerHTML = artistasEmergentes.map(artista => {
        const votosArtista = votos[artista.id] || artista.votos;
        const yaVotado = localStorage.getItem(`votado_${artista.id}`) === 'true';

        return `
            <div class="emergente-card">
                <div class="emergente-image">
                    ${artista.bandera}
                </div>
                <h3 class="emergente-name">${artista.nombre}</h3>
                <p class="emergente-country">${artista.pais} ${artista.bandera}</p>
                <p class="emergente-genre">${artista.genero}</p>
                <div class="emergente-votes">
                    <span class="vote-count">${votosArtista} votos</span>
                    <button class="btn-vote ${yaVotado ? 'voted' : ''}" 
                            onclick="votarArtista(${artista.id})" 
                            ${yaVotado ? 'disabled' : ''}>
                        ${yaVotado ? '✓ Votado' : 'Votar'}
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

function votarArtista(id) {
    // Verificar si ya votó
    if (localStorage.getItem(`votado_${id}`) === 'true') {
        return;
    }

    // Obtener votos actuales
    const votos = JSON.parse(localStorage.getItem('votosEmergentes') || '{}');
    votos[id] = (votos[id] || 0) + 1;

    // Guardar
    localStorage.setItem('votosEmergentes', JSON.stringify(votos));
    localStorage.setItem(`votado_${id}`, 'true');

    // Recargar carousel
    cargarArtistasEmergentes();

    // Animación de confirmación
    const boton = event.target;
    boton.style.transform = 'scale(1.2)';
    setTimeout(() => {
        boton.style.transform = 'scale(1)';
    }, 200);
}

function cargarVotosGuardados() {
    // Esta función se llama al inicio para cargar los votos
    const votos = JSON.parse(localStorage.getItem('votosEmergentes') || '{}');
    votosGuardados = votos;
}

/* ============================================
   TRIVIA MUSICAL
   ============================================ */

function inicializarTrivia() {
    preguntaActual = 0;
    puntuacionTrivia = 0;
    mostrarPregunta();
}

function mostrarPregunta() {
    if (preguntaActual >= preguntasTrivia.length) {
        mostrarResultadoFinal();
        return;
    }

    const pregunta = preguntasTrivia[preguntaActual];
    const questionEl = document.getElementById('triviaQuestion');
    const optionsEl = document.getElementById('triviaOptions');
    const feedbackEl = document.getElementById('triviaFeedback');
    const nextBtn = document.getElementById('triviaNext');
    const numberEl = document.getElementById('triviaNumber');
    const scoreEl = document.getElementById('triviaScore');

    if (!questionEl || !optionsEl) return;

    preguntaRespondida = false;
    numberEl.textContent = `Pregunta ${preguntaActual + 1} de ${preguntasTrivia.length}`;
    scoreEl.textContent = puntuacionTrivia;
    questionEl.textContent = pregunta.pregunta;

    optionsEl.innerHTML = pregunta.opciones.map((opcion, index) => `
        <div class="trivia-option" onclick="seleccionarRespuesta(${index})">
            ${opcion}
        </div>
    `).join('');

    feedbackEl.textContent = '';
    feedbackEl.className = 'trivia-feedback';
    nextBtn.style.display = 'none';
}

function seleccionarRespuesta(indice) {
    if (preguntaRespondida) return;

    const pregunta = preguntasTrivia[preguntaActual];
    const options = document.querySelectorAll('.trivia-option');
    const feedbackEl = document.getElementById('triviaFeedback');
    const nextBtn = document.getElementById('triviaNext');

    preguntaRespondida = true;

    // Deshabilitar todas las opciones
    options.forEach(opt => opt.classList.add('disabled'));

    // Marcar respuesta correcta e incorrecta
    if (indice === pregunta.correcta) {
        options[indice].classList.add('correct');
        feedbackEl.textContent = '¡Correcto! 🎉';
        feedbackEl.classList.add('correct');
        puntuacionTrivia++;
        document.getElementById('triviaScore').textContent = puntuacionTrivia;
    } else {
        options[indice].classList.add('incorrect');
        options[pregunta.correcta].classList.add('correct');
        feedbackEl.textContent = `Incorrecto. La respuesta correcta es: ${pregunta.opciones[pregunta.correcta]}`;
        feedbackEl.classList.add('incorrect');
    }

    // Mostrar botón siguiente
    nextBtn.style.display = 'block';
}

function siguientePregunta() {
    preguntaActual++;
    mostrarPregunta();
}

function mostrarResultadoFinal() {
    const questionEl = document.getElementById('triviaQuestion');
    const optionsEl = document.getElementById('triviaOptions');
    const feedbackEl = document.getElementById('triviaFeedback');
    const nextBtn = document.getElementById('triviaNext');
    const numberEl = document.getElementById('triviaNumber');

    if (!questionEl || !optionsEl) return;

    const porcentaje = Math.round((puntuacionTrivia / preguntasTrivia.length) * 100);
    let mensaje = '';

    if (porcentaje === 100) {
        mensaje = '¡Perfecto! Eres un experto musical 🏆';
    } else if (porcentaje >= 80) {
        mensaje = '¡Excelente! Tienes muy buen conocimiento musical 🌟';
    } else if (porcentaje >= 60) {
        mensaje = 'Buen trabajo, pero puedes mejorar 💪';
    } else {
        mensaje = 'Sigue aprendiendo sobre música 🎵';
    }

    numberEl.textContent = 'Resultado Final';
    questionEl.textContent = `Obtuviste ${puntuacionTrivia} de ${preguntasTrivia.length} puntos (${porcentaje}%)`;
    optionsEl.innerHTML = '';
    feedbackEl.textContent = mensaje;
    feedbackEl.className = 'trivia-feedback correct';
    nextBtn.textContent = 'Jugar Otra Vez';
    nextBtn.onclick = reiniciarTrivia;
    nextBtn.style.display = 'block';
}

function reiniciarTrivia() {
    preguntaActual = 0;
    puntuacionTrivia = 0;
    const nextBtn = document.getElementById('triviaNext');
    if (nextBtn) {
        nextBtn.textContent = 'Siguiente Pregunta';
        nextBtn.onclick = siguientePregunta;
    }
    mostrarPregunta();
}

// Event listener para el botón siguiente
document.addEventListener('DOMContentLoaded', () => {
    const nextBtn = document.getElementById('triviaNext');
    if (nextBtn) {
        nextBtn.addEventListener('click', siguientePregunta);
    }
});

/* ============================================
   MODO OSCURO/CLARO
   ============================================ */

function inicializarModoOscuro() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle?.querySelector('.theme-icon');
    
    // Cargar preferencia guardada
    const modoGuardado = localStorage.getItem('modoOscuro');
    const esOscuro = modoGuardado === null ? true : modoGuardado === 'true';
    
    if (esOscuro) {
        document.body.classList.remove('light-mode');
        if (themeIcon) themeIcon.textContent = '🌙';
    } else {
        document.body.classList.add('light-mode');
        if (themeIcon) themeIcon.textContent = '☀️';
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', toggleModo);
    }
}

function toggleModo() {
    const body = document.body;
    const themeIcon = document.querySelector('.theme-icon');
    const esOscuro = !body.classList.contains('light-mode');

    if (esOscuro) {
        body.classList.add('light-mode');
        if (themeIcon) themeIcon.textContent = '☀️';
        localStorage.setItem('modoOscuro', 'false');
    } else {
        body.classList.remove('light-mode');
        if (themeIcon) themeIcon.textContent = '🌙';
        localStorage.setItem('modoOscuro', 'true');
    }
}

/* ============================================
   MENÚ RESPONSIVE
   ============================================ */

function inicializarMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        // Cerrar menú al hacer clic en un enlace
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
    }
}

/* ============================================
   SCROLL SUAVE Y HEADER
   ============================================ */

function inicializarScroll() {
    const header = document.getElementById('header');
    
    // Header que se encoge al hacer scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header?.classList.add('scrolled');
        } else {
            header?.classList.remove('scrolled');
        }
    });

    // Scroll suave para enlaces
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

/* ============================================
   MAPA MUSICAL
   ============================================ */

function inicializarMapa() {
    const markers = document.querySelectorAll('.country-marker');
    const mapInfo = document.getElementById('mapInfo');

    markers.forEach(marker => {
        const country = marker.getAttribute('data-country');
        
        marker.addEventListener('click', () => {
            mostrarInfoPaisCompleta(country);
        });

        marker.addEventListener('mouseenter', () => {
            const tooltip = marker.querySelector('.country-tooltip');
            if (tooltip) {
                tooltip.style.opacity = '1';
            }
        });

        marker.addEventListener('mouseleave', () => {
            const tooltip = marker.querySelector('.country-tooltip');
            if (tooltip) {
                tooltip.style.opacity = '0';
            }
        });
    });

    // Cerrar modal de país
    const countryModal = document.getElementById('countryModal');
    const countryModalClose = document.getElementById('countryModalClose');
    
    if (countryModalClose) {
        countryModalClose.addEventListener('click', () => {
            if (countryModal) {
                countryModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    if (countryModal) {
        countryModal.addEventListener('click', (e) => {
            if (e.target === countryModal) {
                countryModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // Cerrar con ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (countryModal && countryModal.classList.contains('active')) {
                countryModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
    });
}

function mostrarInfoPaisCompleta(codigoPais) {
    const info = paisesInfo[codigoPais];
    const artistasPais = artistas[codigoPais] || [];
    const modal = document.getElementById('countryModal');
    const modalBody = document.getElementById('countryModalBody');

    if (!info || !modal || !modalBody) return;

    modalBody.innerHTML = `
        <div style="text-align: center; margin-bottom: var(--spacing-md);">
            <div style="font-size: 4rem; margin-bottom: var(--spacing-sm);">${info.bandera}</div>
            <h2 style="font-size: 2.5rem; color: var(--color-acento); margin-bottom: var(--spacing-sm);">
                ${info.nombre}
            </h2>
        </div>
        
        <div class="modal-section">
            <h3 style="color: var(--color-acento); margin-bottom: var(--spacing-sm);">Descripción</h3>
            <p style="color: var(--color-texto-muted); line-height: 1.8; margin-bottom: var(--spacing-md);">
                ${info.descripcion}
            </p>
        </div>

        <div class="modal-section">
            <h3 style="color: var(--color-acento); margin-bottom: var(--spacing-sm);">Géneros Populares</h3>
            <div style="display: flex; flex-wrap: wrap; gap: var(--spacing-xs); margin-bottom: var(--spacing-md);">
                ${info.generosPopulares.map(genero => 
                    `<span class="award-badge" style="background-color: var(--color-acento);">${genero}</span>`
                ).join('')}
            </div>
        </div>

        <div class="modal-section">
            <h3 style="color: var(--color-acento); margin-bottom: var(--spacing-sm);">Géneros Tradicionales</h3>
            <div style="display: flex; flex-wrap: wrap; gap: var(--spacing-xs); margin-bottom: var(--spacing-md);">
                ${info.generosTradicionales.map(genero => 
                    `<span class="award-badge" style="background-color: var(--color-borde); color: var(--color-texto);">${genero}</span>`
                ).join('')}
            </div>
        </div>

        <div class="modal-section">
            <h3 style="color: var(--color-acento); margin-bottom: var(--spacing-sm);">Artistas Más Populares</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: var(--spacing-sm);">
                ${artistasPais.map(artista => `
                    <div class="country-artist-item" onclick="abrirModalArtista(${artista.id}); if(document.getElementById('countryModal')) document.getElementById('countryModal').classList.remove('active');">
                        <strong>${artista.nombre}</strong><br>
                        <small style="color: var(--color-texto-muted);">${artista.genero}</small>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function mostrarArtistasPais(pais) {
    mostrarInfoPaisCompleta(pais);
}

/* ============================================
   REPRODUCTOR DE AUDIO
   ============================================ */

function inicializarReproductor() {
    const playBtn = document.getElementById('playerPlay');
    const prevBtn = document.getElementById('playerPrev');
    const nextBtn = document.getElementById('playerNext');
    const progressBar = document.getElementById('progressFill');

    if (playBtn) {
        playBtn.addEventListener('click', toggleReproduccion);
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            console.log('Anterior');
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            console.log('Siguiente');
        });
    }

    // Simular progreso de reproducción
    if (progressBar) {
        let progress = 0;
        setInterval(() => {
            if (progress < 100) {
                progress += 0.5;
                progressBar.style.width = progress + '%';
            }
        }, 100);
    }
}

function toggleReproduccion() {
    const playBtn = document.getElementById('playerPlay');
    if (playBtn) {
        if (playBtn.textContent === '▶') {
            playBtn.textContent = '⏸';
        } else {
            playBtn.textContent = '▶';
        }
    }
}

function actualizarReproductor(titulo, artista) {
    const playerTitle = document.getElementById('playerTitle');
    const playerArtist = document.getElementById('playerArtist');
    
    if (playerTitle) playerTitle.textContent = titulo;
    if (playerArtist) playerArtist.textContent = artista;
}

/* ============================================
   ANIMACIONES AL HACER SCROLL
   ============================================ */

function aplicarAnimacionesScroll() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.classList.remove('hidden');
            }
        });
    }, observerOptions);

    // Observar secciones
    const secciones = document.querySelectorAll('.section');
    secciones.forEach(seccion => {
        seccion.classList.add('hidden');
        observer.observe(seccion);
    });

    // Observar tarjetas de educación
    const educationCards = document.querySelectorAll('.education-card');
    educationCards.forEach((card, index) => {
        card.classList.add('hidden');
        observer.observe(card);
    });
}

/* ============================================
   FUNCIONES GLOBALES (para onclick en HTML)
   ============================================ */

// Hacer funciones disponibles globalmente
window.abrirModalArtista = abrirModalArtista;
window.votarArtista = votarArtista;
window.scrollToSection = scrollToSection;
window.seleccionarRespuesta = seleccionarRespuesta;
window.siguientePregunta = siguientePregunta;

