import { Component } from '@angular/core';
import { DataService } from './data.service';
import { Data } from './data';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'school-project';
    public arrData=[]

   public neededData:Data[];
  constructor(private dataService:DataService){}

apiData=this.dataService.getData()
getData(){
  console.log("click works");
  this.dataService.getData().subscribe(data =>this.neededData=data.records)
  
  
}
showData(){
  console.log(this.neededData);
   
}
nextData(){
  console.log('next works')
  this.dataService.nextData().subscribe(data=>this.neededData=data.records)
}
pervData(){
  console.log('perv works')
  this.dataService.pervData().subscribe(data=>this.neededData=data.records)
}

}
