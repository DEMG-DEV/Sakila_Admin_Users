import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../components/home/home.component';
import { LoginComponent } from '../components/login/login.component';
import { UserComponent } from '../components/user/user.component';
import { UpdateUserComponent } from '../components/updateUser/updateUser.component';


const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', component: LoginComponent },
    { path: 'user', component: UserComponent },
    { path: 'updateUser/:user_id', component: UpdateUserComponent },
    { path: '**', redirectTo: 'home' },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
