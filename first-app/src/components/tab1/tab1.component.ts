import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tab1',
  standalone: true,
  imports: [],
  templateUrl: './tab1.component.html',
  styleUrl: './tab1.component.css',
})
export class Tab1Component {
  @Input() msg: string = '';
  msgToParent: string = 'Hey Parent!';
  @Output() eventEmitter = new EventEmitter<string>();
  sendToParent(): void {
    this.eventEmitter.emit(this.msgToParent);
  }
}
