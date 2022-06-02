import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {

  successMessage:string ="";
  maintananceform!: FormGroup; 
  constructor(private fb: FormBuilder) { }
 ngOnInit(): void {
  this.maintananceform = this.fb.group({
    name:['',[Validators.required]],
   email:['',[Validators.required, Validators.pattern("[A-Za-z0-9]*@gmail.com")]],
   password:['',[Validators.required,Validators.pattern("[A-Za-z0-9@!_]{6,}")]],
   addressform:['',[Validators.required]],
   problem:['',[Validators.required]],

  })
 }
 
 maintanance(){
  this.successMessage="Maintanance Request Sent.."
 }
 
 }