let abrirDiv = "<div ";
let cerrarDiv = "</div>";
let abrirCarta = '<div class="card" ';


// Amplia los elementos al pasar sobre ellos

$(".icono").hover(function () {
  $(this).toggleClass("zoom-hover", 2000);
});

$("#zoomBtn").click(function () {
  $(".zoom-btn-md").toggleClass("scale-out");
  if (!$(".zoom-card").hasClass("scale-out")) {
    $(".zoom-card").toggleClass("scale-out");
  }
});

$(".zoom-btn-md").click(function () {
  var btn = $(this);
  var card = $(".zoom-card");
  if ($(".zoom-card").hasClass("scale-out")) {
    $(".zoom-card").toggleClass("scale-out");
  }
  if (btn.hasClass("zoom-btn-person")) {
    card.css("background-color", "#d32f2f");
  } else if (btn.hasClass("zoom-btn-doc")) {
    card.css("background-color", "#fbc02d");
  } else if (btn.hasClass("zoom-btn-tangram")) {
    card.css("background-color", "#388e3c");
  } else if (btn.hasClass("zoom-btn-report")) {
    card.css("background-color", "#1976d2");
  } else {
    card.css("background-color", "#7b1fa2");
  }
});

let estudios = [{
    nombre: "Ingeniería de Sistemas y Computación",
    entidad: "Universidad de los Andes",
    foto: "uniandes1.png",
    titulo: "Título de grado",
    fecha: "2014 - 2019"
  },
  {
    nombre: "Curso Profesional de Git y GitHub",
    entidad: "Platzi - Apps.co",
    foto: "platzi_github.png",
    titulo: "Certificado de curso",
    fecha: "2018",
    link: "https://appsco.platzi.com/@gabrielpintop/curso/1194-git-appsco/diploma/detalle/"
  },
  {
    nombre: "Formación de Líderes con Talento, Integrales y Competitivos",
    entidad: "Sena",
    foto: "sena_1.png",
    titulo: "Certificado de curso",
    fecha: "2018",
    link: "http://certificados.sena.edu.co/guardar.asp?var1=9103001727514CC1022430600C"
  },
  {
    nombre: "Técnicas de Ventas",
    entidad: "Cámara de Comercio de Bogotá",
    foto: "ccb_1.png",
    titulo: "Certificado de curso",
    fecha: "2018",
    link: "https://1drv.ms/b/s!AsU5hdCay9Yag61GDmdYPdzss1uwIQ"
  }
];

let conocimientos = [{
    nombre: "JavaScript",
    logo: "https://icongr.am/devicon/javascript-original.svg",
    tipo: "lenguaje",
    rating: "5"
  },
  {
    nombre: "Java",
    logo: "https://icongr.am/devicon/java-original.svg",
    tipo: "lenguaje",
    rating: "4"
  },
  {
    nombre: "Angular",
    logo: "https://icongr.am/devicon/angularjs-plain.svg",
    tipo: "framework",
    rating: "5"
  },
  {
    nombre: "Node JS",
    logo: "https://icongr.am/devicon/nodejs-original.svg",
    tipo: "framework",
    rating: "4"
  },
  {
    nombre: "MongoDB",
    logo: "https://icongr.am/devicon/mongodb-original-wordmark.svg"
  },
  {
    nombre: "HTML",
    logo: "https://icongr.am/devicon/html5-original.svg",
    tipo: "lenguaje",
    rating: "5"
  },
  {
    nombre: "Bootstrap",
    logo: "https://icongr.am/devicon/bootstrap-plain.svg",
    tipo: "framework",
    rating: "5"
  },
  {
    nombre: "Git",
    logo: "https://icongr.am/devicon/git-original-wordmark.svg"
  },
  {
    nombre: "PHP",
    logo: "https://icongr.am/devicon/php-original.svg",
    tipo: "lenguaje",
    rating: "3"
  },
  {
    nombre: "C",
    logo: "https://icongr.am/devicon/c-original.svg"
  },
  {
    nombre: "CSS",
    logo: "https://icongr.am/devicon/css3-original.svg"
  },
  {
    nombre: "jQuery",
    logo: "https://icongr.am/devicon/jquery-original-wordmark.svg"
  }
];

let proyectos = [{
    nombre: "Consilium México",
    url: "http://www.consiliummex.org",
    logo: "LogoConsiliumMexico.png",
    widthImagen: "100",
    descripcion: "Aplicación web implementada bajo el stack MEAN que se encargó de exponer la información más importante de los candidatos presidenciales de México para el año 2018. Expone la información básica de los candidatos, sus propuestas y permite la comparación entre estas.",
    tags: ["Idea propia", "MEAN", "Bootstrap", "Heroku"]
  },
  {
    nombre: "Autopago S.A.S.",
    url: "http://www.autopago.com.co",
    logo: "LogoAutopago.png",
    widthImagen: "152",
    descripcion: "Página web completamente responsive que ilustra los aspectos más representativos de <b>Autopago S.A.S.</b>, una empresa multimarca comercializadora de vehículos. Incluye un formulario de contacto, un barra de iconos adaptable y un sistema de chat en tiempo real.",
    tags: ["Angular 5", "Bootstrap", "Apache"]
  },
  {
    nombre: "Consilium Colombia",
    logo: "LogoConsilium.png",
    widthImagen: "100",
    url: "http://www.consiliumcol.org",
    descripcion: "Aplicación web completamente responsive implementada bajo el stack MEAN que se encarga de exponer información relevante sobre las votaciones que se llevan a cabo en Colombia (elecciones presidenciales, elecciones locales, consultas populares, entre otras).",
    tags: ["Idea propia", "MEAN", "Bootstrap", "Heroku"]
  }
];

