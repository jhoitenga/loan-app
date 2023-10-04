/*
 * Title: app-routing.module.ts
 * Author: Jennifer Hoitenga
 * Date: September 28, 2023
 * Sources Used:
 * Angular Tutorial for Beginners: Layout Pages video by Professor Krasso (https://www.youtube.com/watch?v=9AsogopS9YM)
 * Angular Tutorial for Beginners: Reactive Forms video by Professor Krasso (https://www.youtube.com/watch?v=OFBL4bKno_s)
 */

// Import necessary Angular and Angular Material components, modules, and forms related items
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '', // Default route, maps to Home page.
    component: HomeComponent,
  },
  {
    path: 'home', // Route for the Home page.
    component: HomeComponent,
  },
  {
    path: 'about-us', // Route for the About Us page.
    component: AboutUsComponent,
  },
  {
    path: 'contact-us', // Route for the Contact us page.
    component: ContactUsComponent,
  },
  {
    path: '**', // This will catch all other routes.
    redirectTo: 'not-found', // Redirect to the 'not-found' page.
  },
  {
    path: 'not-found',
    component: NotFoundComponent, // Route for displaying "Not Found" page.
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
