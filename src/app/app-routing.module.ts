import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { FAQComponent } from './pages/faq/faq.component';
import { ForgotComponent } from './pages/forgot/forgot.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { RegisterComponent } from './pages/register/register.component';
import { SpellingComponent } from './pages/spelling/spelling.component';
import { TermsComponent } from './pages/terms/terms.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'spelling-dome', component: SpellingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'about-us', component: AboutComponent },
  { path: 'privacy', component:PrivacyComponent },
  { path: 'terms-and-conditions', component: TermsComponent },
  { path: 'FAQ', component:FAQComponent },
  { path: 'ForgotPassword', component: ForgotComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
