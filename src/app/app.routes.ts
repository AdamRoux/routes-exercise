import { Routes } from '@angular/router'
import { MenuComponent } from './menu/menu.component';
import { SignupComponent } from './signup/signup.component';
import { UserProfileComponent } from './user-profile/user-profile.component'

const ROUTES: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'menu', component: MenuComponent}
];

export { ROUTES };