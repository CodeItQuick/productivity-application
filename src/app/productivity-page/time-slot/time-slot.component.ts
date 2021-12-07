import { Component, Input, OnInit, Output } from '@angular/core';
import { FormGroup, ValidationErrors } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { TimeBlockService } from '../time-block-service.service';

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

  constructor(private slService: TimeBlockService) {
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
    this.slService.addEntryToBlockRequest({
      newInput: input.value,
      blockNum: this.timeBlockNumber + '',
    });
  }

  ngOnInit(): void {}
}
