import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { HomeComponent } from './home/home.component'
import { AuthGuard } from './auth.guard';
import { EditProfileComponent } from './edit-profile/edit-profile.component';


const routes: Routes = [
  {
      path: 'signup', component: UserComponent,
      children: [{ path: '', component: SignUpComponent }]
  },
  {
      path: 'login', component: UserComponent,
      children: [{ path: '', component: SignInComponent }]
  },
  {
      path: 'userprofile', component: UserProfileComponent,canActivate:[AuthGuard]
  },
  {
      path: 'home', component: HomeComponent
  },
  {
      path: 'editProfile', component: EditProfileComponent
  },
  {
      path: '', redirectTo: '/home', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
