import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators, NgForm } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashpostprop',
  templateUrl: './dashpostprop.component.html',
  styleUrls: ['./dashpostprop.component.css']
})
export class DashpostpropComponent implements OnInit {

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
   type:"property"
 },  "sort": [
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



