import { Component } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { Options, LabelType } from 'ng5-slider';

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public loanAmount: number = 0;
  public emiAmount: any = 0;

  public getLoanAmount(event: any): void {
    this.loanAmount = event
  }

  public getEmiAmount(event: any): void {
    this.emiAmount = event
  }

}
