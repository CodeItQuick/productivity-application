import { NgModule } from '@angular/core';
import { StaticPagesComponent } from './static-pages.component';
import { AboutComponent } from './about/about.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  declarations: [StaticPagesComponent, AboutComponent, LandingPageComponent],
  imports: [],
  exports: [StaticPagesComponent, AboutComponent],
})
export class StaticPagesModule {}
