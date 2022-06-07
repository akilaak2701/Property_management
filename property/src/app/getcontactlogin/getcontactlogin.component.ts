import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators} from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-getcontactlogin',
  templateUrl: './getcontactlogin.component.html',
  styleUrls: ['./getcontactlogin.component.css']
})
export class GetcontactloginComponent implements OnInit {

  loginForm!: FormGroup; 
  constructor(private fb:FormBuilder,private signup:ApiserviceService,private router:Router, private http:HttpClient) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email:['',[Validators.required, Validators.pattern("[A-Za-z0-9]*@gmail.com")]],
      password:['',[Validators.required,Validators.pattern("[A-Za-z0-9@!_]{6,}")]],
    })
    
    }
  
  login(Formvalue:any)
 {
    console.log(Formvalue.email);
    this.signup.test_get(Formvalue.email).subscribe((data : any)=>{
      console.log("data returned from server",data);
      
      //  if(data.docs[0].email == Formvalue.email){
      // this.router.navigate(['/lists']);

      // alert("data verified");
      
      // }
      // else{
      //   alert("Invalid data");
      // }
      
    })
    
  }
}
