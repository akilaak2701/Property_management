import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  checkUserLogin(_email: any, _password: any) {
    throw new Error('Method not implemented.');
  }
  public propertyList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");

  array(_alluserData: any) {
    throw new Error('Method not implemented.');
  }
  getProducts(){
    return this.propertyList.asObservable();
  }

  url='https://e212ecf3-82ab-4f31-b454-c3866556584d-bluemix.cloudantnosqldb.appdomain.cloud/'
  dbUserName='apikey-v2-1zxymrqa2rwcwp3esoqslwcsrnsvh2ggpy6jmusqnlz9'
  dbPassword = '8db4bc5abe318da5e50e638f8cb126b5'
   basicAuth = 'Basic ' + btoa(this.dbUserName + ':' + this.dbPassword);
  test_get: any;
  storeData2: any;
  constructor(private http:HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.basicAuth
    })
  };
  add(db: string, doc: object): Observable<{}> {
    const url = this.url + db;
    return this.http.post(url, doc, this.httpOptions)
  }
  get(data:any): Observable<{}> {
    const url = this.url + 'propertydb/_find';
    return this.http.post(url,data, this.httpOptions)

  }
  getDocsByID(db: string,id: string): Observable<{}> {
    const url = this.url + db + '/'+id;
    return this.http.get(url, this.httpOptions)
  }
  
  findsearch(selectorObject: any, dataBase: string) {
      const url = `${this.url + dataBase}/_find`
      const dataObject = {
       selector: selectorObject
      }
      return this.http.post(url, dataObject, this.httpOptions)
     }
    
    
}