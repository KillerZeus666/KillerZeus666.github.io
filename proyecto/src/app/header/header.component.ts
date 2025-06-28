// header.component.ts
import { Component } from '@angular/core';

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
    contacto: 'Contacto'
  };

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  changeLanguage(event: Event) {
    // Convertimos el target a <select>
    const selectEl = event.target as HTMLSelectElement;
    const lang = selectEl.value;

    this.language = lang;

    if (lang === 'en') {
      this.navTexts = {
        inicio: 'Home',
        sobreMi: 'About me',
        proyectos: 'Projects',
        contacto: 'Contact'
      };
    } else {
      this.navTexts = {
        inicio: 'Inicio',
        sobreMi: 'Sobre mí',
        proyectos: 'Proyectos',
        contacto: 'Contacto'
      };
    }
  }
}
