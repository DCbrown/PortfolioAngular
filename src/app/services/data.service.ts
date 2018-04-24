import { Injectable } from '@angular/core';
import { Projects } from '../models/Projects';

@Injectable()
export class DataService {

  projects: Projects[];

  constructor() { 
    this.projects = [
      { id: 1, 
        title: 'Motivational Q', 
        img:'../../assets/img/MotiQ.png', 
        description:'Random motivational quote generator that produces a random quote form a list of different inspirational quotes, Users can Tweet out their favorite quotes. Developed  with HTML, CSS , jQuery, JavaScript and Twitter Bootstrap.',  
        subject:'Web Development', 
        liveLink:'http://dcbrown.github.io/MotivationalQ/', 
        gitHubLink: ''
      },
      { id: 2, 
        title: 'Sentence 2', 
        img:'../../assets/img/KISS.png', 
        description:'', 
        subject:'', 
        liveLink:'http://dcbrown.github.io/MotivationalQ/', 
        gitHubLink:''
      },
      { id: 3, 
        title: 'Sentence 3', 
        img:'../../assets/img/WebDev.png', 
        description:'', 
        subject:'', 
        liveLink:'', 
        gitHubLink:''
      },
      { id: 4, 
        title: 'Sentenc 4',  
        img:'../../assets/img/4Pints.png', 
        description:'', 
        subject:'', 
        liveLink:'', 
        gitHubLink:''
      },
      { id: 5, 
        title: 'Sentenc 4',  
        img:'../../assets/img/AlexaTheme.png', 
        description:'', 
        subject:'', 
        liveLink:'', 
        gitHubLink:''
      },
      { id: 6, 
        title: 'Sentenc 4',  
        img:'../../assets/img/BootstrapWWordPress.png', 
        description:'', 
        subject:'', 
        liveLink:'', 
        gitHubLink:''
      }
    ]  

  }

  getProjects(): Projects[]{
    console.log('get data');
    return this.projects;
  }



}
