import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Projects } from '../../models/Projects';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  project:Projects[];
  private id;
  sub:any;

  constructor(private dataService: DataService, 
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
    });
  }

  private ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
