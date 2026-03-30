import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SyncTodo } from '../models/interfaces/SyncTodo';
import { Observable } from 'rxjs';
import { APIResponse } from '../models/interfaces/APIResponse';
import { environment } from '../../environments/environment';
import { Contants } from '../contants/contants';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor(private http: HttpClient) {}

  synctodos(obj: SyncTodo): Observable<APIResponse> {
    return this.http.post<APIResponse>(
      environment.BASE_API + Contants.SYNC,
      obj,
    );
  }
}
