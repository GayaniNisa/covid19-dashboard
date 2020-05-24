import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-right-pcr',
  templateUrl: './right-pcr.component.html',
  styleUrls: ['./right-pcr.component.css']
})
export class RightPcrComponent implements OnInit {

  pcrcount
  pcrList
  constructor(private serviceAPI: ApiServiceService) {
    this.serviceAPI.getCovidUpdates().subscribe(
      data => {
        this.pcrcount = data.data.total_pcr_testing_count
        this.pcrList = data.data.daily_pcr_testing_data
      }
    )
  }

  ngOnInit() {
    
  }
}


