import { Component } from '@angular/core';
import { ProfilePicComponent } from '../profile-pic/profile-pic.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ProfilePicComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
