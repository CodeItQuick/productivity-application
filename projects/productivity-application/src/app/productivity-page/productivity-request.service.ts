import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subscribable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductivityRequestService {
  retrieveTaskList: Observable<
    { value: string; idx: number; errors: string }[]
  >;
  constructor(private http: HttpClient) {
    this.retrieveTaskList = this.http.get<
      { value: string; idx: number; errors: string }[]
    >('/assets/task_list.json');
  }

  retrieveTaskListObservable(): Observable<
    { value: string; idx: number; errors: string }[]
  > {
    return this.retrieveTaskList;
  }
}
