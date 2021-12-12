import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TimeBlockComponent } from './time-block/time-block.component';

const routes: Routes = [
  { path: 'productivity', component: TimeBlockComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [],
})
export class ProductivityRoutingModule {}
