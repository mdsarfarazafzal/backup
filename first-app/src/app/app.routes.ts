import { Routes } from '@angular/router';
import { CardComponent } from '../components/card/card.component';
import { ParentComponent } from '../components/parent/parent.component';
import { RegisterFormComponent } from '../components/register-form/register-form.component';
import { LoginComponent } from '../components/login/login.component';
import { authGuardGuard } from './guard/auth-guard.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
    },
    {
        path: 'app',
        component:ParentComponent
    },
  {
    path: 'user',
    component: CardComponent,
    canActivate: [authGuardGuard]
  }, {
    path: 'add-user',
    component:RegisterFormComponent
  }, {
    path: 'login',
    component:LoginComponent
  }
];
