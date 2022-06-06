import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Api1serviceService } from '../api1service.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  loginForm!: FormGroup;


  constructor(private api:Api1serviceService,private fb: FormBuilder, private router:Router) {}
  
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
  
   console.log("from form", Formvalue);
   this.api.storeData2(Formvalue).subscribe((data:any) => {
    if(data.docs.length > 0){
     this.router.navigate(['dashboard'],{})
    }
  console.log("data returned from server", data);
   })
  }
  }
  
  