import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'my-eligibility-calculator',
  templateUrl: './eligibility-calculator.component.html',
  styleUrls: ['./eligibility-calculator.component.scss']
})
export class EligibilityCalculatorComponent {
  public tenureValue: any;
  public loanAmount: number = 0;
  public emiAmount: any = 0;
  public otherEmi: any;
  public selectedTenure: any;
  public incomeAmount: number = 100000;
  public expenseAmount: number = 1000;
  @Output() public loanAmountVal: EventEmitter<any> = new EventEmitter();
  @Output() public emiAmountVal: EventEmitter<any> = new EventEmitter();;
  public tenure = [
    { value: 5, viewValue: '5 Months' },
    { value: 10, viewValue: '10 Months' },
    { value: 15, viewValue: '15 Months' },
    { value: 20, viewValue: '20 Months' },
    { value: 25, viewValue: '25 Months' },
    { value: 30, viewValue: '30 Months' },
    { value: 35, viewValue: '35 Months' },
    { value: 40, viewValue: '40 Months' },
    { value: 45, viewValue: '45 Months' },
    { value: 50, viewValue: '50 Months' },
    { value: 55, viewValue: '55 Months' },
    { value: 60, viewValue: '60 Months' }
  ];


  public pitch(event: any): void {
    this.incomeAmount = event.value;
    this.getLoanValue();
  }

  public expenseChange(event: any): void {
    this.expenseAmount = event.value;
    this.getLoanValue();
  }

  private getLoanValue(): void {
    this.loanAmount = this.otherEmi ? (this.incomeAmount) - (this.expenseAmount) - parseInt(this.otherEmi) : (this.incomeAmount) - (this.expenseAmount);
    this.emiAmount = this.selectedTenure && this.loanAmount ? this.loanAmount / this.selectedTenure : 0;
    this.loanAmountVal.emit(this.loanAmount)
    this.emiAmountVal.emit(this.emiAmount)
  }

  public onValueChange(): void {
    this.getLoanValue();
  }

}
