import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Beagle Giggle',
      description: 'Sistema completo para una veterinaria: backend en SpringBoot y frontend en Angular. Permite agendar citas, gestionar veterinarios, medicamentos y visualizar métricas en un dashboard.',
      technologies: ['SpringBoot', 'Angular', 'MySQL'],
      image: 'https://i.postimg.cc/Y2v5p6g7/vet.jpg', // cambia por una real si tienes
      demo: '#',
      code: 'https://github.com/tuusuario/beagle-giggle'
    },
    {
      title: 'Omnichannel Complaints',
      description: 'Sitio web para recepción de quejas ciudadanas, las cuales se redirigen a empresas de servicios públicos. Incluye backend en SpringBoot, Supabase y frontend con Thymeleaf.',
      technologies: ['SpringBoot', 'Thymeleaf', 'Supabase'],
      image: 'https://i.postimg.cc/Df3LxhSh/omnichannel.jpg',
      demo: '#',
      code: 'https://github.com/tuusuario/omnichannel'
    },
    {
      title: 'CropGo',
      description: 'App Android para agricultores, transportistas y usuarios. Los agricultores publican productos, los transportistas ofertan servicios, y los usuarios acceden a información de temporada y trazabilidad.',
      technologies: ['Kotlin', 'Android Studio', 'Firebase'],
      image: 'https://i.postimg.cc/gjZXTbgz/cropgo.jpg',
      demo: '#',
      code: 'https://github.com/tuusuario/cropgo'
    },
    {
      title: 'VoX Social Network',
      description: 'Red social académica para estudiantes de universidad. Permite crear perfiles, publicaciones, y seguir a otros usuarios. Desarrollada en SpringBoot.',
      technologies: ['SpringBoot', 'JPA', 'PostgreSQL'],
      image: 'https://i.postimg.cc/Y05shMGR/vox.jpg',
      demo: '#',
      code: 'https://github.com/tuusuario/vox'
    }
  ];
}
