import { Component, Input, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { SendRequestService } from './send-request.service';
import { TimeBlockService } from './time-block.service';

@Component({
  selector: 'app-time-block',
  templateUrl: './time-block.component.html',
  styleUrls: ['./time-block.component.css'],
})
export class TimeBlockComponent implements OnInit {
  timeBlocks: string[] = '123456789'.split('').map(() => '');
  constructor(
    private slService: TimeBlockService,
    private slHttpService: SendRequestService
  ) {
    this.slHttpService.retrieveCurrentTasks();
  }

  ngOnInit(): void {}

  displayErrorValues() {
    return this.slService.retrieveEntryErrorValues();
  }
}
