import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../app/models/classes/user';
import { UserService } from '../../app/services/user.service';
import { APIResponse } from '../../app/models/interfaces/APIResponse';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css',
})
export class RegisterFormComponent {
  userObj: User = new User();

  userService = inject(UserService);
  routing = inject(Router);

  errorMsg: string = '';

  createUser() {
    this.userService.addUser(this.userObj).subscribe(
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
        this.errorMsg = "Registration Failed";
      },
    );
  }
}
