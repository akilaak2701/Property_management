import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators} from '@angular/forms';
import { Api1serviceService } from '../api1service.service';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-getcontactform',
  templateUrl: './getcontactform.component.html',
  styleUrls: ['./getcontactform.component.css']
})
export class GetcontactformComponent implements OnInit {

  loginForm!: FormGroup; 
  constructor(private fb:FormBuilder,private signup:Api1serviceService,private router:Router, private http:HttpClient) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email:['',[Validators.required, Validators.pattern("[A-Za-z0-9]*@gmail.com")]],
      password:['',[Validators.required,Validators.pattern("[A-Za-z0-9@!_]{6,}")]],
    })
    
    }
  
  login(Formvalue:any)
 {
    console.log(Formvalue.email);
    this.signup.testGet1(Formvalue.email).subscribe((data)=>{
      console.log("data returned from server",data);
      
       if(data.docs[0].email == Formvalue.email){
      this.router.navigate(['/house1']);

      alert("data verified");
      
      }
      else{
        alert("Invalid data");
      }
      
    })
    
  }
}