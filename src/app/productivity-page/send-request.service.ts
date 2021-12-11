import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { TimeBlockService } from './time-block.service';

@Injectable({
  providedIn: 'root',
})
export class SendRequestService {
  constructor(private http: HttpClient, private slService: TimeBlockService) {}

  retrieveCurrentTasks() {
    try {
      const subscriptionService = this.http
        .get<{ tasks: string[] }>('/assets/task_list.json')
        .pipe(
          map((responseData, idx: number) => ({
            data: responseData?.tasks,
            idx,
          }))
        )
        .subscribe(({ data, idx }: { data: string[]; idx: number }) => {
          console.log(data);
          data.forEach((entry, idx: number) =>
            this.slService.addEntryToBlockRequest(entry, idx, null)
          );
        });
    } catch (e) {
      console.log(e);
    }
  }
}
