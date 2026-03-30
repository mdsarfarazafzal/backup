import { Component } from '@angular/core';
import { GreetingComponent } from '../greeting/greeting.component';
import { NameComponent } from '../name/name.component';
import { InputComponent } from '../input/input.component';
import { TabsComponent } from '../tabs/tabs.component';
import { RouterLink } from '@angular/router';
import { AsyncPipe, DatePipe, JsonPipe } from '@angular/common';
import { interval, map, Observable } from 'rxjs';
import { MasterService } from '../../app/services/master.service';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [
    GreetingComponent,
    NameComponent,
    InputComponent,
    TabsComponent,
    RouterLink,
    DatePipe,
    AsyncPipe,
    JsonPipe,
  ],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent {
  sharedGreet: string = 'Hello,';

  today: Observable<Date> = new Observable<Date>();
  random: Observable<any> = new Observable<any>();

  constructor(private masterService: MasterService) {
    this.today = interval(1000).pipe(map(() => new Date()));
    // this.random = this.masterService.getUserInfo();
  }

  changeGreet(value: string) {
    this.sharedGreet = value;
  }
}
