/**
 * Title: total-interest.component.ts
 * Author: Jennifer Hoitenga
 * Date: October 4, 2023
 */

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-total-interest',
  templateUrl: './total-interest.component.html',
  styleUrls: ['./total-interest.component.scss'],
})
export class TotalInterestComponent implements OnInit {
  @Input() totalInterest: number;

  constructor() {}

  ngOnInit(): void {}
}
