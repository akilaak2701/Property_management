import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators} from '@angular/forms';
import { HttpserviceService } from '../httpservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  loginForm!: FormGroup;


  constructor(private fb: FormBuilder,private httpapi: HttpserviceService, private router:Router) {}
  
  ngOnInit(): void {
   this.loginForm = this.fb.group({
    userid: ['',Validators.required],
    password: ['',Validators.required],
    
   });
  }
  get userid() {
   return this.loginForm.get('userid');
  }
  get password() {
   return this.loginForm.get('password');
  }
  
  saving(Formvalue: any) {
  
   const login = {
    userid: Formvalue.userid,
    password: Formvalue.password,
    type: "login",
   }
   console.log("from form", Formvalue);
   this.httpapi.storeData2(Formvalue).subscribe((data:any) => {
    if(data.docs.length > 0){
     this.router.navigate(['dashboard'],{
     })
    }
  console.log("data returned from server", data);
   })
  }
  }
  
  