import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TradeMarkComponent } from '../../component/trade-mark/trade-mark.component';

@Component({
  selector: 'header-component',
  standalone: true,
  imports: [
    CommonModule,
    TradeMarkComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
