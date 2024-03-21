import { Component } from '@angular/core';
import { MESSAGES_EN } from './messages/en';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public messages_en = MESSAGES_EN;
}
