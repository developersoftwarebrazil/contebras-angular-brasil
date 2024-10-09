import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/shared/page-component/header/header.component';
import { MenuComponent } from '../../components/shared/component/menu/menu.component';

@Component({
  selector: 'home-cpmponent',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    MenuComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
