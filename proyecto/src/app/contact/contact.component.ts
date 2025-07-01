import { Component, OnInit, OnDestroy } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { Subscription } from 'rxjs';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnDestroy {
  language: string = 'es';
  languageSubscription!: Subscription;

  contact = {
    name: '',
    email: '',
    message: ''
  };

  texts = {
    title: '',
    namePlaceholder: '',
    emailPlaceholder: '',
    messagePlaceholder: '',
    button: '',
    cards: [
      { icon: 'fab fa-github', title: '', subtitle: '' },
      { icon: 'fas fa-phone-alt', title: '', subtitle: '' },
      { icon: 'fab fa-instagram', title: '', subtitle: '' },
      { icon: 'fas fa-envelope', title: '', subtitle: '' }
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
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
  }

  sendMessage() {
    const templateParams = {
      name: this.contact.name,     
      title: this.contact.email,     
      message: this.contact.message   
    };

    emailjs.send('service_c6qnibg', 'template_1yuygs8', templateParams, 'z4-ZZOYLGUkLzk0ph')
      .then((response: EmailJSResponseStatus) => {
        alert(this.language === 'en' ? 'Message sent successfully! ✨' : '¡Mensaje enviado con éxito! ✨');
        this.contact = { name: '', email: '', message: '' };
      }, (error) => {
        console.error('EmailJS Error:', error);
        alert(this.language === 'en' ? 'Something went wrong. Please try again.' : 'Hubo un error. Intenta nuevamente.');
      });
  }

  private updateTexts(lang: string) {
    if (lang === 'en') {
      this.texts = {
        title: 'Contact Me',
        namePlaceholder: 'Name',
        emailPlaceholder: 'Email',
        messagePlaceholder: 'Message',
        button: 'Send',
        cards: [
          { icon: 'fab fa-github', title: 'GitHub', subtitle: 'Explore my code & projects' },
          { icon: 'fas fa-phone-alt', title: 'Phone', subtitle: '+57 301 344 2915' },
          { icon: 'fab fa-instagram', title: 'Instagram', subtitle: 'My visual journal & life updates' },
          { icon: 'fas fa-envelope', title: 'Email', subtitle: 'katheryng2017@gmail.com' }
        ]
      };
    } else {
      this.texts = {
        title: 'Contáctame',
        namePlaceholder: 'Nombre',
        emailPlaceholder: 'Correo electrónico',
        messagePlaceholder: 'Mensaje',
        button: 'Enviar',
        cards: [
          { icon: 'fab fa-github', title: 'GitHub', subtitle: 'Explora mis proyectos' },
          { icon: 'fas fa-phone-alt', title: 'Teléfono', subtitle: '+57 301 344 2915' },
          { icon: 'fab fa-instagram', title: 'Instagram', subtitle: 'Mi diario visual y actualizaciones' },
          { icon: 'fas fa-envelope', title: 'Correo', subtitle: 'katheryng2017@gmail.com' }
        ]
      };
    }
  }
}
