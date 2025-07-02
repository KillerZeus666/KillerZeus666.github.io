import { Component, OnInit, OnDestroy } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { Subscription } from 'rxjs';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  language: string = 'es';
  languageSubscription!: Subscription;
  activeTab: string = 'personal';

  // 👇 Aquí se usa un JSON (no .lottie directamente)
  options: AnimationOptions = {
    path: 'https://assets7.lottiefiles.com/packages/lf20_qp1q7mct.json', // Puedes cambiarlo por otro JSON
    loop: true,
    autoplay: true
  };

  texts = {
    tabs: { personal: '', education: '' },
    personal: { who: '', goals: '', nationality: '', location: '', hobbies: '' },
    educationTimeline: [
      { year: '2018', title: '', description: '' },
      { year: '2023', title: '', description: '' }
    ]
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

  updateTexts(lang: string) {
    if (lang === 'en') {
      this.texts = {
        tabs: { personal: 'Personal Info', education: 'Education' },
        personal: {
          who: 'I am Katheryn, a systems engineering student passionate about digital experiences.',
          goals: 'Grow as a developer and contribute to innovative projects.',
          nationality: 'Colombian',
          location: 'Bogotá, Colombia',
          hobbies: 'I love learning languages and listening to pop and reggaeton.'
        },
        educationTimeline: [
          { year: '2018', title: 'High School', description: 'Graduated from XYZ School' },
          { year: '2023', title: 'Pontificia Universidad Javeriana', description: 'Started Systems Engineering' }
        ]
      };
    } else {
      this.texts = {
        tabs: { personal: 'Información Personal', education: 'Educación' },
        personal: {
          who: 'Soy Katheryn, estudiante de Ingeniería de Sistemas apasionada por las experiencias digitales.',
          goals: 'Crecer como desarrolladora y aportar a proyectos innovadores.',
          nationality: 'Colombiana',
          location: 'Bogotá, Colombia',
          hobbies: 'Me encanta aprender idiomas y escuchar pop y reggaetón.'
        },
        educationTimeline: [
          { year: '2018', title: 'Bachillerato', description: 'Graduada del Colegio XYZ' },
          { year: '2023', title: 'Pontificia Universidad Javeriana', description: 'Inicio de Ingeniería de Sistemas' }
        ]
      };
    }
  }
}
