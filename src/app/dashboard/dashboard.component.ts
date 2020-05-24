import { Component, OnInit, Injectable } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  apiData
  local=true
  global=false
  testing=false
  details=false
  updateDate


  constructor(private api_service:ApiServiceService) { 
    this.api_service.getCovidUpdates().subscribe(
      data=>{
        this.apiData=data
        this.updateDate=data.data.update_date_time
      }
    )
    
  }
  initial(){
    this.local=false
    this.global=false
    this.testing=false
    this.details=false
  }

  ngOnInit() {
  }

  getLocal(){
    this.initial()
    this.local=true
  }
  getGlobal(){
    this.initial()
    this.global=true
  }
  getTesting(){
    this.initial()
    this.testing=true
  }

  getDetails(){
    this.initial()
    this.details=true
  }

}
