import { Component, ElementRef, AfterViewInit, Renderer2, OnDestroy } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements AfterViewInit, OnDestroy {
  language: string = 'es';
  languageSubscription!: Subscription;
  observer!: IntersectionObserver;


  skills = [
    {
      name: 'ReactJS',
      level: 60,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    },
    {
      name: 'HTML5',
      level: 80,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
    },
    {
      name: 'CSS3',
      level: 70,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
    },
    {
      name: 'JavaScript',
      level: 78,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
    },
    {
      name: 'Java',
      level: 85,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
    },
    {
      name: 'Angular',
      level: 75,
      icon: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg'
    },
    {
      name: 'MySQL',
      level: 70,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
    }
  ];

  texts = {
    skillsIntro: '',
    programmingSkills: '',
    otherSkills: '',
    softSkills: [] as { title: string; description: string; icon: string }[]
  };

  constructor(private languageService: LanguageService, private elRef: ElementRef, private renderer: Renderer2) {}


    ngAfterViewInit(): void {
      this.observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.renderer.addClass(entry.target, 'animate');
            this.observer.unobserve(entry.target); // Solo animar una vez
          }
        });
      }, { threshold: 0.3 });

      const elements = this.elRef.nativeElement.querySelectorAll('.progress-fill');
      elements.forEach((el: Element) => this.observer.observe(el));
    }

  ngOnInit(): void {
    this.languageSubscription = this.languageService.language$.subscribe(lang => {
      this.language = lang;
      this.updateTexts(lang);
    });

    this.updateTexts(this.languageService.getLanguage());
  }

  ngOnDestroy(): void {
    this.languageSubscription?.unsubscribe();
  }

  private updateTexts(lang: string): void {
    if (lang === 'en') {
      this.texts = {
        skillsIntro: "I'm a 6th-semester Systems Engineering student with a strong passion for self-learning and exploring new technologies.",
        programmingSkills: "Programming/Library Skills",
        otherSkills: "Other Skills",
        softSkills: [
          {
            title: "Software Applications",
            description: "Experience with Microsoft 365 and professional collaboration and documentation tools.",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg"
          },
          {
            title: "Version Control & Containers",
            description: "Proficient with Git, GitHub, and Docker for collaborative development and virtualized environments.",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
          },
          {
            title: "Self-Learning Skills",
            description: "Ability to independently learn and apply technologies like SAP, R, and cloud-based solutions.",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
          }
        ]
      };
    } else {
      this.texts = {
        skillsIntro: "Soy estudiante de sexto semestre de Ingeniería de Sistemas con una gran pasión por el aprendizaje autónomo y la exploración de nuevas tecnologías.",
        programmingSkills: "Habilidades en Programación/Bibliotecas",
        otherSkills: "Otras Habilidades",
        softSkills: [
          {
            title: "Aplicaciones de software",
            description: "Experiencia en Microsoft 365, herramientas de colaboración y documentación profesional.",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg"
          },
          {
            title: "Control de versiones y contenedores",
            description: "Manejo de Git, GitHub y Docker para proyectos colaborativos y entornos virtualizados.",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
          },
          {
            title: "Aprendizaje autónomo",
            description: "Capacidad para aprender nuevas tecnologías como SAP, R y soluciones Cloud de forma independiente y aplicada.",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
          }
        ]
      };
    }
  }
}
