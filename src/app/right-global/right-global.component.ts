import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-right-global',
  templateUrl: './right-global.component.html',
  styleUrls: ['./right-global.component.css']
})
export class RightGlobalComponent implements OnInit {

  globaltotalcases
  globaldeaths
  globalrecovered
  globalnewcases
  globalnewdeaths
  globalactive
  constructor(private serviceAPI: ApiServiceService) {
    this.serviceAPI.getCovidUpdates().subscribe(
      data => {
        this.globaltotalcases=data.data.global_total_cases
        this.globaldeaths=data.data.global_deaths
        this.globalrecovered=data.data.global_recovered
        this.globalnewcases=data.data.global_new_cases
        this.globalnewdeaths=data.data.global_new_deaths
      }
    )
  }

  ngOnInit() {
  }

}
