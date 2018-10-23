let openDiv = '<div ';
let closeDiv = '</div>';
let openCard = '<div class="card" ';
let allTitles = false;

// Zoom hover over icons
$('.icono').hover(function() {
  $(this).toggleClass('zoom-hover', 2000);
});

// Education information
let education = [
  {
    name: 'Systems and Computing Engineering',
    entity: 'Universidad de los Andes',
    image: 'uniandes1.png',
    title: 'Bachelor of Engineering',
    date: '01/2015 - 03/2020'
  },
  {
    name: 'Formation of Leaders with Talent, Integral and Competitive',
    entity: 'SENA',
    image: 'sena_1.jpeg',
    title: 'Course certificate',
    date: '07/2018 - 08/2018',
    link:
      'certifications/SENA_FormacionDeLideresConTalentoIntegralesYCompetitivos.pdf'
  },
  {
    name: 'Professional course of Git and GitHub',
    entity: 'Platzi - Apps.co',
    image: 'platzi_github.png',
    title: 'Course certificate',
    date: '01/2018',
    link:
      'https://appsco.platzi.com/@gabrielpintop/curso/1194-git-appsco/diploma/detalle/'
  },
  {
    name: 'Web Development with PHP',
    entity: 'SENA',
    image: 'php.png',
    title: 'Course certificate',
    date: '08/2018',
    link: 'certifications/SENA_DesarrolloWebConPHP.pdf'
  },
  {
    name: 'Sales Techniques',
    entity: 'Cámara de Comercio de Bogotá',
    image: 'ccb_1.png',
    title: 'Course certificate',
    date: '07/2018',
    link: 'certifications/CCB_TecnicasDeVentas.pdf'
  },
  {
    name: 'Web Design with Adobe Dreamweaver',
    entity: 'SENA',
    image: 'dreamweaver.png',
    title: 'Course certificate',
    date: '06/2016 - 07/2016',
    link: 'certifications/SENA_DisenoWebConAdobeDreamweaver.pdf'
  },
  {
    name: 'Microsoft Office Tools Management: Excel 2016',
    entity: 'SENA',
    image: 'excel_2016.png',
    title: 'Course certificate',
    date: '06/2016 - 07/2016',
    link: 'certifications/SENA_ManejoDeHerramientasMicrosoftOffice2016Excel.pdf'
  }
];

// Technical skills information
let technicalSkills = [
  {
    name: 'JavaScript',
    logo: 'https://icongr.am/devicon/javascript-original.svg',
    type: 'language',
    rating: '5'
  },
  {
    name: 'TypeScript',
    logo: 'https://icongr.am/devicon/typescript-plain.svg',
    type: 'language',
    rating: '5'
  },
  {
    name: 'Java',
    logo: 'https://icongr.am/devicon/java-original.svg',
    type: 'language',
    rating: '4'
  },
  {
    name: 'Angular',
    logo: 'https://icongr.am/devicon/angularjs-plain.svg',
    type: 'framework',
    rating: '5'
  },
  {
    name: 'React JS',
    logo: 'https://icongr.am/devicon/react-original.svg',
    type: 'framework',
    rating: '5'
  },
  {
    name: 'Meteor',
    logo: 'https://icongr.am/devicon/meteor-original.svg',
    type: 'framework',
    rating: '5'
  },
  {
    name: 'Node JS',
    logo: 'https://icongr.am/devicon/nodejs-original.svg',
    type: 'framework',
    rating: '5'
  },
  {
    name: 'MongoDB',
    logo: 'https://icongr.am/devicon/mongodb-original-wordmark.svg'
  },
  {
    name: 'HTML',
    logo: 'https://icongr.am/devicon/html5-original.svg',
    type: 'language',
    rating: '5'
  },
  {
    name: 'Bootstrap',
    logo: 'https://icongr.am/devicon/bootstrap-plain.svg',
    type: 'framework',
    rating: '5'
  },
  {
    name: 'Git',
    logo: 'https://icongr.am/devicon/git-original-wordmark.svg'
  },
  {
    name: 'PHP',
    logo: 'https://icongr.am/devicon/php-original.svg',
    type: 'language',
    rating: '3'
  },
  {
    name: 'C',
    logo: 'https://icongr.am/devicon/c-original.svg'
  },
  {
    name: 'CSS',
    logo: 'https://icongr.am/devicon/css3-original.svg'
  },
  {
    name: 'jQuery',
    logo: 'https://icongr.am/devicon/jquery-original-wordmark.svg'
  }
];

