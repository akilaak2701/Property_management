import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormGroup,NgForm } from '@angular/forms';
import { HttpserviceService } from '../httpservice.service';
@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrls: ['./addform.component.css']
})
export class AddformComponent implements OnInit {
areabook!:FormGroup
area:any;
typearea:any=[];
  constructor(private formBuilder:FormBuilder, private api:HttpserviceService) { }

  ngOnInit(): void {
//     this.areabook= this.formBuilder.group(
//       {
//     'areaname' :['',Validators.required],
//     'description' :['',Validators.required]
//       }
//     )
//   }
//   areaBookform(formobject:any){
// console.log(formobject);
// this.api.addarea(formobject).subscribe((data:any)=>
//   {
// console.log('area details was successfully posted');
//   })
//   }
//   findarea(Formvalue:any) {
//     const id = "9eb5282a46a3c5055a40209e3c050645"
//     this.api.getarea(id).subscribe(data=>{
//       console.log(data);
//       console.log('Data was fetching');
//       this.area=data;
//       this.area=this.area.rows;
//       console.log(this.area);
//       for(const i in this.area){
//         if(Object.prototype.hasOwnProperty.call(this.area,i)){
//           const elt = this.area[i];
//           console.log(elt.id);
//           this.api.getsingle(elt.id).subscribe(res=>{
//             console.log(res);
//             this.typearea.push(res);
//             console.log('details of the traveller was successfully added');
           
//           },rej=>{
//             console.log('error');
//           })
//         }
//       }
    
//     })
//   }
  }
}
