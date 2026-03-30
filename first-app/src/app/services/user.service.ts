import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { User } from '../models/classes/user';
import { Observable } from 'rxjs';
import { APIResponse } from '../models/interfaces/APIResponse';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  http = inject(HttpClient);

  addUser(userObj: User): Observable<APIResponse> {
    return this.http.post<APIResponse>(
      environment.BASE_API + '/users/register',
      userObj,
    );
  }

  login(userObj: User): Observable<APIResponse> {
    return this.http.post<APIResponse>(
      environment.BASE_API + '/users/login',
      userObj,
    );
  }
}
