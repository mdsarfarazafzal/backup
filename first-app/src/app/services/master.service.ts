import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { IUserInfo } from '../models/interfaces/userInfo';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  http = inject(HttpClient);

  mySubject: BehaviorSubject<string> = new BehaviorSubject<string>('');

  getUserInfo(): Observable<IUserInfo> {
    return this.http.get<IUserInfo>(
      'https://api.github.com/users/mdsarfarazafzal',
    );
  }
}