// Projects information
let projects = [
  {
    name: 'Plan Tú U',
    logo: 'LogoPlanTuU.png',
    releaseDate: 'Soon (demo video in spanish)',
    widthImagen: '150',
    url: 'https://www.youtube.com/watch?v=HT6egK4TwJc',
    description:
      'This application seeks to retain the graduates of the Universidad de los Andes through a system of points from which they can obtain benefits. The application allows people to see the benefits they can obtain, how points can be obtained and the administration of those points, among other features.',
    tags: ['React JS', 'Meteor', 'MongoDB', 'Bootstrap', 'Heroku']
  },
  {
    name: 'Consilium Colombia',
    logo: 'LogoConsilium.png',
    releaseDate: '02/04/2018',
    widthImagen: '150',
    url: 'http://www.consiliumcol.org',
    description:
      'Responsive web application based on an original and innovative idea I had and that was developed using the MEAN stack. It exposes relevant and non partialized information about the political system of Colombia related to participation mechanisms.<br>The application accumulates more than 10.000 different visitors.',
    tags: ['Angular 5', 'Node JS', 'Express', 'MongoDB', 'Bootstrap', 'Heroku']
  },
  {
    name: 'Ineffable Inventions',
    logo: 'LogoIneffableInventions.png',
    releaseDate: '30/06/2018',
    widthImagen: '150',
    url: 'http://ineffableinventions.com.co/',
    description:
      'The amazing web page of my company. It shows information of what the name means, the projects and the team that makes part of this entrepreneurship.',
    tags: ['Angular 6', 'Bootstrap']
  },
  {
    name: 'VPP',
    logo: 'LogoVPP.png',
    releaseDate: '09/09/2018',
    widthImagen: '150',
    url: 'http://vpp.ineffableinventions.com.co/',
    description:
      'Web application that allows citizens to interact with more than 20.000 public investment projects in Colombia by knowing and commenting about the development and implementation of them.',
    tags: ['React JS', 'Node JS', 'Express', 'MongoDB', 'Bootstrap', 'Heroku']
  },
  {
    name: 'Consilium México',
    url: 'http://www.consiliummex.org',
    logo: 'LogoConsiliumMexico.png',
    releaseDate: '30/05/2018',
    widthImagen: '150',
    description:
      'Responsive web application based on an idea I had and that was developed using the MEAN stack. It exposes information about the presidental candidates of Mexico´s 2018 elections and also allows the comparation of their proposals.',
    tags: ['Angular 5', 'Node JS', 'Express', 'MongoDB', 'Bootstrap', 'Heroku']
  }
];

let experience = [
  {
    company: 'Autopago S.A.S.',
    location: 'Bogotá D.C., Colombia',
    role: 'CTO & Webmaster',
    image: 'autopago.png',
    description:
      'I am in charge of all the activities related with technology, such as the virtualization of data and the email configurations. I designed and implemented the <a href="http://www.autopago.com.co" target="blank">new web page</a> of the company using Angular 5 and Bootstrap. I am currently working on a system for managing the clients and the viabilities forms.',
    date: '01/2017 - Present',
    link: 'http://www.autopago.com.co/'
  },
  {
    company: 'CIbSE 2018 - Universidad de los Andes',
    location: 'Bogotá D.C., Colombia',
    role: 'Webmaster',
    image: 'cibse.png',
    description:
      'I was in charge of the <a href="https://cibse.github.io/conference/" target="blank">official web page</a> of XXI Ibero-American Conference on Software Engineering. I created new sections, add a lot of new content and implemented a mobile friendly behavior to the web page. I used Bootstrap 4 for the responsive behavior and gained a lot of experience using JavaScript and creating web pages in different languages.',
    date: '01/2017 - 05/2018',
    link: 'https://cibse.github.io/conference/'
  }
];

// Main function
function main() {
  for (let index = 0; index < 5; index++) {
    showTitle(education[index]);
  }

  for (let index = 0; index < projects.length; index++) {
    showProject(projects[index]);
  }

  for (let index = 0; index < experience.length; index++) {
    showExperience(experience[index]);
  }

  for (let index = 0; index < technicalSkills.length; index++) {
    showSkill(technicalSkills[index]);
  }

  skillsLogic();
}

// Shows a title on the DOM
function showTitle(title) {
  let image =
    '<img class="mx-auto rounded" alt="' +
    title.name +
    '" src="images/education/' +
    title.image +
    '"width="100%">';
  let content =
    '<h5 class="oswald">' +
    title.name +
    '</h5><h6>' +
    title.entity +
    '</h6><p>' +
    title.title +
    ' | ' +
    title.date;
  let imageColumn = 'class="col-lg-3 col-md-4 col-12 wow slideInLeft"';
  let textColumn = 'class="col-lg-5 col-md-8 col-12 mb-4 wow slideInRight"';
  let startEndColumn = '<div class="col-2 col-md-12 col-lg-2"></div>';

  let educationList = $('#educationList');

  content += '<br>';

  if (title.link) {
    content +=
      '<a href="' +
      title.link +
      '" class="badge badge-info" target="_blank">See certificate</a>';
  } else {
    content += '<br>';
  }

  educationList.append(startEndColumn);
  educationList.append(openDiv + imageColumn + '>' + image + closeDiv);
  educationList.append(
    openDiv +
      textColumn +
      '>' +
      openCard +
      'style="height: 100%">' +
      openDiv +
      'class="mt-2 mr-2 ml-2">' +
      content +
      '</p>' +
      closeDiv +
      closeDiv +
      closeDiv
  );
  educationList.append(startEndColumn);
}

