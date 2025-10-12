import { Component } from '@angular/core';
import { SHARED_IMPORTS } from '../../../../shared';

@Component({
  standalone: true,
  selector: 'app-portfolio-page',
  imports: [...SHARED_IMPORTS],
  templateUrl: './portfolio-page.component.html',
  styleUrl: './portfolio-page.component.scss'
})
export class PortfolioPageComponent {

}
