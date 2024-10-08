import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TradeMarkComponent } from '../trade-mark/trade-mark.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CommonModule,
    TradeMarkComponent
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

}
