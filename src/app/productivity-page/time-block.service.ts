import { Injectable } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class TimeBlockService {
  timeBlock: { value: string; idx: string; errors: string }[];

  constructor() {
    this.timeBlock = '123456789'
      .split('')
      .map((idxNum) => ({ value: '', idx: idxNum, errors: '' }));
  }

  addEntryToBlockRequest(
    newInput: string,
    inputIdx: number,
    errors: ValidationErrors | null
  ) {
    this.timeBlock = this.timeBlock.map((blockInfo, idx) => {
      if (inputIdx === idx)
        return {
          value: newInput,
          idx: blockInfo + '',
          errors:
            errors !== null
              ? 'There are only this many characters: ' +
                errors?.['minlength']?.actualLength
              : '',
        };
      else return blockInfo;
    });
  }
  retrieveEntryValues() {
    return this.timeBlock.map(({ errors }: { errors: string }) => errors);
  }
}
