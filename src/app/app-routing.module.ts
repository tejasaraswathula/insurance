import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DummyComponent } from './dummy/dummy.component';

const routes: Routes = [
  {path: '', redirectTo: '/dummy', pathMatch: 'full'},
  {path: 'dummy', component: DummyComponent},
  {path: 'login', component: LoginComponent},
];

// const routes: Routes = [
  //   {path: 'employees',component:EmployeeListComponent},
  //   {path:'departments/:id',component:DepartmentDetailComponent,
  //   children:[
  //     {path:'overview',component:DepartmentOverviewComponent},
  //     {path:'contact',component:DepartmentContactComponent}
  //   ]
  // },
//     {path: "**",component:PageNotFoundComponent}
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})




export class AppRoutingModule { }
