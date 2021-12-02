/* tslint:disable: member-ordering forin */
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { forbiddenNameValidator } from '../shared/forbidden-name.directive';
import { identityRevealedValidator } from '../shared/identity-revealed.directive';
import { UniqueAlterEgoValidator } from '../shared/alter-ego.directive';

@Component({
  selector: 'app-hero-form-reactive',
  templateUrl: './hero-form-reactive.component.html',
  styleUrls: ['./hero-form-reactive.component.css'],
})
export class TimeBlockComponent {
  blockForm: FormGroup = new FormGroup({
    description: new FormControl('', [Validators.minLength(4)]),
  });
  get description() {
    return this.blockForm.get('description');
  }
}
// export class HeroFormReactiveComponent implements OnInit {
//   timeSlot = [8, 9, 10, 11, 12, 1, 2, 3, 4].map((time: number) => `${time}:00`);

//   hero = { timeslot: 'Dr.', alterEgo: 'Dr. What', power: this.timeSlot[0] };

//   heroForm!: FormGroup;

//   ngOnInit(): void {
//     this.heroForm = new FormGroup(
//       {
//         description: new FormControl(this.hero.name, [
//           Validators.required,
//           Validators.minLength(4),
//           forbiddenNameValidator(/bob/i),
//         ]),
//         alterEgo: new FormControl(this.hero.alterEgo, {
//           asyncValidators: [
//             this.alterEgoValidator.validate.bind(this.alterEgoValidator),
//           ],
//           updateOn: 'blur',
//         }),
//         power: new FormControl(this.hero.power, Validators.required),
//       },
//       { validators: identityRevealedValidator }
//     ); // <-- add custom validator at the FormGroup level
//   }

//   get name() {
//     return this.heroForm.get('name')!;
//   }

//   get power() {
//     return this.heroForm.get('power')!;
//   }

//   get alterEgo() {
//     return this.heroForm.get('alterEgo')!;
//   }

//   constructor(private alterEgoValidator: UniqueAlterEgoValidator) {}
// }
