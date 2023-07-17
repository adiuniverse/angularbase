import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { ReusableLoginComponent } from './reusable-login/reusable-login.component';
import { StudentLoginComponent } from './student-login/student-login.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'contact',component:ContactComponent},
  {path:'about',component:AboutComponent},
  {path: 'student', loadChildren: () => import('./student/student.module').then(m => m.StudentModule) },
  {path:'reactive',component:ReactiveComponent},
  {path:'reusable-login',component:ReusableLoginComponent},
  {path:'student-login',component:StudentLoginComponent},
  {path:'admin-login',component:AdminLoginComponent},
  {path:'**',component:PagenotfoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