function main() {
  $(".fixed-action-btn").floatingActionButton();

  for (let index = 0; index < estudios.length; index++) {
    mostrarEstudio(estudios[index]);
  }

  for (let index = 0; index < conocimientos.length; index++) {
    mostrarConocimiento(conocimientos[index]);
  }

  logicaConocimientos();

  for (let index = 0; index < proyectos.length; index++) {
    mostrarProyecto(proyectos[index]);
  }
}

function mostrarEstudio(estudio) {
  let image =
    '<img class="mx-auto rounded" src="images/estudios/' +
    estudio.foto +
    '"width="100%">';
  let contenido =
    '<h5 class="oswald">' +
    estudio.nombre +
    "</h5><h6>" +
    estudio.entidad +
    "</h6><p>" +
    estudio.titulo +
    " | " +
    estudio.fecha;
  let claseColumnaFoto = 'class="col-lg-3 col-md-4 col-12 wow slideInLeft"';
  let claseColumnaTexto =
    'class="col-lg-5 col-md-8 col-12 mb-4 wow slideInRight"';
  let columnaInicioFin = '<div class="col-2 col-md-12 col-lg-2"></div>';

  let listaEstudios = $("#listaEstudios");

  if (estudio.nombre.length <= 46) {
    contenido += "<br>";
  } else {
    contenido += "&nbsp;&nbsp;";
  }

  if (estudio.link) {
    contenido +=
      '<a href="' +
      estudio.link +
      '" class="badge badge-info" target="_blank">Ver certificado</a>';
  } else {
    contenido += "<br>";
  }

  listaEstudios.append(columnaInicioFin);
  listaEstudios.append(abrirDiv + claseColumnaFoto + ">" + image + cerrarDiv);
  listaEstudios.append(
    abrirDiv +
    claseColumnaTexto +
    ">" +
    abrirCarta +
    'style="height: 100%">' +
    abrirDiv +
    'class="mt-2 mr-2 ml-2">' +
    contenido +
    "</p>" +
    cerrarDiv +
    cerrarDiv +
    cerrarDiv
  );
  listaEstudios.append(columnaInicioFin);
}

function mostrarConocimiento(conocimiento) {
  let listaConocimientos = $("#listaConocimientos");
  let listaLenguajes = $("#lenguajes");
  let listaFrameworks = $("#frameworks");

  listaConocimientos.append(
    '<div class="slide"><img src="' +
    conocimiento.logo +
    '" title="' +
    conocimiento.nombre +
    '"></div>'
  );
  if (conocimiento.tipo) {
    let rating = calcularEstrellas(conocimiento.rating);
    let agregar;
    if (conocimiento.tipo === "lenguaje") {
      agregar = listaLenguajes;
    } else if (conocimiento.tipo === "framework") {
      agregar = listaFrameworks;
    }
    agregar.append(
      '<li class="list-group-item wow fadeInDown"><div class="row"><div class="col-6">' +
      conocimiento.nombre +
      cerrarDiv +
      '<div class="col-6 text-right">' +
      rating +
      "</div></div></li>"
    );
  }
}

function calcularEstrellas(rating) {
  let estrellas = "";
  for (let index = 0; index < rating; index++) {
    estrellas += '<span class="fas estrella fa-star"></span>';
  }

  let total = 5 - rating;

  for (let index = 0; index < total; index++) {
    estrellas += '<span class="far estrella fa-star"></span>';
  }

  return estrellas;
}

function logicaConocimientos() {
  $(".customer-logos").slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1400,
    arrows: false,
    dots: false,
    pauseOnHover: true,
    responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 3
        }
      }
    ]
  });
}

function mostrarProyecto(proyecto) {
  let columna = '<div class="col-lg-4 col-12 text-center wow fadeInLeft">';
  let cardLink =
    '<div class="card mx-auto pointer mb-4" style="width: 100%;max-width: 400px;" onclick="abrirLink(\'' +
    proyecto.url +
    '\')" target="_blank">';
  let cardBody = '<div class="card-body no-gutters">';
  let imagen =
    '<img class="card-img-top" src="images/proyectos/' +
    proyecto.logo +
    '" alt="' +
    proyecto.nombre +
    '" style="width: ' +
    proyecto.widthImagen +
    'px;background-color: white">';
  let nombreProyecto =
    '<p class="mt-2 card-text font-weight-bold text-background">' +
    proyecto.nombre +
    "</p>";
  let descripcionProyecto =
    '<p class="mt-1 card-text">' + proyecto.descripcion + "</p>";
  let abrirProyecto =
    '<div class="card-footer text-primary abrir">Abrir proyecto</div>';
  $("#listaProyectos").after(
    columna +
    cardLink +
    cardBody +
    imagen +
    nombreProyecto +
    descripcionProyecto +
    cerrarDiv +
    abrirProyecto +
    cerrarDiv +
    cerrarDiv
  );
}

function abrirLink(link) {
  let win = window.open(link, "_blank");
  win.focus();
}

$(document).ready(main);