import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators} from '@angular/forms';
import { Api1serviceService } from '../api1service.service';
import { HttpClient} from '@angular/common/http';  

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
  successMessage:string ="";
  loginForm!: FormGroup; 
  constructor(private fb:FormBuilder,private signup:Api1serviceService, private http:HttpClient) { 


  }

  ngOnInit(): void {
   
    this.loginForm = this.fb.group({
      name:['',[Validators.required]],
      email:['',[Validators.required, Validators.pattern("[A-Za-z0-9]*@gmail.com")]],
      password:['',[Validators.required,Validators.pattern("[A-Za-z0-9@!_]{6,}")]],
      address:['',[Validators.required]],
    },);
    }
    
   
    login(FormValue:any){
      console.log("from form",FormValue);
     
     this.signup.add1(FormValue).subscribe((data)=>{
     
      console.log("data returned from server",data);
      })
    }
  }
