/**
 * Title: home.component.ts
 * Author: Jennifer Hoitenga
 * Date: September 28, 2023
 * Sources Used:
 * Angular Tutorial for Beginners: Navigation and Layout with Angular Material video by Professor Krasso (https://www.youtube.com/watch?v=Wif3MsDN7Pg)
 * Angular Tutorial for Beginners: Data Tables with Angular Material video by Professor Krasso (https://www.youtube.com/watch?v=VvHoy5CtFIE)
 * WEB 425 Capstone Requirements Instructions
 * How to Find Interest Rate: https://www.indeed.com/career-advice/career-development/how-to-find-interest-rate
 * Reset FormGroup https://angular.io/api/forms/FormGroup
 */

// Import necessary Angular and Angular Material components, modules, and forms related items
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  // Initialize variables
  monthlyPayment = 0;
  totalInterest = 0;
  principle: number;
  ratePerPeriod: number;
  numberOfPayments: number;

  // Initialize a FormGroup for the loan form using FormBuilder
  loanForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Initialize the loan form with validation rules
    this.loanForm = this.fb.group({
      loanAmount: [
        '',
        [
          Validators.required, // Field is required
          Validators.pattern('^[0-9]*$'), // Only numeric input allowed
        ],
      ],
      interestRate: [
        '',
        [
          Validators.required, // Field is required
          Validators.pattern('^[0-9]*(.[0-9]+)?$'), // Numeric input with optional decimal
        ],
      ],
      numYears: [
        '',
        [
          Validators.required, // Field is required
          Validators.pattern('^[0-9]*$'), // Only numeric input allowed
        ],
      ],
    });
  }

  calculate() {
    // Get the form values
    let formValues = this.loanForm.value;

    // Extract loan amount, interest rate, and number of years
    this.principle = formValues.loanAmount;
    let interestRate = formValues.interestRate;
    let numYears = formValues.numYears;

    // Calculate the number of payments and rate per period
    this.numberOfPayments = numYears * 12;
    this.ratePerPeriod = interestRate / 100 / 12;

    // Calculate the monthly payment using the provided formula
    this.monthlyPayment =
      (this.principle *
        (this.ratePerPeriod *
          Math.pow(this.ratePerPeriod + 1, this.numberOfPayments))) /
      (Math.pow(1 + this.ratePerPeriod, this.numberOfPayments) - 1);

    // Calculate the total interest paid
    this.totalInterest =
      this.monthlyPayment * this.numberOfPayments - this.principle;

    // Log the results to the console
    console.log('Monthly Payment:', this.monthlyPayment);
    console.log('Total Interest:', this.totalInterest);
  }

  // Function to access form controls
  get form() {
    return this.loanForm.controls;
  }

  // Function to clear the form
  clearForm() {
    this.loanForm.reset(); // Reset the form to its initial state
    this.monthlyPayment = 0; // Reset monthlyPayment to 0
    this.totalInterest = 0; // Reset totalInterest to 0
  }
}
