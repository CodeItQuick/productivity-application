import { Component, Input, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { ProductivityPageService } from '../productivity-page.service';

@Component({
  selector: 'app-time-slot',
  templateUrl: './time-slot.component.html',
  styleUrls: ['./time-slot.component.css'],
})
export class TimeSlotComponent implements OnInit {
  @Input() timeBlockNumber: number = 0;
  @Input() timeBlock!: string;
  formValue: { description: string } = { description: '' };
  timeBlockForm!: FormGroup;

  constructor(private slService: ProductivityPageService) {
    this.formValue.description = this.timeBlock;
  }
  ngOnInit(): void {
    this.timeBlockForm = new FormGroup({
      description: new FormControl(this.timeBlock, [
        Validators.minLength(4),
        Validators.required,
      ]),
    });
  }

  get description() {
    return this.timeBlockForm.get('description');
  }

  addEntryToBlockRequest() {
    if (this.timeBlockForm.get('description')?.errors !== null) {
      this.slService.sendError(
        this.timeBlock,
        this.timeBlockForm.get('description')?.getError('minlength'),
        this.timeBlockNumber
      );
    }
  }
}
