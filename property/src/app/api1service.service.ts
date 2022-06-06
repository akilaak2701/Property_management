import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Api1serviceService {
  test_get(Email: any) {
    throw new Error('Method not implemented.');
  }
  
  add(arg0: string, login: { userid: any; password: any; type: string; }) {
    throw new Error('Method not implemented.');
  }
  
 
  constructor(private http: HttpClient) { }

  storeData(formData: any) {
    console.log("From api", formData);
    return this.http.post<any>('http://localhost:8000/postdata/', formData)
  }

  storeData1(formData1: any) {
    console.log("From api", formData1);
    return this.http.post<any>('http://localhost:8000/postdata1/', formData1)
  }

  storeData2(formData2: any) {
    console.log("From api", formData2);
    return this.http.post<any>('http://localhost:8000/postdata2/', formData2)
  }
  add1(formobject:any){
    console.log(formobject);
    return this.http.post("http://localhost:8000/signup",formobject);
  }
  test_get1(id:any)
 {
  return this.http.get<any>('http://localhost:8000/getlogin/'+id);

 }
 test_get2(id:any)
 {
  return this.http.get<any>('http://localhost:8000/getadminlogin/'+id);

 }


 
}