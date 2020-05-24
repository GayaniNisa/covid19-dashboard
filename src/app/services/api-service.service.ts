import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataCovid{
  constructor(public data:Data,public message:string,public success:boolean){

  }
}
export class Data{
  constructor(public update_date_time:Date,public local_new_cases:number,public local_total_cases:number,public local_total_number_of_individuals_in_hospitals:number,public local_deaths:number,public local_new_deaths:number,public local_recovered:number,public local_active_cases:number,public global_new_cases:number,public global_total_cases:number,public global_deaths:number,public global_new_deaths:number,public global_recovered:number,public total_pcr_testing_count:number,public daily_pcr_testing_data:PCR,public hospital_data:HospitalDetails){

  }
}

export class PCR{
  constructor(public date:Date,public count:number){}
}

export class HospitalDetails{
  constructor(public id:number,public hospital_id:number,public cumulative_local:number,public cumulative_foreign:number,public treatment_local:number,public treatment_foreign:number,public created_at:Date,public updated_at:Date,public deleted_at:Date,public cumulative_total:number,public treatment_total:number,public hospital:Hospital){

  }
}
export class Hospital{
  constructor(public id:number,public name:string,public name_si:string,public name_ta:string,public created_at:Date,public updated_at:Date,public deleted_at:Date){

  }
}
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http:HttpClient) { }

  getCovidUpdates(){
    return this.http.get<DataCovid>('https://www.hpb.health.gov.lk/api/get-current-statistical')
  }
}
