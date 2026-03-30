import { Component, inject } from '@angular/core';
import { User } from '../../models/classes/user';
import { UserService } from '../../services/user.service';
import { Router, RouterLink } from '@angular/router';
import { APIResponse } from '../../models/interfaces/APIResponse';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  userObj: User = new User();

  userService = inject(UserService);
  routing = inject(Router);

  errorMsg: string = '';

  createUser() {
    this.userService.register(this.userObj).subscribe(
      (res: APIResponse) => {
        if (res.success) {
          console.log('User Registration Successful!');
          console.table(res.data);
          this.userObj = new User();
          this.routing.navigateByUrl('login');
        } else {
          alert('Registration Failed');
        }
      },
      () => {
        this.errorMsg = 'Registration Failed';
      },
    );
  }
}
