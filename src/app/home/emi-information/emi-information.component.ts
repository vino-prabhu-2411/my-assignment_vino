import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-emi-information-section',
  templateUrl: './emi-information.component.html',
  styleUrls: ['./emi-information.component.scss']
})
export class EMIInformationComponent {
  @Input() public loanAmount: any;
  @Input() public emiAmount: any;
}
