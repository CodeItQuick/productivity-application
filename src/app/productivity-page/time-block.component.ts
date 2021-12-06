import { Component, Input, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

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

  constructor(private formBuilder: FormBuilder) {
    this.timeSlotDescription = '123456789'
      .split('')
      .map((_slotNum: string) => ({
        invalid: false,
        dirty: false,
        touched: false,
        errors: [],
      }));
  }

  ngOnInit(): void {
    this.blockForm = this.formBuilder.group({
      description: [[''], Validators.minLength(4)],
    });
  }
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
    this.blockDescription = this.blockDescription.map(
      (block: string, idx: number) => {
        if (idx === (timeBlockNumber || 0) - 1) return newInput;
        else return block;
      }
    );
  }
  createRange(num: number) {
    return new Array(num);
  }
}
