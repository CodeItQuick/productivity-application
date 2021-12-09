import { Component, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { TimeBlockService } from '../time-block.service';

@Component({
  selector: 'app-time-slot',
  templateUrl: './time-slot.component.html',
  styleUrls: ['./time-slot.component.css'],
})
export class TimeSlotComponent implements OnInit {
  timeBlockForm: FormGroup;
  @Input() timeBlockNumber: number = 0;

  constructor(
    private slService: TimeBlockService,
    private formBuilder: FormBuilder
  ) {
    this.timeBlockForm = this.formBuilder.group({
      timeBlock: ['', Validators.minLength(4)],
    });
  }

  inputBlockChange() {
    console.log(this.timeBlockForm.get('timeBlock'));
    this.slService.addEntryToBlockRequest(
      this.timeBlockForm.get('timeBlock')?.value,
      this.timeBlockNumber,
      this.timeBlockForm.get('timeBlock')?.errors || null
    );
  }

  ngOnInit(): void {}
}
