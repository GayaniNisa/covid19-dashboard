import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-details-hospitals',
  templateUrl: './details-hospitals.component.html',
  styleUrls: ['./details-hospitals.component.css']
})
export class DetailsHospitalsComponent implements OnInit {

  
  hostpitalList
  constructor(private serviceAPI: ApiServiceService) {
    this.serviceAPI.getCovidUpdates().subscribe(
      data => {
        this.hostpitalList = data.data.hospital_data
      }
    )
  }

  ngOnInit() {
  }

}
