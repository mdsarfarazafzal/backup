import { Component, inject, Input, OnInit, signal } from '@angular/core';
import { IUserInfo } from '../../app/models/interfaces/userInfo';
import { MasterService } from '../../app/services/master.service';
import { RouterLink } from '@angular/router';
import { LowerCasePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink, UpperCasePipe, LowerCasePipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {

  myService = inject(MasterService);

  profile = signal<IUserInfo | null>(null);

  ngOnInit(): void {
    this.myService.getUserInfo().subscribe((res: IUserInfo) => {
      this.profile.set(res);
    });
  }

}
