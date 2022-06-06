import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder} from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';




@Component({
  selector: 'app-postad',
  templateUrl: './postad.component.html',
  styleUrls: ['./postad.component.css']
})
export class PostadComponent implements OnInit {
  postform: FormGroup;
  AppService: any;
  static find: any;
  array:any = [];
  userRecord: any = {
  name: '',
  email: '',
  phone: '',
  address: '',
  landmark: '',
  typeofprop:'',
  rent: '',
  description: '',
  upload: '',
  images:'',
 };
  data: any;
  response: any;
  formGroup: any;
  totalUseage: any;
  alluserData: any;
  alluser: any;
  empRecord: any;
 constructor(private fb: FormBuilder,private toastr: ToastrService, private api: ApiserviceService, private router:Router) {

 
  this.postform = this.fb.group({
   name: [this.userRecord.name],
   email: [this.userRecord.email],
   phone: [this.userRecord.phone],
   address: [this.userRecord.address],
   landmark: [this.userRecord.landmark],
   typeofprop: [this.userRecord.typeofprop],
   rent: [this.userRecord.rent],
   description: [this.userRecord.description],
   upload: [this.userRecord.upload],
   images: [this.userRecord.upload],

  
  });
 }

 ngOnInit(): void {
   console.log("postprop component is working")
 }
 get name() {
  return this.postform.get('name')!;
 }
 get email() {
  return this.postform.get('email')!;
 }
 get address() {
  return this.postform.get('address')!;
 }

 get phone() {
  return this.postform.get('phone')!;
 }
 get landmark() {
  return this.postform.get('landmark')!;
 }
 get typeofprop() {
  return this.postform.get('typeofprop')!;
 }
 get rent() {
  return this.postform.get('rent')!;
 }
 get description() {
  return this.postform.get('description')!;
 }
 get upload() {
  return this.postform.get('upload')!;
 }
 get images(){
   return this.postform.get('images')!;
 }

 saving(Formvalue: any) {
  const d = new Date();
   const property ={
  name: Formvalue.name,
  email: Formvalue.email,
  phone: Formvalue.phone,
  address: Formvalue.address,
  landmark: Formvalue.landmark,
  typeofprop: Formvalue.typeofprop,
  rent: Formvalue.rent,
  description: Formvalue.description,
  upload: Formvalue.upload,
  images:Formvalue.images,
  type:"property",
  createdBy:d


   }

 this.api.add("propertydb", property).subscribe((res: any) => {
  console.log(res);
  console.log('akila')
  this.postform.reset();
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
 
}, (_rej: any) => {
});

this.api.getDocsByID("propertydb","ecb83221a3496d8815d5c195441742ac").subscribe((res: any) => {
   const temp=res;
   console.log(temp);
   this.empRecord.reset();
 },(_rej: any)=>{
 });

}
}