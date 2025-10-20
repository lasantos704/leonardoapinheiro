import {
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { SHARED_IMPORTS } from '../../shared';
import { DataService } from './services/data.service';

@Component({
  standalone: true,
  selector: 'app-portfolio',
  imports: [...SHARED_IMPORTS],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent implements OnInit {
  private dataService = inject(DataService);
  public experiences = this.dataService.experiences;
  public educations = this.dataService.educations;
  public info = this.dataService.info;
  public loading = this.dataService.loading;

  ngOnInit(): void {
    this.dataService.loadInfo();
  }
}
