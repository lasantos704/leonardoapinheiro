import { Component } from '@angular/core';
import { SHARED_IMPORTS } from '../../shared';
import { LucideAngularModule, Github, Mail, Linkedin } from 'lucide-angular';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [...SHARED_IMPORTS, LucideAngularModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  readonly Github = Github;
  readonly Mail = Mail;
  readonly Linkedin = Linkedin;
}
