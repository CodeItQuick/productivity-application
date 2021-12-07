import { Component, Input, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { TimeBlockService } from './time-block-service.service';

@Component({
  selector: 'app-time-block',
  templateUrl: './time-block.component.html',
  styleUrls: ['./time-block.component.css'],
})
export class TimeBlockComponent implements OnInit {
  blockForm: FormGroup = new FormGroup({});
  timeSlotDescription: {
    invalid: boolean;
    dirty: boolean;
    touched: boolean;
    errors: ValidationErrors;
  }[];
  @Input() blockDescription: string[] = ['', '', '', '', '', '', '', '', ''];

  constructor(private slService: TimeBlockService) {
    this.timeSlotDescription = '123456789'
      .split('')
      .map((_slotNum: string) => ({
        invalid: false,
        dirty: false,
        touched: false,
        errors: [],
      }));
  }

  ngOnInit(): void {}
  get description(): FormArray {
    return <FormArray>this.blockForm?.get('description');
  }
  updateDescription({
    newInput,
    timeBlockNumber,
  }: {
    newInput: string;
    timeBlockNumber: number | undefined;
  }): void {
    this.slService.addEntryToBlockRequest({
      newInput,
      blockNum: timeBlockNumber + '',
    });
  }
  createRange(num: number) {
    return new Array(num);
  }
  displayValues() {
    return this.slService.retrieveEntryValues();
  }
}
