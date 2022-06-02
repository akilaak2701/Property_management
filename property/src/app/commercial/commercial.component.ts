import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-commercial',
  templateUrl: './commercial.component.html',
  styleUrls: ['./commercial.component.css']
})
export class CommercialComponent implements OnInit {

  propertyList: any;

  constructor(private api:ApiserviceService) { }

  ngOnInit(): void {
    const selector = {
      "type": "property"
    }
    this.api.findsearch(selector, "propertydb")
      .subscribe((res: any) => {
        console.log(res);
        this.propertyList = res['docs'];
  });

}
}
