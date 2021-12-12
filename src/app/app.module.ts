import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './about/about.component';
import { ListComponent } from './todo/list/list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductivityModule } from 'projects/productivity-application/src/app/app.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    ProductivityModule,
  ],
  declarations: [AppComponent, AboutComponent, ListComponent],
  bootstrap: [AppComponent],
  providers: [HttpClient],
})
export class AppModule {}
