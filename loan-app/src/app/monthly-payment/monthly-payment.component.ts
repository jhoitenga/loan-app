/**
 * Title: monthly-payment.component.ts
 * Author: Jennifer Hoitenga
 * Date: October 4, 2023
 */

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-monthly-payment',
  templateUrl: './monthly-payment.component.html',
  styleUrls: ['./monthly-payment.component.scss'],
})
export class MonthlyPaymentComponent implements OnInit {
  @Input() monthlyPayment: number;

  constructor() {}

  ngOnInit(): void {}
}
