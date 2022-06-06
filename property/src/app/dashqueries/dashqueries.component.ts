import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashqueries',
  templateUrl: './dashqueries.component.html',
  styleUrls: ['./dashqueries.component.css']
})
export class DashqueriesComponent implements OnInit {

  array:any = [];
   alluserData: any;
  alluser: any;
  empRecord: any;
 constructor(private fb: FormBuilder, private api: ApiserviceService, private router:Router) {
this.saving()
 
  
 }

 ngOnInit(): void {
   console.log("sonar");
 }
   
 saving() {
  
let data={
  selector:{
    type:"contact"
  },
  "sort": [
    {
       "createdBy": "desc"
    }
 ]

}



this.api.get(data).subscribe((res: any) => {
  this.alluser=res;
  console.log(res);
  this.alluser = this.alluser.docs;
  this.alluserData = this.alluser
  console.log(this.alluserData[0]);
  for (const array in this.alluserData) {
    console.log(this.alluserData[array])
  }
  
}, (rej: any) => {
  alert("opps! Can not post data" + rej);
});

}
}