// Show the other titles
function showMoreTitles() {
  for (let index = 5; index < education.length; index++) {
    showTitle(education[index]);
  }
}

$('#showAllTitles').click(function() {
  showMoreTitles();
  $('#showAllTitles').hide();
});

// Shows a job on the DOM
function showExperience(job) {
  let image =
    '<a href="' +
    job.link +
    '" target="blank"><img class="mx-auto rounded shadow-lg mt-3 zoom-it" alt="' +
    job.company +
    '" src="images/experience/' +
    job.image +
    '"width="100%"></a>';
  let content =
    '<h5 class="oswald">' +
    job.company +
    ' | ' +
    job.role +
    ' | ' +
    job.date +
    '</h5><p>' +
    job.description +
    ' ';
  let imageColumn = 'class="col-lg-4 col-md-4 col-12 wow slideInLeft"';
  let textColumn = 'class="col-lg-8 col-md-8 col-12 mb-4 wow slideInRight"';

  let experienceList = $('#experienceList');

  content += '<br>';

  experienceList.append(openDiv + imageColumn + '>' + image + closeDiv);
  experienceList.append(
    openDiv +
      textColumn +
      '>' +
      openCard +
      'style="height: 100%">' +
      openDiv +
      'class="mt-2 mr-2 ml-2">' +
      content +
      '</p>' +
      closeDiv +
      closeDiv +
      closeDiv
  );
}

// Shows a skill on the DOM
function showSkill(skill) {
  let skillsList = $('#skillsList');
  let languagesList = $('#languages');
  let frameworksList = $('#frameworks');

  skillsList.append(
    '<div class="slide"><img src="' +
      skill.logo +
      '" title="' +
      skill.name +
      '"></div>'
  );
  if (skill.type) {
    let rating = calculateStars(skill.rating);
    let add;
    if (skill.type === 'language') {
      add = languagesList;
    } else if (skill.type === 'framework') {
      add = frameworksList;
    }
    add.append(
      '<li class="list-group-item wow fadeInDown"><div class="row"><div class="col-6">' +
        skill.name +
        closeDiv +
        '<div class="col-6 text-right">' +
        rating +
        '</div></div></li>'
    );
  }
}

// Calculates the stars to show
function calculateStars(rating) {
  let stars = '';
  for (let index = 0; index < rating; index++) {
    stars += '<span class="fas estrella fa-star"></span>';
  }

  let total = 5 - rating;

  for (let index = 0; index < total; index++) {
    stars += '<span class="far estrella fa-star"></span>';
  }

  return stars;
}

// Mandatory for the slide to work
function skillsLogic() {
  $('.customer-logos').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1400,
    arrows: false,
    dots: false,
    pauseOnHover: true,
    responsive: [
      {
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

// Shows a project on the DOM
function showProject(project) {
  let column =
    '<div class="col-lg-6 col-12 text-center wow fadeInLeft d-flex align-items-stretch">';
  let cardLink =
    '<div class="card mx-auto pointer mb-4 zoom-it" style="width: 100%" onclick="openLink(\'' +
    project.url +
    '\')" target="_blank">';
  let cardBody = '<div class="card-body no-gutters">';
  let image =
    '<img class="card-img-top" src="images/projects/' +
    project.logo +
    '" alt="' +
    project.name +
    '" style="width: ' +
    project.widthImagen +
    'px;background-color: white">';
  let nameProyecto =
    '<p class="mt-2 card-text  text-background"><span class="font-weight-bold">' +
    project.name +
    '</span><br><span class="text-dark">' +
    project.releaseDate +
    '</span></p>';
  let descripcionProyecto =
    '<p class="mt-1 card-text">' + project.description + '</p>';

  let hTag = '<p>';

  project.tags.forEach(tag => {
    hTag += '<span class="badge badge-primary">' + tag + '</span>&nbsp;';
  });

  hTag += '</p>';

  $('#projectsList').append(
    column +
      cardLink +
      cardBody +
      image +
      nameProyecto +
      descripcionProyecto +
      closeDiv +
      hTag +
      closeDiv +
      closeDiv
  );
}

//Función para abrir los links al hacer click
function openLink(link) {
  let win = window.open(link, '_blank');
  win.focus();
}

$(document).ready(main);
