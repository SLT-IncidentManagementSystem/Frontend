import { Routes } from '@angular/router';
import { LandingLayoutComponent } from './layouts/landing-layout/landing-layout.component';
import { HomeComponent } from './pages/landing/home/home.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { TelephoneComponent } from './pages/landing/telephone/telephone.component';
import { PeotvComponent } from './pages/landing/peotv/peotv.component';
import { BroadbandComponent } from './pages/landing/broadband/broadband.component';
import { PaymentComponent } from './pages/landing/payment/payment.component';
import { CustomerLayoutComponent } from './layouts/customer-layout/customer-layout.component';
import { PendingRequestsComponent } from './pages/customer/pending-requests/pending-requests.component';
import { HistoryComponent } from './pages/customer/history/history.component';
import { ProfileComponent } from './pages/customer/profile/profile.component';

export const routes: Routes = [
    {
        path: '',
        component: LandingLayoutComponent,
        children: [
            { path: '', component: HomeComponent },
            { path: 'telephone', component: TelephoneComponent},
            { path: 'peotv', component: PeotvComponent},
            { path: 'broadband', component: BroadbandComponent},
            { path: 'paymentConfirmation', component: PaymentComponent},
        ]
    },
    {
        path: 'auth',
        children: [
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent },
        ]
    },
    {
        path: 'customer',
        component: CustomerLayoutComponent,
        children: [
            { path: '', component: PendingRequestsComponent },
            { path: 'history', component: HistoryComponent },
            { path: 'profile', component: ProfileComponent },
        ]
    }
];
