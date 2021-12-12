import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TimeBlockComponent } from './productivity-page/time-block/time-block.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './about/about.component';
import { TimeSlotComponent } from './productivity-page/time-slot/time-slot.component';
import { ListComponent } from './todo/list/list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductivityRequestService } from './productivity-page/productivity-request.service';
import { ProductivityModule } from './productivity-page/productivity-page.module';
import { ProductivityRoutingModule } from './productivity-page/productivity-page-routing.module';
import { ListRoutingModule } from './todo/list-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    ProductivityRoutingModule,
    ListRoutingModule,
  ],
  declarations: [AppComponent, AboutComponent, ListComponent],
  bootstrap: [AppComponent],
  providers: [HttpClient],
})
export class AppModule {}
