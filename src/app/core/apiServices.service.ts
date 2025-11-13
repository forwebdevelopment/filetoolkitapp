import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment.development";


@Injectable(
 {providedIn:'root'}
)

export class ApiServices{
constructor(private http: HttpClient) {}



private apiUrl = environment.api;
lockUnlockPdf(file: File, password: string , fileType:string ,operations:string ): Observable<any> {
    const formData = new FormData();
    formData.append('file', file, file.name);
    formData.append('password', password);

    const headers = new HttpHeaders({
      'accept': '*/*'
      // Do NOT set Content-Type manually; Angular will handle it for FormData
    });

    return this.http.post(`${this.apiUrl}?fileType=${fileType}&operations=${operations}`, formData, { headers });
  }



}