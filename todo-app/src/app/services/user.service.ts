import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/classes/user';
import { APIResponse } from '../models/interfaces/APIResponse';
import { environment } from '../../environments/environment';
import { Contants } from '../contants/contants';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  register(userObj: User): Observable<APIResponse> {
    return this.http.post<APIResponse>(
      environment.BASE_API + Contants.REGISTER,
      userObj,
    );
  }

  login(userObj: User): Observable<APIResponse> {
    return this.http.post<APIResponse>(
      environment.BASE_API + Contants.LOGIN,
      userObj,
    );
  }
}
