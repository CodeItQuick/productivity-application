import { TestBed } from '@angular/core/testing';
import {
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { TimeBlockComponent } from './time-block.component';

describe('Given we are on the main task page, ', () => {
  beforeAll(() => {});

  it('when the component is created then description is empty', () => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [TimeBlockComponent],
    });
    const fixture = TestBed.createComponent(TimeBlockComponent);
    const component = fixture.componentInstance;

    expect(component.description).toBeDefined();
    expect(component.description?.value).toEqual(undefined);
  });

  it('when no value is entered into 8:00 am then an error is displayed', () => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [TimeBlockComponent],
    });
    const fixture = TestBed.createComponent(TimeBlockComponent);
    const component = fixture.componentInstance;

    component.updateDescription({ newInput: '', timeBlockNumber: 1 });
    fixture.detectChanges();

    expect(component.description).toBeDefined();
    expect(component.description?.errors).toBeDefined();
    expect(component.description?.errors).toEqual({
      minlength: Object({ requiredLength: 4, actualLength: 1 }),
    });
  });
  it('when a single letter is entered into the block then an error is displayed for minlength', () => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [TimeBlockComponent],
    });
    const fixture = TestBed.createComponent(TimeBlockComponent);
    let component = fixture.componentInstance;

    component.updateDescription({ newInput: 'a', timeBlockNumber: 3 });
    fixture.detectChanges();

    expect(component.description?.hasError('minlength')).toBeTrue();
  });
  it('when a five letters are entered into the block then no error is displayed for minlength', () => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [TimeBlockComponent],
    });
    const fixture = TestBed.createComponent(TimeBlockComponent);
    let component = fixture.componentInstance;

    component.updateDescription({ newInput: 'abcde', timeBlockNumber: 2 });
    fixture.detectChanges();

    expect(component.description.errors).toEqual({
      minlength: { requiredLength: 4, actualLength: 1 },
    });
  });
});
