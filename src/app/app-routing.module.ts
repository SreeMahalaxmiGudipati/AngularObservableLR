import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  // {path:'',component:ParentComponent},
  { path: '', redirectTo: '/parent', pathMatch: 'full' },
  {path:'parent',component:ParentComponent},
  {path:'',
      children:[
        {path:'parent/login',component:LoginComponent},
        {path:'parent/register',component:RegisterComponent}
      ]}
  // {path:'login',component:LoginComponent},
  // {path:'register',component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
