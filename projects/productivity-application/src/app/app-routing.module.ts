import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimeBlockComponent } from './productivity-page/time-block/time-block.component';

const routes: Routes = [
  { path: 'productivity', component: TimeBlockComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
