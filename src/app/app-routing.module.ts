import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from 'projects/static-pages/src/lib/landing-page/landing-page.component';
import { AboutComponent } from 'static-pages';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'landing-page', component: LandingPageComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
