import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
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
      level: 70,
      icon: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg'
    },
    {
      name: 'MySQL',
      level: 70,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
    }
  ];


  texts = {
  skillsIntro: "I'm a recent graduate and aspiring web developer with a strong desire to broaden my technological knowledge and a keen interest in crafting both visually appealing designs and seamless website functionality.",
  programmingSkills: "Programming/Library Skills",
  otherSkills: "Other Skills",
  softSkills: [
    {
      title: "Software Applications",
      description: "Microsoft 365, Photoshop, Illustrator, and more for job-ready efficiency."
    },
    {
      title: "Software Troubleshoot",
      description: "Diagnose and resolve software-related issues on Windows systems."
    },
    {
      title: "Hardware Troubleshoot",
      description: "Detect and solve hardware-related problems for performance assurance."
    },
    {
      title: "Networking",
      description: "Basic knowledge of IP addressing, subnetting, and simple networking tasks."
    }
  ]
};

}

