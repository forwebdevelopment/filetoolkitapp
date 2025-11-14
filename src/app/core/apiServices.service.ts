import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { environment } from "../../environments/environment.development";


@Injectable(
 {providedIn:'root'}
)

export class ApiServices{
constructor(private http: HttpClient) {}


private apiUrl = environment.api;
lockUnlockFile(file: File, password: string , fileType:string ,operations:string ): Observable<any> {
  debugger
    const formData = new FormData();
    formData.append('file', file, file.name);
    formData.append('password', password);
    formData.append('fileType' ,fileType)
    formData.append("operations" , operations)

    const headers = new HttpHeaders({
      'accept': '*/*'
      // Do NOT set Content-Type manually; Angular will handle it for FormData
    });

    return this.http.post(`${environment.api}LockUnlockFile?`, formData, { headers , responseType:'blob' , observe:'response' })

  }


  



}