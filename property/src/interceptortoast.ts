import { Injectable } from '@angular/core';
import {  HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';


@Injectable()
export class HttpCallInterceptor implements HttpInterceptor {
  constructor( private toastr: ToastrService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Intercepted request' + request.url);
    return next.handle(request).pipe(
      tap(evt => {
        console.log(evt)
      }, _err => {
        console.log(_err);
                this.toastr.error(_err.error.reason);
        
      })
    )
  }


}