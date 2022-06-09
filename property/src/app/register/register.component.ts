import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators} from '@angular/forms';
import { Api1serviceService } from '../api1service.service';
import { HttpClient} from '@angular/common/http';  
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
  successMessage:string ="";
  loginForm!: FormGroup; 
  submitted = false;
  constructor(private fb:FormBuilder,private signup:Api1serviceService, private http:HttpClient, private router:Router, private toast:ToastrService) { 


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
     
     this.signup.add1(FormValue).subscribe((_data)=>{
     
      this.toast.success('you are registered successfully');
    },
    (rej) => {
      this.toast.error('Registeration Failed',rej);
    })
    
    this.loginForm.reset();
    this.submitted=true;
    this.router.navigate(['/login']);

    if (this.loginForm.invalid) {
      return;
    }

    console.log(JSON.stringify(this.loginForm.value,null,2));

      }
    }
    
  
