import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { catchError, Observable, throwError } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()

export class AppIntercepter implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
           
        
        return next.handle(req).pipe(catchError((error:HttpErrorResponse)=>{
             
            let errorMessage = "";
            if(error.error instanceof ErrorEvent){
                
          // Client-side error
          errorMessage = `Client Error: ${error.error.message}`;

            }else{
            errorMessage=` ${error.status} - ${error.message}`
            }

              console.error('HTTP Error:', errorMessage);
               return throwError(() => errorMessage);
        }))
    }
    
}