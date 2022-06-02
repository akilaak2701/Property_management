import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators, NgForm } from '@angular/forms';
// import { HttpserviceService } from '../httpservice.service';
import { HttpserviceService } from '../httpservice.service';
@Component({
 selector: 'app-signup',
 templateUrl: './signup.component.html',
 styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 // formgroups!: FormGroup;

 // constructor(private formbuilder:FormBuilder) { }
 successMessage:string =""

 regForm!:FormGroup;
 alluser: any;
 alluserData: any;
 store: any = []
 obj: any;
 idValue: any;
 val: any;
 constructor(private api:HttpserviceService,private formbuilder:FormBuilder) { }
ngOnInit(): void {
 this.regForm = this.formbuilder.group({
  name: ['',[Validators.required]],
  mobileNumber: ['',[Validators.required, Validators.min(1000000000),Validators.max(9999999999)]],
  email:['',[Validators.required, Validators.pattern("[a-zA-Z0-9]*@gmail.com")]],
  password: ['',[Validators.required,Validators.pattern("[a-zA-z@_]{6,}")]]
 })
}

register(FormValue:NgForm){
 this.successMessage = "Successfully Registered..."
this.api.add(FormValue).subscribe((data)=>{
 alert("Data posted Successfully");
 this.regForm.reset();
},rej=>{
 console.log("Error"+rej);
});
console.log(FormValue);

}
// get() {
//     this.api.get("propertydb").subscribe((res => {
//       console.log(res)
//       this.alluser = res;
//       this.alluser = this.alluser.rows;
//       this.alluserData = this.alluser.map((el: any) => el.doc);
//     })
//   }
}


