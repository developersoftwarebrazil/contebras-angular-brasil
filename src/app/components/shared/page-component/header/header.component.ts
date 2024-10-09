import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TradeMarkComponent } from '../../component/trade-mark/trade-mark.component';
import { MenuComponent } from '../../component/menu/menu.component';

@Component({
  selector: 'header-component',
  standalone: true,
  imports: [
    CommonModule,
    TradeMarkComponent,
    MenuComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
