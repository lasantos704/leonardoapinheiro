import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { catchError, of } from 'rxjs';
import { PortfolioData, PortfolioState } from '../models/portfolio.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private http = inject(HttpClient);

  private state = signal<PortfolioState>({
    data: null,
    loading: true,
    error: null,
  });

  public data = computed(() => this.state().data);
  public loading = computed(() => this.state().loading);
  public error = computed(() => this.state().error);

  public experiences = computed(() => this.data()?.experiences ?? []);
  public educations = computed(() => this.data()?.educations ?? []);
  public info = computed(() => this.data());

  public loadInfo() {
    this.state.update((s) => ({ ...s, loading: true }));
    this.http
      .get<PortfolioData>('http://localhost:3000/portfolio')
      .pipe(
        catchError((err) => {
          this.state.update((s) => ({
            ...s,
            error: err.message,
            loading: false,
          }));
          return of(null);
        })
      )
      .subscribe((response) => {
        if (response) {
          this.state.set({ data: response, loading: false, error: null });
        }
      });
  }
}
