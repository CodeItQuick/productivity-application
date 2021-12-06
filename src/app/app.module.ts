import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TimeBlockComponent } from './productivity-page/time-block.component';
import { ForbiddenValidatorDirective } from './shared/forbidden-name.directive';
import { IdentityRevealedValidatorDirective } from './shared/identity-revealed.directive';
import { UniqueAlterEgoValidatorDirective } from './shared/alter-ego.directive';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './about/about.component';
import { TimeSlotComponent } from './productivity-page/time-slot/time-slot.component';
import { ListComponent } from './todo/list/list.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    TimeBlockComponent,
    ForbiddenValidatorDirective,
    IdentityRevealedValidatorDirective,
    UniqueAlterEgoValidatorDirective,
    AboutComponent,
    TimeSlotComponent,
    ListComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
