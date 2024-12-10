import { Routes } from '@angular/router';
import { LandingLayoutComponent } from './layouts/landing-layout/landing-layout.component';
import { HomeComponent } from './pages/landing/home/home.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { TelephoneComponent } from './pages/landing/telephone/telephone.component';
import { PeotvComponent } from './pages/landing/peotv/peotv.component';
import { BroadbandComponent } from './pages/landing/broadband/broadband.component';

export const routes: Routes = [
    {
        path: '',
        component: LandingLayoutComponent,
        children: [
            { path: '', component: HomeComponent },
            { path: 'telephone', component: TelephoneComponent},
            { path: 'peotv', component: PeotvComponent},
            { path: 'broadband', component: BroadbandComponent},
        ]
    },
    {
        path: 'auth',
        children: [
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent },
        ]
    }
];
