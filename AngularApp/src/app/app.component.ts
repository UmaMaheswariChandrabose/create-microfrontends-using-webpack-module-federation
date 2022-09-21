import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularApp';
  @Input() caloriesValue = '';

  onChange(event: any) {
    document.dispatchEvent(new CustomEvent('angular-input-event', { detail: event.target.value }));
  }
}
