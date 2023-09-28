/*
 * Title: app.component.ts
 * Author: Jennifer Hoitenga
 * Date: September 28, 2023
 * Sources Used:
 * Angular Tutorial for Beginners: Layout Pages video by Professor Krasso (https://www.youtube.com/watch?v=9AsogopS9YM)
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // The title property holds the application title.
  title = 'Loan App';
}
