import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators, NgForm } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
 contactform:FormGroup;
 AppService:any;
 static find: any;
 array:any = [];
 userRecord:any={
   name:'',
   email:'',
   message:'',
 };
  data:any;
  response:any;
  formGroup: any;
  totalUseage: any;
  alluserData: any;
  alluser: any;
  empRecord: any;
 

  constructor(private fb: FormBuilder, private api: ApiserviceService, private router:Router,private toastr:ToastrService ) {
    this.contactform = this.fb.group({
      name: [this.userRecord.name],
      email: [this.userRecord.email],
      message: [this.userRecord.message],
    })
  }

  ngOnInit(): void {
   console.log("contact component is working")

  }
  get name() {
    return this.contactform.get('name')!;
   }
   get email() {
    return this.contactform.get('email')!;
   }
   get message() {
    return this.contactform.get('message')!;
   }

saving(Formvalue: any) {
  const d = new Date();
  const contact ={
 name: Formvalue.name,
 email: Formvalue.email,
 message: Formvalue.message,
 type:"contact",
 createdBy:d
  }
 this.api.add("propertydb", contact).subscribe((res: any) => {
  console.log(res);
  console.log('akila')
  this.contactform.reset();
}, (rej: any) => {
  this.toastr.error(rej.error.reason);

});
this.api.get("propertydb").subscribe((res: any) => {
  this.router.navigate(['dashpost'])
  this.alluser=res;
  console.log(res);
  this.alluser = this.alluser.rows;
  this.alluserData = this.alluser.map((el: any)=>el.doc);
  console.log(this.alluserData[0]);
  for (const array in this.alluserData) {
    console.log(this.alluserData[array])
  }
  this.toastr.success("data posted","success");
  
}, (rej: any) => {

});
this.api.getDocsByID("propertydb","ecb83221a3496d8815d5c195441742ac").subscribe((res: any) => {
   var temp=res;
   console.log(temp);
   this.empRecord.reset();
 },(rej: any)=>{
 });

}
}