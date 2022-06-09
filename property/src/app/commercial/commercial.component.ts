import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-commercial',
  templateUrl: './commercial.component.html',
  styleUrls: ['./commercial.component.css']
})
export class CommercialComponent implements OnInit {
  commercialList: any;
  searchKey: string = "";
  filterCategory: any;
  temp: any;
  sample: any;

  constructor(private api:ApiserviceService,private router:Router) { }

  ngOnInit(): void {
    const selector = {
      "type": "commercial"
    }
    this.api.findsearch(selector, "propertydb")
      .subscribe((res: any) => {
        console.log(res);
        this.commercialList =this.filterCategory = res['docs'];
        
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
