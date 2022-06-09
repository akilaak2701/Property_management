import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
 contactForm:FormGroup;
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
  allUserData: any;
  allUser: any;
  empRecord: any;
 

  constructor(private fb: FormBuilder, private api: ApiserviceService, private router:Router,private toastr:ToastrService ) {
    this.contactForm = this.fb.group({
      name: [this.userRecord.name],
      email: [this.userRecord.email],
      message: [this.userRecord.message],
    })
  }

  ngOnInit(): void {
   console.log("contact component is working")

  }
  get name() {
    return this.contactForm.get('name')!;
   }
   get email() {
    return this.contactForm.get('email')!;
   }
   get message() {
    return this.contactForm.get('message')!;
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
  this.contactForm.reset();
}, (rej: any) => {
  this.toastr.error(rej.error.reason);

});
this.api.get("propertydb").subscribe((res: any) => {
  this.router.navigate(['dashpost'])
  this.allUser=res;
  console.log(res);
  this.allUser = this.allUser.rows;
  this.allUserData = this.allUser.map((el: any)=>el.doc);
  console.log(this.allUserData[0]);
  for (const array in this.allUserData) {
    console.log(this.allUserData[array])
  }
  this.toastr.success("data posted","success");
  
}, (_rej: any) => {
  console.log("sonar");

});
this.api.getDocsByID("propertydb","ecb83221a3496d8815d5c195441742ac").subscribe((res: any) => {
   const temp=res;
   console.log(temp);
   this.empRecord.reset();
 },(_rej: any)=>{
   console.log("sonar");
 });

}
}