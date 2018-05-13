import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { People } from '../../models/People';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  people:People[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.people = this.dataService.getPeople();
  }

  

}
