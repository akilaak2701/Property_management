import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';

 
@Component({
  selector: 'app-rentalapplication',
  templateUrl: './rentalapplication.component.html',
  styleUrls: ['./rentalapplication.component.css']
})
export class RentalapplicationComponent implements OnInit {

  successMessage:string ="";
  applicationform!: FormGroup; 
  constructor(private fb: FormBuilder) { }
 ngOnInit(): void {
  this.applicationform = this.fb.group({
    name:['',[Validators.required]],
   email:['',[Validators.required, Validators.pattern("[A-Za-z0-9]*@gmail.com")]],
  age:['',[Validators.required]],
  phone:['',[Validators.required]],
  tenant:['',[Validators.required]],
  address:['',[Validators.required]],
  occupation:['',[Validators.required]],
  annualincome:['',[Validators.required]],
  gender:['',[Validators.required]],
  marital:['',[Validators.required]],
  })
 }
 
 application(){
  this.successMessage="Application Request Sent.."
 }
 
 }
