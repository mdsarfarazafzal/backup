import { Component } from '@angular/core';

@Component({
  selector: 'app-name',
  standalone: true,
  imports: [],
  templateUrl: './name.component.html',
  styleUrl: './name.component.css',
})
export class NameComponent {
  condition: boolean = true;
  toggle(condition: boolean): void {
    this.condition = condition;
  }
}
