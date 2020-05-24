import { Component, OnInit } from '@angular/core';
import { DataCovid, ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-right-local',
  templateUrl: './right-local.component.html',
  styleUrls: ['./right-local.component.css']
})
export class RightLocalComponent implements OnInit {

  localtotalcases
  localdeaths
  localrecovered
  localnewcases
  localnewdeaths
  localactive
  constructor(private serviceAPI: ApiServiceService) {
    this.serviceAPI.getCovidUpdates().subscribe(
      data => {
        this.localtotalcases=data.data.local_total_cases
        this.localdeaths=data.data.local_deaths
        this.localrecovered=data.data.local_recovered
        this.localactive=data.data.local_active_cases
        this.localnewcases=data.data.local_new_cases
        this.localnewdeaths=data.data.local_new_deaths
      }
    )
  }

  ngOnInit() {
  }

}
