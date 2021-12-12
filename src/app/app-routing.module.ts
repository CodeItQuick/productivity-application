import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeBlockComponent } from './productivity-page/time-block/time-block.component';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ListComponent } from './todo/list/list.component';
import { ProductivityRoutingModule } from './productivity-page/productivity-page-routing.module';

const routes: Routes = [
  { path: 'todo/list', component: ListComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
