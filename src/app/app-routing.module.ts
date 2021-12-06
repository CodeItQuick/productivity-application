import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeBlockComponent } from './productivity-page/time-block.component';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'productivity', component: TimeBlockComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
