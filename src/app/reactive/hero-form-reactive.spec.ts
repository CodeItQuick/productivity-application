import { TestBed } from '@angular/core/testing';
import { ValidationErrors } from '@angular/forms';
import { TimeBlockComponent } from './hero-form-reactive.component';

describe('Given we are on the main task page, ', () => {
  beforeAll(() => {});

  it('when the component is created then description is empty', () => {
    const component = new TimeBlockComponent();

    expect(component.description).toBeDefined();
    expect(component.description?.value).toEqual('');
  });

  it('when no value is entered into 8:00 am then an error is displayed', () => {
    TestBed.configureTestingModule({ declarations: [TimeBlockComponent] });
    const fixture = TestBed.createComponent(TimeBlockComponent);
    const component = fixture.componentInstance;

    fixture.detectChanges();

    expect(component.description).toBeDefined();
    expect(component.description?.errors).toBeDefined();
    expect(component.description?.errors).toEqual(null);
  });
  it('when a single letter is entered into 8:00 am then an error is displayed for minlength', () => {
    TestBed.configureTestingModule({ declarations: [TimeBlockComponent] });
    const fixture = TestBed.createComponent(TimeBlockComponent);
    const component = fixture.componentInstance;

    component.description?.setValue('a');
    fixture.detectChanges();

    expect(component.description?.hasError('minlength')).toBeTrue();
  });
  it('when a single letter is entered into 8:00 am then an error is displayed for minlength', () => {
    TestBed.configureTestingModule({ declarations: [TimeBlockComponent] });
    const fixture = TestBed.createComponent(TimeBlockComponent);
    const component = fixture.componentInstance;

    component.description?.setValue('abcd');
    fixture.detectChanges();

    expect(component.description?.hasError('minlength')).toBeFalse();
  });
});
