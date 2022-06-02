import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {
    storedata(Formvalue: any) {
        throw new Error('Method not implemented.');
    }
  get(arg0: string) {
    throw new Error('Method not implemented.');
  }
  // temp: any;
  // pusharray: any = [];
  // url = 'https://75b0afe3-3fa7-477b-8352-bdcfcd522a16-bluemix.cloudant.com/'
  // dbUserName = 'apikey-v2-2djdlrrbf736ap4aa6rlre2x1j1wf65v1ti1e8x2bihn';
  // dbPassword = '3bc2893c0a2a1ec42d9b17840b18447b';
  // basicAuth = 'Basic ' + btoa(this.dbUserName + ':' + this.dbPassword);
  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Authorization': this.basicAuth
  //   })
  // };
  
  // get(db: string): Observable<{}> {
  //   const url = this.url + db + '/_all_docs?include_docs=true';
  //   return this.http.get(url, this.httpOptions) }
  constructor(private http:HttpClient) {}
  add(Formvalue:any) {
    console.log("From api",FormData);
    return this.http.post<any>('http://localhost:8000/postdata/',FormData)
   }

   test_get(id:any)
  {
    return this.http.get<any>('http://localhost:8000/getdata/'+id);


  }

  storeData2(formData2: any) {
    console.log("From api", formData2);
    return this.http.post<any>('http://localhost:8000/postdata2/', formData2)
  }
  
  
}


