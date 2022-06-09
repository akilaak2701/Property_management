import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-house1',
  templateUrl: './house1.component.html',
  styleUrls: ['./house1.component.css']
})
export class House1Component implements OnInit {
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
