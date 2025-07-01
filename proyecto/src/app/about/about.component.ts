import { Component, OnInit, OnDestroy } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnDestroy {
  language: string = 'es';
  languageSubscription!: Subscription;

  texts = {
    hi: '',
    student: '',
    description: '',
    follow: '',
    projects: '',
    certifications: '',
    statsTitle: '',
    stat1: '',
    stat2: '',
    stat3: '',
    stat4: ''
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
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
  }

  private updateTexts(lang: string) {
    if (lang === 'en') {
      this.texts = {
        hi: "Hi, I'm Katheryn Guasca",
        student: 'Systems Engineering Student',
        description: 'I build responsive and interactive web applications. I am willing to learn independently and continuously improve.',
        follow: 'Follow me:',
        projects: 'Download my CV',
        certifications: 'Explore my certifications',
        statsTitle: 'Quick Stats',
        stat1: '+5 personal projects',
        stat2: 'Spanish, English, French',
        stat3: '+10 completed courses',
        stat4: 'Angular, Java, Spring, C++'
      };
    } else {
      this.texts = {
        hi: 'Hola, soy Katheryn Guasca',
        student: 'Estudiante de Ingeniería de Sistemas',
        description: 'Yo construyo aplicaciones web responsivas e interactivas. Estoy dispuesta a aprender de forma autónoma y mejorar continuamente.',
        follow: 'Sígueme:',
        projects: 'Descarga mi hoja de vida',
        certifications: 'Explora mis certificaciones',
        statsTitle: 'Estadísticas Rápidas',
        stat1: '+5 proyectos personales',
        stat2: 'Español, Inglés, Francés',
        stat3: '+10 cursos completados',
        stat4: 'Angular, Java, Spring, C++'
      };
    }
  }
}
