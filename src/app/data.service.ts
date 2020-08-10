import { Injectable } from '@angular/core';
import{HttpClient, HttpParams, HttpHeaders} from '@angular/common/http'
import{Data} from './data'
import{RootObject} from './data'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})



export class DataService {

  constructor(private http :HttpClient) { }
 //public apiUrl="https://api.data.gov.in/resource/3b01bcb8-0b14-4abf-b6f2-c1bfd384ba69?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json&offset=3&limit=20"
  
 public apiUrl="https://api.data.gov.in/resource/3b01bcb8-0b14-4abf-b6f2-c1bfd384ba69"
  
public off:number=0;

 getData():Observable<RootObject>{
this.off=0
 
  let param = new HttpParams()
          .set('api-key', '579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b')
          .append('format','json')
          .append('offset', '0')
          .append('limit','10')
  
   return this.http.get<RootObject>(this.apiUrl,{params:param})
  }

  nextData(){
    this.off=this.off +10
    let param1 = new HttpParams()
    .set('api-key', '579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b')
    .append('format','json')
    .append('offset', this.off.toString())
    .append('limit','10')

return this.http.get<RootObject>(this.apiUrl,{params:param1})
  }

  pervData(){
    this.off=this.off -10
    let param1 = new HttpParams()
    .set('api-key', '579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b')
    .append('format','json')
    .append('offset', this.off.toString())
    .append('limit','10')

return this.http.get<RootObject>(this.apiUrl,{params:param1})
  }
}
