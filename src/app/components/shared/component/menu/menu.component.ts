import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TradeMarkComponent } from '../trade-mark/trade-mark.component';

@Component({
  selector: 'menu-component',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TradeMarkComponent
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  @Input() navPrimaryClass!: string;
  @Input() navSecondaryClass!: string;
  @Input() divPrimaryClass!: string;
  @Input() divSecondaryClass!: string;
  @Input() ulPrimaryClasses!: string;
  @Input() ulSecondaryClasses!: string;
  @Input() imgPrimaryClass!: string;
  @Input() ariaLabel!: string;

  // Items dos Menus
  @Input() primaryNavItems: { icon: string, alt: string, label: string, link: string, classes?: string }[] = [];
  @Input() secondaryNavItems: { label: string, link: string, classes?: string }[] = [];

  // Classes de background para menus
  @Input() primaryBgClass!: string;
  @Input() secondaryBgClass!: string;
}
