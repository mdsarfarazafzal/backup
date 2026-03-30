import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../app/services/user.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { APIResponse } from '../../app/models/interfaces/APIResponse';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  userService = inject(UserService);
  routing = inject(Router);
  errorMsg: string = '';

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  login() {
    this.userService
      .login(this.loginForm.value)
      .subscribe((res: APIResponse) => {
        if (res.success) {
          console.log('Login Successful!');
          console.table(res.data);
          this.loginForm = new FormGroup({
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [
              Validators.required,
              Validators.minLength(8),
            ]),
          });
          localStorage.setItem('user', JSON.stringify(res.data));
          this.routing.navigateByUrl('user');
        }
      },
        () => {
          this.errorMsg="Invalid Credentials"
        }
    );
  }
}
