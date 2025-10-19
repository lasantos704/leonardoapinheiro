import { Component, Input } from '@angular/core';
import { SHARED_IMPORTS } from '../../../../shared';

@Component({
  selector: 'app-portfolio-card',
  imports: [...SHARED_IMPORTS],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() title: string = '';
  @Input() hasFooter: boolean = false;
  @Input() hasBadge: boolean = false;
  @Input() skills: string[] = [];
}
