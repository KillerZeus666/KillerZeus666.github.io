import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LanguageService } from '../services/language.service';

interface EducationItem {
  year: string;
  title: string;
  description: string;
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
    tabs: { personal: string; education: string; hobbies: string },
    personal: {
      name: string;
      nationality: string;
      location: string;
      birthdate: string;
      phone: string;
      goals: string;
    },
    educationTimeline: EducationItem[],
    hobbies: string[]
  } = {
    tabs: { personal: '', education: '', hobbies: '' },
    personal: {
      name: '',
      nationality: '',
      location: '',
      birthdate: '',
      phone: '',
      goals: ''
    },
    educationTimeline: [],
    hobbies: []
  };

  constructor(private languageService: LanguageService) {}

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

  updateTexts(lang: string) {
    if (lang === 'en') {
      this.texts = {
        tabs: {
          personal: 'Personal Info',
          education: 'Education',
          hobbies: 'Hobbies'
        },
        personal: {
          name: 'Katheryn Sofia Guasca',
          nationality: 'Colombian',
          location: 'Bogotá, Colombia',
          birthdate: 'March 26, 2006',
          phone: '3013442915',
          goals: 'To develop creative and efficient technological solutions, focused on artificial intelligence and high-quality software.'
        },
        educationTimeline: [
          { year: 'Until 2022', title: 'High School', description: 'Completed secondary education' },
          { year: '2018 - 2021', title: 'English B2', description: 'Colombo Americano' },
          { year: '2021 - 2022', title: 'French B2', description: 'Smart Academy' },
          { year: '2023 - Present', title: 'Systems Engineering', description: 'Pontificia Universidad Javeriana' }
        ],
        hobbies: [
          'Watching series',
          'Riding bike',
          'Listening to music',
          'Playing video games',
          'Walking',
          'Playing table tennis'
        ]
      };
    } else {
      this.texts = {
        tabs: {
          personal: 'Información Personal',
          education: 'Educación',
          hobbies: 'Gustos'
        },
        personal: {
          name: 'Katheryn Sofia Guasca',
          nationality: 'Colombiana',
          location: 'Bogotá, Colombia',
          birthdate: '26 de marzo de 2006',
          phone: '3013442915',
          goals: 'Desarrollar soluciones tecnológicas creativas y eficientes, enfocadas en inteligencia artificial y software de calidad.'
        },
        educationTimeline: [
          { year: 'Hasta 2022', title: 'Bachillerato', description: 'Educación secundaria completa' },
          { year: '2018 - 2021', title: 'Inglés B2', description: 'Colombo Americano' },
          { year: '2021 - 2022', title: 'Francés B2', description: 'Academia Smart' },
          { year: '2023 - Actual', title: 'Ingeniería de Sistemas', description: 'Pontificia Universidad Javeriana' }
        ],
        hobbies: [
          'Ver series',
          'Montar bicicleta',
          'Escuchar música',
          'Jugar videojuegos',
          'Salir a caminar',
          'Jugar tenis de mesa'
        ]
      };
    }
  }
}
