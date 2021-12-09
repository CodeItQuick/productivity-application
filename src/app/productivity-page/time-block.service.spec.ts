import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { TimeBlockService } from './time-block.service';
import { TimeBlockComponent } from './time-block.component';
import { TimeSlotComponent } from './time-slot/time-slot.component';

describe('given we are testing TimeBlockService', () => {
  let timeBlockService: TimeBlockService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [TimeBlockComponent, TimeSlotComponent],
      providers: [TimeBlockService],
    });
    timeBlockService = TestBed.inject(TimeBlockService);
  });
  // Proving to myself I can test the component
  it('when the component TimeBlockComponent is created then description is empty', () => {
    const fixture = TestBed.createComponent(TimeBlockComponent);
    TestBed.inject(TimeBlockService);
    const component = fixture.componentInstance;

    expect(component.displayErrorValues()).toBeDefined();
  });
  // Proving to myself I can test the service
  it('given the service is created, when we enter "hello world", then no errors are displayed', () => {
    timeBlockService.addEntryToBlockRequest('hello world', 1, null);
    expect(timeBlockService.retrieveEntryErrorValues()).toEqual([
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
    ]);
  });
  it('given the service is created when we enter "yes", then it gives an error for not enough characters', () => {
    const validationControl = new FormControl('', Validators.minLength(4));
    validationControl.setValue('yes');

    timeBlockService.addEntryToBlockRequest('yes', 1, validationControl.errors);
    expect(timeBlockService.retrieveEntryErrorValues()).toEqual([
      '',
      'There are only this many characters: 3',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
    ]);
  });
});
