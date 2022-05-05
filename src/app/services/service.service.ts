import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs';
import { User } from 'src/interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private readonly APIURL = 'http://localhost:8081'

  constructor(private http: HttpClient ) {}

   addUser(user: User): Observable<User>{
    return this.http.post<User>(this.APIURL+"/crud", user)
   }

   login(user: User): Observable<User>{
     return this.http.get<User>(this.APIURL+"/crud/"+ user.id)
   }
}
