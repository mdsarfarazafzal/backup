import { Component, Input } from '@angular/core';
import { MasterService } from '../../app/services/master.service';

@Component({
  selector: 'app-greeting',
  standalone: true,
  imports: [],
  templateUrl: './greeting.component.html',
  styleUrl: './greeting.component.css',
})
export class GreetingComponent {
  @Input() greeting: string = '';

  greeting2: string = '';

  constructor(private masterService: MasterService) {
    this.masterService.mySubject.subscribe((res: string) => {
      this.greeting2 = res;
    });
  }
}
