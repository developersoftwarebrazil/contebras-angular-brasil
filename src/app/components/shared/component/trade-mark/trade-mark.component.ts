import { Component, Input } from '@angular/core';

@Component({
  selector: 'trade-mark-component',
  standalone: true,
  imports: [],
  templateUrl: './trade-mark.component.html',
  styleUrl: './trade-mark.component.scss'
})
export class TradeMarkComponent {

  @Input() imgSrc: string = '/assets/logo/logo.svg';
  @Input() imgAlt: string = 'logo marca cotenbras';
  @Input() logoText: string = 'Contebras';
}
