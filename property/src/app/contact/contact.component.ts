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
 this.api.add("propertydb", contact).subscribe(
  (res) => {
    console.log("response",res);
    if(res)
    {
    this.toastr.success('posted successfully');
    this.contactForm.reset();
    }
    else{
      this.toastr.error('failed to post');
    }
  }
);



}
}
