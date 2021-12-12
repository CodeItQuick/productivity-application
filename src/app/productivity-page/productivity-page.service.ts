import { Injectable, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { ProductivityRequestService } from './productivity-request.service';

@Injectable({
  providedIn: 'root',
})
export class ProductivityPageService {
  timeBlock: { value: string; idx: number; errors: string }[];
  slServiceSubscription: Observable<
    { value: string; idx: number; errors: string }[]
  >;
  constructor(private slService: ProductivityRequestService) {
    this.timeBlock = '123456789'
      .split('')
      .map((block) => ({ value: '', idx: +block, errors: '' }));
    this.slServiceSubscription = this.slService.retrieveTaskListObservable();
    this.slServiceSubscription.subscribe(
      (
        x: {
          value: string;
          idx: number;
          errors: string;
        }[]
      ) => {
        this.timeBlock = x;
      }
    );
  }
  subscribeToTimeBlocks(): Observable<
    { value: string; idx: number; errors: string }[]
  > {
    return this.slServiceSubscription;
  }
  sendError(
    newInput: string,
    errors: ValidationErrors | null | undefined,
    errorIdx: number
  ): void {
    this.timeBlock = this.timeBlock.map(
      (block: { value: string; idx: number; errors: string }, idx: number) => {
        if (errorIdx === idx) {
          const newError = errors?.['actualLength']
            ? `There has been an minlength error, current length: ${errors?.['actualLength']}`
            : `Error this field is required`;
          return {
            value: newInput,
            idx: errorIdx,
            errors: newError,
          };
        } else {
          return block;
        }
      }
    );
  }
  retrieveEntryErrorValues(): string[] {
    return this.timeBlock.map(({ errors }: { errors: string }) => errors);
  }
  retrieveTimeBlocks(): string[] {
    return this.timeBlock.map(({ value }: { value: string }) => value);
  }
}
