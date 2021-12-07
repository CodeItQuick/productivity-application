import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TimeBlockService {
  inputBlockSubject = new Subject<{
    newInput: string;
    timeBlockNumber: number | undefined;
  }>();
  inputBlockSubscription: Subscription[] = [];
  myFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.myFormGroup = this.formBuilder.group(
      '0123456789'.split('').map((num: string) => ['', Validators.minLength(4)])
    );
  }

  addEntryToBlockRequest({
    newInput,
    blockNum,
  }: {
    newInput: string;
    blockNum: string;
  }) {
    this.myFormGroup.get(blockNum)?.setValue(newInput);
  }
  retrieveEntryValues() {
    return '0123456789'.split('').map((_controlNum: any, idx: number) => {
      if (this.myFormGroup.get(idx + '')?.errors !== null)
        return `Not enough characters (4) on entry #${idx}`;
      else return '';
    });
  }
}
