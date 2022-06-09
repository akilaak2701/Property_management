import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  temp: any;
  sample: any;

  constructor(private api:ApiserviceService,private acrouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.acrouter.queryParams.subscribe(res=>{
      this.sample =  this.temp=res
    })
  }

}
