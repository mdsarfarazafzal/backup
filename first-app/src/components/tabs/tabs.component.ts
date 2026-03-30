import { Component } from '@angular/core';
import { Tab1Component } from '../tab1/tab1.component';
import { Tab2Component } from '../tab2/tab2.component';
import { CommonModule } from '@angular/common';
import { NaPipe } from '../../app/pipe/na.pipe';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [Tab1Component, Tab2Component, CommonModule, NaPipe],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css',
})
export class TabsComponent {
  currentTab: string = 'Tab1';

  pass: string = this.currentTab == 'Tab1' ? 'This is Tab1' : 'This is Tab2';

  msgFromChild: string = '';

  recieveMessage(msg:string) {
    this.msgFromChild = msg;
  }

  toggleTab(tab: string) {
    this.currentTab = tab;
    this.pass = this.currentTab == 'Tab1' ? 'This is Tab1' : 'This is Tab2';
  }
}
