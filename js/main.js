let abrirDiv = '<div ';
let cerrarDiv = '</div>';
let abrirCarta = '<div class="card" ';

// Amplia los elementos al pasar sobre ellos

$('.icono').hover(function () {
  $(this).toggleClass('zoom-hover', 2000);
});

let estudios = [{
  'nombre': 'Ingeniería de Sistemas y Computación',
  'entidad': 'Universidad de los Andes',
  'foto': 'uniandes1.png',
  'titulo': 'Título de grado',
  'fecha': '2014 - 2019'
}, {
  'nombre': 'Curso Profesional de Git y GitHub',
  'entidad': 'Platzi - Apps.co',
  'foto': 'platzi_github.png',
  'titulo': 'Certificado de curso',
  'fecha': '2018',
  'link': 'https://appsco.platzi.com/@gabrielpintop/curso/1194-git-appsco/diploma/detalle/'
}, {
  'nombre': 'Formación de Líderes con Talento, Integrales y Competitivos',
  'entidad': 'Sena',
  'foto': 'sena_1.png',
  'titulo': 'Certificado de curso',
  'fecha': '2018',
  'link': 'http://certificados.sena.edu.co/guardar.asp?var1=9103001727514CC1022430600C'
}, {
  'nombre': 'Técnicas de Ventas',
  'entidad': 'Cámara de Comercio de Bogotá',
  'foto': 'ccb_1.png',
  'titulo': 'Certificado de curso',
  'fecha': '2018',
  'link': 'https://1drv.ms/b/s!AsU5hdCay9Yag61GDmdYPdzss1uwIQ'
}];

let conocimientos = [{
  'nombre': 'JavaScript',
  'logo': 'https://icongr.am/devicon/javascript-original.svg',
  'tipo': 'lenguaje',
  'rating': '5'
}, {
  'nombre': 'Java',
  'logo': 'https://icongr.am/devicon/java-original.svg',
  'tipo': 'lenguaje',
  'rating': '4'
}, {
  'nombre': 'Angular',
  'logo': 'https://icongr.am/devicon/angularjs-plain.svg',
  'tipo': 'framework',
  'rating': '5'
}, {
  'nombre': 'Node JS',
  'logo': 'https://icongr.am/devicon/nodejs-original.svg',
  'tipo': 'framework',
  'rating': '4'
}, {
  'nombre': 'MongoDB',
  'logo': 'https://icongr.am/devicon/mongodb-original-wordmark.svg'
}, {
  'nombre': 'HTML',
  'logo': 'https://icongr.am/devicon/html5-original.svg',
  'tipo': 'lenguaje',
  'rating': '5'
}, {
  'nombre': 'Bootstrap',
  'logo': 'https://icongr.am/devicon/bootstrap-plain.svg',
  'tipo': 'framework',
  'rating': '5'
}, {
  'nombre': 'Git',
  'logo': 'https://icongr.am/devicon/git-original-wordmark.svg'
}, {
  'nombre': 'PHP',
  'logo': 'https://icongr.am/devicon/php-original.svg',
  'tipo': 'lenguaje',
  'rating': '3'
}, {
  'nombre': 'C',
  'logo': 'https://icongr.am/devicon/c-original.svg'
}, {
  'nombre': 'CSS',
  'logo': 'https://icongr.am/devicon/css3-original.svg'
}, {
  'nombre': 'Heroku',
  'logo': 'https://icongr.am/devicon/heroku-plain-wordmark.svg'
}, {
  'nombre': 'jQuery',
  'logo': 'https://icongr.am/devicon/jquery-original-wordmark.svg'
}, ]

function main() {
  for (let index = 0; index < estudios.length; index++) {
    mostrarEstudio(estudios[index]);
  }

  for (let index = 0; index < conocimientos.length; index++) {
    mostrarConocimiento(conocimientos[index]);
  }

  logicaConocimientos();
}

function mostrarEstudio(estudio) {

  let image = '<img class="mx-auto rounded" src="images/estudios/' + estudio.foto + '"width="100%">';
  let contenido = '<h5 class="oswald">' + estudio.nombre + '</h5><h6>' + estudio.entidad + '</h6><p>' + estudio.titulo + ' | ' + estudio.fecha;
  let claseColumnaFoto = 'class="col-lg-3 col-md-4 col-12 wow slideInLeft"';
  let claseColumnaTexto = 'class="col-lg-5 col-md-8 col-12 mb-4 wow slideInRight"';
  let columnaInicioFin = '<div class="col-2 col-md-12 col-lg-2"></div>';

  let listaEstudios = $('#listaEstudios');

  if (estudio.nombre.length <= 46) {
    contenido += '<br>';
  } else {
    contenido += '&nbsp;&nbsp;';
  }

  if (estudio.link) {
    contenido += '<a href="' + estudio.link + '" class="badge badge-info" target="_blank">Ver certificado</a>';
  } else {
    contenido += '<br>';
  }

  listaEstudios.append(columnaInicioFin);
  listaEstudios.append(abrirDiv + claseColumnaFoto + '>' + image + cerrarDiv);
  listaEstudios.append(abrirDiv + claseColumnaTexto + '>' + abrirCarta + 'style="height: 100%">' + abrirDiv + 'class="mt-2 mr-2 ml-2">' + contenido + '</p>' + cerrarDiv + cerrarDiv + cerrarDiv);
  listaEstudios.append(columnaInicioFin);
}

function mostrarConocimiento(conocimiento) {
  let listaConocimientos = $('#listaConocimientos');
  let listaLenguajes = $('#lenguajes');
  let listaFrameworks = $('#frameworks');

  listaConocimientos.append('<div class="slide"><img src="' + conocimiento.logo + '" title="' + conocimiento.nombre + '"></div>');
  if (conocimiento.tipo) {
    let rating = calcularEstrellas(conocimiento.rating);
    let agregar;
    if (conocimiento.tipo === 'lenguaje') {
      agregar = listaLenguajes;
    } else if (conocimiento.tipo === 'framework') {
      agregar = listaFrameworks;
    }
    agregar.append('<li class="list-group-item wow fadeInDown"><div class="row"><div class="col-6">' + conocimiento.nombre + cerrarDiv + '<div class="col-6 text-right">' + rating + '</div></div></li>');

  }
}

function calcularEstrellas(rating) {
  let estrellas = '';
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
  $('.customer-logos').slick({
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
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 3
      }
    }]
  });
}

$(document).ready(main);