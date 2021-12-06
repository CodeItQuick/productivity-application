import { Component, Input, OnInit, Output } from '@angular/core';
import { FormGroup, ValidationErrors } from '@angular/forms';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-time-slot',
  templateUrl: './time-slot.component.html',
  styleUrls: ['./time-slot.component.css'],
})
export class TimeSlotComponent implements OnInit {
  @Input() description: {
    invalid: boolean;
    dirty: boolean;
    touched: boolean;
    errors: ValidationErrors;
  };
  @Input() timeBlockNumber: number | undefined;
  @Input() inputBlock!: FormGroup;
  @Input() formValue: string;
  @Output() inputBlockRequest = new EventEmitter<{
    newInput: string;
    timeBlockNumber: number | undefined;
  }>();

  constructor() {
    this.description = {
      invalid: false,
      dirty: false,
      touched: false,
      errors: [],
    };
    this.formValue = '';
  }

  inputBlockChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.inputBlockRequest.emit({
      newInput: input.value ?? undefined,
      timeBlockNumber: this.timeBlockNumber,
    });
  }

  ngOnInit(): void {}
}
