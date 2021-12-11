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
import {
  HttpClient,
  HttpClientModule,
  HttpHandler,
} from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
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
  providers: [HttpClient],
})
export class AppModule {}
