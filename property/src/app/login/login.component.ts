import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators} from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { Router } from '@angular/router';

@Component({
 selector: 'app-login',
 templateUrl: './login.component.html',
 styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 successMessage:string ="";
 loginForm!: FormGroup; 
//  FormValue:any;
  // router: any;
 constructor(private fb: FormBuilder,private api:ApiserviceService,private router:Router) { }
ngOnInit(): void {
 this.loginForm = this.fb.group({
  email:['',[Validators.required, Validators.pattern("[A-Za-z0-9]*@gmail.com")]],
  password:['',[Validators.required,Validators.pattern("[A-Za-z0-9@!_]{6,}")]]
 })
}

login(Formvalue:any){
    console.log(Formvalue.Email);
    this.api.test_get(Formvalue.Email).subscribe((data: { [x: string]: { Email: any; }[]; docs: { Email: any; }[]; })=>{
      console.log(data["docs"][0])
    console.log("data returned from server",data["docs"][0].Email);

    if(data.docs[0].Email == Formvalue.Email){
        alert("data verified");
    }
    this.api.storeData2(Formvalue).subscribe((data: { docs: string | any[]; }) => {
      if(data.docs.length > 0){
        this.router.navigate(['lists'],{
        })
      }
     console.log("data returned from server", data);
    })

});


}

}

function saving(Formvalue: any, any: any) {
  throw new Error('Function not implemented.');
}
