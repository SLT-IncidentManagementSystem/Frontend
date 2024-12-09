import { Routes } from '@angular/router';
import { LandingLayoutComponent } from './layouts/landing-layout/landing-layout.component';
import { HomeComponent } from './pages/landing/home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: LandingLayoutComponent,
        children: [
            { path: '', component: HomeComponent },
        ]
    }
];
