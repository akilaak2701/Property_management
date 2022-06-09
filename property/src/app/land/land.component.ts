import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-land',
  templateUrl: './land.component.html',
  styleUrls: ['./land.component.css']
})
export class LandComponent implements OnInit {

  landList: any;
  searchKey: string = "";
  filterCategory: any;
  temp: any;
  sample: any;

  constructor(private api:ApiserviceService,private router:Router) { }

  ngOnInit(): void {
    const selector = {
      "type": "land"
    }
    this.api.findsearch(selector, "propertydb")
      .subscribe((res: any) => {
        console.log(res);
        this.landList =this.filterCategory = res['docs'];
        
  });
  this.api.search.subscribe((val:any) => {
    this.searchKey = val;
  })



}
event(id:any){
  console.log(id);
  this.router.navigate(['view'],{queryParams:id})

}
}
