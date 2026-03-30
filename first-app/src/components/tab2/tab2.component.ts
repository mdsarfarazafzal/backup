import { Component, Input, output } from '@angular/core';

@Component({
  selector: 'app-tab2',
  standalone: true,
  imports: [],
  templateUrl: './tab2.component.html',
  styleUrl: './tab2.component.css'
})
export class Tab2Component {
  @Input() msg: string = '';
  msgToParent: string = 'Hey from child 2';
  dataToParent = output<string>();
  sendToParent() {
    this.dataToParent.emit(this.msgToParent);
  }
}
