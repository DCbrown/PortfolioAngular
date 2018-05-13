import { Injectable } from '@angular/core';
import { Projects } from '../models/Projects';
import { Testimonials } from '../models/Testimonials';
import { People } from '../models/People';
import { Courses } from '../models/Courses';
import { Tools } from '../models/Tools';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Post } from '../models/Project';

@Injectable()
export class DataService {

  projects: Projects[];
  testimonials: Testimonials[];
  people: People[];
  courses: Courses[];
  tools:Tools[];

  showProjects = [];

  getImages(){
      return this.showProjects = this.projects.slice(0);
  }

  getImage(id: number){
      return this.projects.slice(0).find(project => project.id == id)
  }

  constructor() { 
    this.projects = [
      { id: 1, 
        title: 'Motivational Q', 
        img:'../../assets/img/MotiQ.png', 
        description:'Random motivational quote generator that produces a random quote form a list of different inspirational quotes, Users can Tweet out their favorite quotes. Developed  with HTML, CSS , jQuery, JavaScript and Twitter Bootstrap.',  
        subject:'Web', 
        liveLink:'http://dcbrown.github.io/MotivationalQ/', 
        gitHubLink: 'https://github.com/DCbrown/MotivationalQ'
      },
      { id: 2, 
        title: 'KISS@ RE-DESIGN', 
        img:'../../assets/img/KISS.png', 
        description:`A responsive re-design of the <a href="https://sites.google.com/site/kissatisat/" target="_blank">KISS@</a> website, a library of various information and topics about business technology and best security practices I developed for a Client. Using HTML, CSS, JavaScript, PHP, Media Queries, Twitter Bootstrap and CSS minify.`, 
        subject:'Web', 
        liveLink:'http://dcbrown.github.io/KISSFinal/index.html', 
        gitHubLink:'https://github.com/DCbrown/KISSFinal'
      },
      { id: 3, 
        title: 'WebDevQuiz', 
        img:'../../assets/img/WebDev.png', 
        description:'A responsive splash page of my Android app made with HTML, CSS, JavaScript, jQuery and Bootstrap with a link to the Android app quiz developed in Android Studio based on the technologies of web development, test your web skills on this multiple choice test, Current Version 1.5.', 
        subject:'Web Android', 
        liveLink:'http://dcbrown.github.io/WebDevQuizVer1.5Landing_Page/', 
        gitHubLink:'https://github.com/DCbrown/WebDevQuizVer1.5Landing_Page'
      },
      { id: 4, 
        title: '4 Pints Production',  
        img:'../../assets/img/4Pints.png', 
        description:'A prototype one-page responsive website I developed for my buddy’s independent production company based in Royal Oak Michigan. Using HTML, CSS, JavaScript, PHP, Media Queries and Twitter Bootstrap. (As of November 2014, 4 Pints Productions is no longer in business).', 
        subject:'Web', 
        liveLink:'http://dcbrown.github.io/4PintsProductions/', 
        gitHubLink:'https://github.com/DCbrown/4PintsProductions'
      },
      { id: 5, 
        title: 'Bootstrap Alexa Theme',  
        img:'../../assets/img/AlexaTheme.png', 
        description:'Developed a single page Bootstrap Theme featuring Amazon’s Alexa that uses JavaScript and Query Animations. Using HTML, CSS, jQuery, Bootstrap and the ScrollRevealjs JavaScript library.', 
        subject:'Web', 
        liveLink:'https://dcbrown.github.io/Bootstrap_Alexa_Theme/', 
        gitHubLink:'https://github.com/DCbrown/Bootstrap_Alexa_Theme'
      },
      { id: 6, 
        title: 'Bootstrap WordPress Theme',  
        img:'../../assets/img/BootstrapWWordPress.png', 
        description:'A custom WordPress theme with Bootstrap using WordPress, HTML, CSS, PHP and Twitter Boootstrap.', 
        subject:'Web', 
        liveLink:'http://wordpresswbootstrap-com.stackstaging.com/', 
        gitHubLink:false
      },
      { id: 7, 
        title: 'Onett Web Solutions',  
        img:'../../assets/img/Onett.png', 
        description:'Designed and Developed a fictional single page Digital Agency with a link scroll feature using HTML, CSS, jQuery, Bootstrap.', 
        subject:'Web', 
        liveLink:'https://dcbrown.github.io/Onett-Web-Solutions/', 
        gitHubLink:'https://github.com/DCbrown/Onett-Web-Solutions'
      },
      { id: 8, 
        title: 'CV Resume',  
        img:'../../assets/img/ResumeApp.png', 
        description:'Developed a single page Bootstrap Theme featuring Amazon’s Alexa that uses JavaScript and Query Animations. Using HTML, CSS, jQuery, Bootstrap and the ScrollRevealjs JavaScript library.', 
        subject:'Web', 
        liveLink: false, 
        gitHubLink:'https://dcbrown.github.io/Bootstrap_Alexa_Theme/'
      },
      { id: 9, 
        title: 'Employee Registration',  
        img:'../../assets/img/employee.png', 
        description:'Developed a employee based CURD (Create, Read, Update, Delete) application where you can add, input, edit, and delete employment data. View employee data in a table format with page based navigation listing 10 employees per page storing data using Firebase developed with: HTML, CSS, JavaScript, TypeScript, Angular, NodeJS, Angular CLI, Font-Awesome, Bootstrap, and Firebase.', 
        subject:'Web', 
        liveLink:false, 
        gitHubLink:'https://github.com/DCbrown/Angular-Firebase-CRUD'
      }
    ]  

    this.testimonials = [
      {
        id:1,
        img:'../../assets/people/phill.png',
        qoute:'Not only did Donovan do a stellar job a great website for my small business, he also designed a great looking logo for my business as well. Donovan developed and designed this project fairly quickly while keeping me up to date with the website’s progression. I definitely recommend working with Donovan to anyone I know who needs a website.',
        name:'Phil Asare',
        company:'Founder of Asare.INC'
      },
      {
        id:2,
        img:'../../assets/people/russ.jpg',
        qoute:'Donovan is very easy to work with and is very professional, engaging to drive results and can quickly adapt to change for our independent production company website needs. I love our website and its flexible structure that users can view our website on various mobile devices. I am pleased to have Donovan on our team as our Web Developer.',
        name:'Russell Balow',
        company:'Co-Founder of 4 Pints Productions'
      },
      {
        id:3,
        img:'../../assets/people/terrance.jpg',
        qoute:'I just love my new Website that Donovan re-designed and developed for me. Donovan demonstrates good client communication by keeping me updated during the re-design and development process and has the ability to deliver results.',
        name:'Terrance R. Campbell',
        company:'Deputy Director of Your Center and Creative Coordinator of the KISS@ project'
      },
    ]

    this.people = [
      {
        id:1,
        img:'../../assets/people/kyle-prinsloo.jpg',
        name:'Kyle Prinsloo',
        website:'https://studywebdevelopment.com',
        twitter:'https://twitter.com/study_web_dev',
        youtube:'https://www.youtube.com/kyleprinsloo?sub_confirmation=1',
        instagram:'https://www.instagram.com/studywebdevelopment/',
      },
      {
        id:2,
        img:'../../assets/people/kyle-prinsloo.jpg',
        name:'Laurence Bradford',
        website:'https://learntocodewith.me/',
        twitter:'https://twitter.com/learncodewithme',
        youtube:'',
        instagram:'',
      },
      {
        id:3,
        img:'../../assets/people/kyle-prinsloo.jpg',
        name:'Coding Commanders',
        website:'http://www.codingcommanders.com/',
        twitter:'https://twitter.com/codingCommander',
        youtube:'https://www.instagram.com/codingcommanders/',
        instagram:'https://www.youtube.com/channel/UC-gCUMK_EGUqJ7P9VA7BJmQ',
      },
      {
        id:4,
        img:'../../assets/people/kyle-prinsloo.jpg',
        name:'Real Tough Candy',
        website:'https://realtoughcandy.github.io/Portfolio/',
        twitter:'https://twitter.com/realtoughcandy',
        youtube:'https://www.youtube.com/channel/UC54NcJvLCvM2CNaBjd5j6HA',
        instagram:'',
      },
      {
        id:5,
        img:'../../assets/people/kyle-prinsloo.jpg',
        name:'Chris Sean',
        website:'',
        twitter:'https://twitter.com/RealChrisSean',
        youtube:'https://www.youtube.com/channel/UCu1xbgCV5o48h_BYCQD7KJg/videos',
        instagram:'https://www.instagram.com/RealChrisSean/',
      },
      {
        id:6,
        img:'../../assets/people/kyle-prinsloo.jpg',
        name:'Coding Phase',
        website:'http://www.codingphase.com/',
        twitter:'https://twitter.com/codingphase',
        youtube:'https://www.youtube.com/CodingPhase',
        instagram:'https://www.instagram.com/codingphase/',
      },
      {
        id:7,
        img:'../../assets/people/kyle-prinsloo.jpg',
        name:'Traversy Media',
        website:'https://www.traversymedia.com/',
        twitter:'http://www.twitter.com/traversymedia',
        youtube:'https://www.youtube.com/user/TechGuyWeb',
        instagram:'http://www.instagram.com/traversymedia',
      },
      {
        id:8,
        img:'../../assets/people/kyle-prinsloo.jpg',
        name:'Aaron in Beta',
        website:'',
        twitter:'https://twitter.com/937aaron',
        youtube:'https://www.youtube.com/channel/UCXym52jGe7cb5deJRWM3paw',
        instagram:'https://www.instagram.com/937aaron/',
      },
      {
        id:9,
        img:'../../assets/people/kyle-prinsloo.jpg',
        name:'Stefan Mischook',
        website:'https://www.killersites.com/',
        twitter:'https://twitter.com/killersites',
        youtube:'https://www.youtube.com/user/killerphp',
        instagram:'https://www.instagram.com/stefanmischook/?hl=en',
      },
      {
        id:10,
        img:'../../assets/people/kyle-prinsloo.jpg',
        name:'Coding Connections',
        website:'',
        twitter:'https://twitter.com/CodingConnectio',
        youtube:'https://t.co/PIYRJmsA02',
        instagram:'',
      },
    ]
  }

  getProjects(): Projects[]{
    return this.projects;
  }

  getTestimonials(): Testimonials[]{
    return this.testimonials;
  }

  getPeople(): People[]{
    return this.people;
  }

}
