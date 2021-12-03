/* tslint:disable: member-ordering forin */
import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-hero-form-reactive',
  templateUrl: './hero-form-reactive.component.html',
  styleUrls: ['./hero-form-reactive.component.css'],
})
export class TimeBlockComponent implements OnInit {
  blockForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.blockForm = this.formBuilder.group({
      description: [[''], Validators.minLength(4)],
    });
  }
  get description(): FormArray {
    return <FormArray>this.blockForm?.get('description');
  }
  updateDescription(newDescription: string): void {
    const newDescriptionArray = [newDescription];
    this.blockForm = new FormGroup({
      description: this.formBuilder.array(
        newDescriptionArray,
        Validators.minLength(4)
      ),
    });
  }
}
