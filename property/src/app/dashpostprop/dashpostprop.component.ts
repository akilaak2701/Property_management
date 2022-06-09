import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashpostprop',
  templateUrl: './dashpostprop.component.html',
  styleUrls: ['./dashpostprop.component.css']
})
export class DashpostpropComponent implements OnInit {

  array:any = [];
  allUserData: any;
 allUser: any;
 empRecord: any;
constructor(private fb: FormBuilder, private api: ApiserviceService, private router:Router) {
this.saving()

 
}

ngOnInit(): void {
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
 this.allUser=res;
 console.log(res);
 this.allUser = this.allUser.docs;
 this.allUserData = this.allUser
 console.log(this.allUserData[0]);
 for (const array in this.allUserData) {
   console.log(this.allUserData[array])
 }
 
}, (rej: any) => {
 alert("opps! Can not post data" + rej);
});

}
}



