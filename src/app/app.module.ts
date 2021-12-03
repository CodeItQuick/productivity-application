import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TimeBlockComponent } from './reactive/hero-form-reactive.component';
import { ForbiddenValidatorDirective } from './shared/forbidden-name.directive';
import { IdentityRevealedValidatorDirective } from './shared/identity-revealed.directive';
import { UniqueAlterEgoValidatorDirective } from './shared/alter-ego.directive';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './about/about.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    TimeBlockComponent,
    ForbiddenValidatorDirective,
    IdentityRevealedValidatorDirective,
    UniqueAlterEgoValidatorDirective,
    AboutComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
