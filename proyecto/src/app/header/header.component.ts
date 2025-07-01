import { Component } from '@angular/core';
import { LanguageService } from '../services/language.service'; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuOpen = false;
  language = 'es';

  navTexts = {
    inicio: 'Inicio',
    sobreMi: 'Sobre mí',
    proyectos: 'Proyectos',
    contacto: 'Contacto',
    habilidades: 'Habilidades'
  };

  constructor(private languageService: LanguageService) {}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  changeLanguage(event: Event) {
    const selectEl = event.target as HTMLSelectElement;
    const lang = selectEl.value;

    this.language = lang;
    this.languageService.setLanguage(lang);

    this.updateNavTexts(lang);
  }

  private updateNavTexts(lang: string) {
    if (lang === 'en') {
      this.navTexts = {
        inicio: 'Home',
        sobreMi: 'About me',
        proyectos: 'Projects',
        contacto: 'Contact',
        habilidades: 'Skills'
      };
    } else {
      this.navTexts = {
        inicio: 'Inicio',
        sobreMi: 'Sobre mí',
        proyectos: 'Proyectos',
        contacto: 'Contacto',
        habilidades: 'Habilidades'
      };
    }
  }
}
