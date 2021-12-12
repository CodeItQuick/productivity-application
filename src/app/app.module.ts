import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductivityModule } from 'projects/productivity-application/src/app/app.module';
import { ToDoApplicationModule } from 'projects/to-do-application/src/app/app.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    ProductivityModule,
    ToDoApplicationModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [HttpClient],
})
export class AppModule {}
