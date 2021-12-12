import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimeBlockComponent } from './productivity-page/time-block/time-block.component';
import { TimeSlotComponent } from './productivity-page/time-slot/time-slot.component';

@NgModule({
  declarations: [AppComponent, TimeSlotComponent, TimeBlockComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class ProductivityModule {}
