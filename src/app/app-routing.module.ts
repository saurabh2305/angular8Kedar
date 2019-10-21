import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent,AboutComponent,DetailComponent, AddProductComponent,RegisterComponent, LoginComponent,NotFoundComponent } from './components'
import { Productresolver } from './resolvers';
import { AuthGuard } from './guards/auth.guard';
import { ConfirmGuard } from './guards';


const routes: Routes = [
  { path:'',component:HomeComponent,pathMatch:'full'},
  {path:'about',component:AboutComponent},
  
  {
    path:'detail/:id',
    component:DetailComponent,
    resolve:{
      item:Productresolver
  }
  },
  {
    path:'products/add',
    component:AddProductComponent,
    canActivate:[AuthGuard],
    canDeactivate:[ConfirmGuard]
},
  {path:'register', component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  {path:'**',component:NotFoundComponent},
  {path:'**',redirectTo:'/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
