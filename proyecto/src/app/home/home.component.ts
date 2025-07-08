import { Subscription } from 'rxjs';
import { LanguageService } from '../services/language.service';
import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';

interface EducationItem {
  year: string;
  title: string;
  description: string;
}

interface WorkItem {
  year: string;
  title: string;
  description: string[];
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  language: string = 'es';
  languageSubscription!: Subscription;
  activeTab: 'personal' | 'education' | 'hobbies' = 'personal';

  texts: {
    titlePart1: string;
    titlePart2: string;
    tabs: { personal: string; education: string; hobbies: string };
    labels: {
      name: string;
      nationality: string;
      location: string;
      birthdate: string;
      phone: string;
      goals: string;
    };
    personal: {
      name: string;
      nationality: string;
      location: string;
      birthdate: string;
      phone: string;
      goals: string;
    };
    workTitle: string;
    workTimeline: WorkItem[];
    educationTitle: string;
    educationTimeline: EducationItem[];
    hobbies: { icon: string; label: string }[];
  } = {} as any;

  constructor(private languageService: LanguageService, private elRef: ElementRef) {}

  ngOnInit() {
    this.languageSubscription = this.languageService.language$.subscribe(lang => {
      this.language = lang;
      this.updateTexts(lang);
    });
    this.updateTexts(this.languageService.getLanguage());
  }

  ngOnDestroy() {
    this.languageSubscription?.unsubscribe();
  }

  getIndicatorPosition(): string {
    const positions: { [key in 'personal' | 'education' | 'hobbies']: string } = {
      personal: '0%',
      education: '33.33%',
      hobbies: '66.66%',
    };
    return positions[this.activeTab] || '0%';
  }

  setTab(tab: 'personal' | 'education' | 'hobbies') {
    this.activeTab = tab;
    if (tab === 'education') {
      this.observeTimelineCards();
    }
  }

  observeTimelineCards() {
    setTimeout(() => {
      const cards = this.elRef.nativeElement.querySelectorAll('.timeline-content');
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });

      cards.forEach((card: Element) => observer.observe(card));
    }, 50);
  }

  updateTexts(lang: string) {
    if (lang === 'en') {
      this.texts = {
        titlePart1: 'About ',
        titlePart2: 'me...',
        tabs: { personal: 'Personal Info', education: 'Education', hobbies: 'Hobbies' },
        labels: {
          name: 'Name',
          nationality: 'Nationality',
          location: 'Location',
          birthdate: 'Birthdate',
          phone: 'Phone',
          goals: 'Goal'
        },
        personal: {
          name: 'Katheryn Sofia Guasca',
          nationality: 'Colombian',
          location: 'Bogotá, Colombia',
          birthdate: 'March 26, 2006',
          phone: '3013442915',
          goals: 'To develop creative and efficient technological solutions, focused on artificial intelligence and high-quality software.'
        },
        workTitle: 'Work Experience',
        workTimeline: [
          {
            year: '2023 - 2024',
            title: 'Former Member IEEE RAS Javeriana',
            description: ['Robotics and automation projects.', 'Research on autonomous systems.']
          },
          {
            year: '2024 - Present',
            title: 'Member of VCloud Javeriana',
            description: ['Cloud computing.', 'Virtualized environments.']
          }
        ],
        educationTitle: 'Academic Background',
        educationTimeline: [
          { year: '2008 - 2022', title: 'High School', description: 'Colegio Bilingüe Ciudad Montes' },
          { year: '2017 - 2020', title: 'English (B2)', description: 'Instituto Colombo Americano' },
          { year: '2020 - 2022', title: 'French (B2)', description: 'Academia de Idiomas Smart' },
          { year: '2021 - 2023', title: 'Networking Technician', description: 'Centro Andino de Estudios Técnicos' },
          { year: '2023 - Present', title: 'Systems Engineering', description: 'Pontificia Universidad Javeriana' }
        ],
        hobbies: [
          { icon: '🎬', label: 'Watching series' },
          { icon: '🚴‍♀️', label: 'Riding a bike' },
          { icon: '🎧', label: 'Listening to music' },
          { icon: '🎮', label: 'Playing video games' },
          { icon: '🚶‍♀️', label: 'Walking' },
          { icon: '🏓', label: 'Table tennis' }
        ]
      };
    } else {
      this.texts = {
        titlePart1: 'Sobre ',
        titlePart2: 'mí...',
        tabs: { personal: 'Información Personal', education: 'Educación', hobbies: 'Gustos' },
        labels: {
          name: 'Nombre',
          nationality: 'Nacionalidad',
          location: 'Ubicación',
          birthdate: 'Fecha de nacimiento',
          phone: 'Teléfono',
          goals: 'Objetivo'
        },
        personal: {
          name: 'Katheryn Sofia Guasca',
          nationality: 'Colombiana',
          location: 'Bogotá, Colombia',
          birthdate: '26 de marzo de 2006',
          phone: '3013442915',
          goals: 'Desarrollar soluciones tecnológicas creativas y eficientes, enfocadas en inteligencia artificial y software de calidad.'
        },
        workTitle: 'Experiencia Laboral',
        workTimeline: [
          {
            year: '2023 - 2024',
            title: 'Ex Miembro IEEE RAS Javeriana',
            description: ['Proyectos de robótica y automatización.', 'Investigación en sistemas autónomos.']
          },
          {
            year: '2024 - Actual',
            title: 'Miembro VCloud Javeriana',
            description: ['Computación en la nube.', 'Entornos virtualizados.']
          }
        ],
        educationTitle: 'Formación Académica',
        educationTimeline: [
          { year: '2008 - 2022', title: 'Bachillerato Académico', description: 'Colegio Bilingüe Ciudad Montes' },
          { year: '2017 - 2020', title: 'Inglés (Nivel B2)', description: 'Instituto Colombo Americano' },
          { year: '2020 - 2022', title: 'Francés (Nivel B2)', description: 'Academia de Idiomas Smart' },
          { year: '2021 - 2023', title: 'Técnico en Redes', description: 'Centro Andino de Estudios Técnicos' },
          { year: '2023 - Actualidad', title: 'Ingeniería de Sistemas', description: 'Pontificia Universidad Javeriana' }
        ],
        hobbies: [
          { icon: '🎬', label: 'Ver series' },
          { icon: '🚴‍♀️', label: 'Montar bicicleta' },
          { icon: '🎧', label: 'Escuchar música' },
          { icon: '🎮', label: 'Jugar videojuegos' },
          { icon: '🚶‍♀️', label: 'Salir a caminar' },
          { icon: '🏓', label: 'Jugar tenis de mesa' }
        ]
      };
    }
  }
}
