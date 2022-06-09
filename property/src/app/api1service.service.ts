import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Api1serviceService {
  testGet(_Email: any) {
    throw new Error('Method not implemented.');
  }
  
  add(_arg0: string, _login: { userid: any; password: any; type: string; }) {
    throw new Error('Method not implemented.');
  }
  
 
  constructor(private http: HttpClient) { }

  storeData2(formData2: any) {
    console.log("From api", formData2);
    return this.http.post<any>('http://localhost:8000/loginpost/', formData2)
  }
  add1(formobject:any){
    console.log(formobject);
    return this.http.post("http://localhost:8000/signup",formobject);
  }
  testGetLogin(id:any)
 {
  return this.http.get<any>('http://localhost:8000/getlogin/'+id);

 }
 testGetAdminLogin(id:any)
 {
  return this.http.get<any>('http://localhost:8000/getadminlogin/'+id);

 }


 
}