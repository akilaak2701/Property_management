import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
public searchTerm :string ='';
  ApiserviceService: any;
  constructor(private api: ApiserviceService ) { 
    
  }

  ngOnInit(): void {
  }
  search(event: any) {
      this.searchTerm = (event.target as HTMLInputElement).value;
      console.log(this.searchTerm);
      this.api.search.next(this.searchTerm);
     }
    

}
