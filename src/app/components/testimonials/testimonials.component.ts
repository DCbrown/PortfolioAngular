import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Testimonials } from '../../models/Testimonials'

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {

  testimonials:Testimonials[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.testimonials = this.dataService.getTestimonials();
  }

}
