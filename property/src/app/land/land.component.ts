import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';


@Component({
  selector: 'app-land',
  templateUrl: './land.component.html',
  styleUrls: ['./land.component.css']
})
export class LandComponent implements OnInit {

 
  propertyList: any;
  searchKey: string = "";
  filterCategory: any;

  constructor(private api:ApiserviceService) { }

  ngOnInit(): void {
    const selector = {
      "type": "property"
    }
    this.api.findsearch(selector, "propertydb")
      .subscribe((res: any) => {
        console.log(res);
        this.propertyList =this.filterCategory = res['docs'];
        
  });
  this.api.search.subscribe((val:any) => {
    this.searchKey = val;
  })



}

}
