import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  z=10
  constructor(private router:Router) { }

  ngOnInit() {
  }

  navigatedashboard(){
    this.router.navigate(['/dashboard'])
  }

}
