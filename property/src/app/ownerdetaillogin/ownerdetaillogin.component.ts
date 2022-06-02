import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { HttpserviceService } from '../httpservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ownerdetaillogin',
  templateUrl: './ownerdetaillogin.component.html',
  styleUrls: ['./ownerdetaillogin.component.css']
})
export class OwnerdetailloginComponent implements OnInit {
  successMessage:string ="";
  loginForm!: FormGroup; 
  constructor(private fb: FormBuilder,private api:HttpserviceService, private router:Router) { }
 ngOnInit(): void {
  this.loginForm = this.fb.group({
   email:['',[Validators.required, Validators.pattern("[A-Za-z0-9]*@gmail.com")]],
   password:['',[Validators.required,Validators.pattern("[A-Za-z0-9@!_]{6,}")]]
  })
 }
 
 login(Formvalue:any){
     console.log(Formvalue.Email);
     this.api.test_get(Formvalue.Email).subscribe((data)=>{
       console.log(data["docs"][0])
     console.log("data returned from server",data["docs"][0].Email);
 
     if(data.docs[0].Email == Formvalue.Email){
         alert("data verified");
     }
 });
 
 }
 }
 