import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Projects } from '../../models/Projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects:Projects[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.projects = this.dataService.getProjects();
  }

}
