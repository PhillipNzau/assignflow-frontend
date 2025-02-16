import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { map, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'users'
  // private domain: string | undefined
  loginUserUrl = environment.loginUser

  constructor(private httpClient:HttpClient) {
    // this.domain = environment.domain
   }

   login(data:any) {
     return this.httpClient.post(this.loginUrl, data).pipe(
       map((response: any) => response.data),
     )
   }
}
