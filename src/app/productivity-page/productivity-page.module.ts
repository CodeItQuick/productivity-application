import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductivityRequestService } from './productivity-request.service';
import { AboutComponent } from '../about/about.component';
import { TimeBlockComponent } from './time-block/time-block.component';
import { TimeSlotComponent } from './time-slot/time-slot.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  declarations: [TimeBlockComponent, TimeSlotComponent],
  bootstrap: [],
  providers: [HttpClient, ProductivityRequestService],
})
export class ProductivityModule {}
