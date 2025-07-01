import { Component, OnInit, OnDestroy } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnDestroy {
  year: number = new Date().getFullYear();
  language: string = 'es';
  languageSubscription!: Subscription;

  texts = {
    about: '',
    aboutDescription: '',
    navigation: '',
    links: {
      home: '',
      about: '',
      skills: '',
      projects: '',
      contact: ''
    }
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
        about: 'Katheryn Guasca',
        aboutDescription: 'Systems Engineering student focused on web development and emerging technologies.',
        navigation: 'Navigation',
        links: {
          home: 'Home',
          about: 'About Me',
          skills: 'Skills',
          projects: 'Projects',
          contact: 'Contact'
        }
      };
    } else {
      this.texts = {
        about: 'Katheryn Guasca',
        aboutDescription: 'Estudiante de Ingeniería de Sistemas enfocada en desarrollo web y tecnologías emergentes.',
        navigation: 'Navegación',
        links: {
          home: 'Inicio',
          about: 'Sobre mí',
          skills: 'Habilidades',
          projects: 'Proyectos',
          contact: 'Contacto'
        }
      };
    }
  }
}
