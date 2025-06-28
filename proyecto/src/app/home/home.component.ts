import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isDarkTheme = false;
  lang: 'es' | 'en' = 'es';

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
  }

  switchLang(language: 'es' | 'en') {
    this.lang = language;
  }
}
