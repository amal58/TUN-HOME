import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';
import { ClientGuard } from './guards/client.guard';
import { AddcategoryComponent } from './private/admin/category/addcategory/addcategory.component';
import { ListcategoryComponent } from './private/admin/category/listcategory/listcategory.component';
import { UpdatecategoryComponent } from './private/admin/category/updatecategory/updatecategory.component';
import { DemandDetailsComponent } from './private/admin/demand/demand-details/demand-details.component';
import { DemandListComponent } from './private/admin/demand/demand-list/demand-list.component';
import { AddofferComponent } from './private/admin/offer/addoffer/addoffer.component';
import { ListofferComponent } from './private/admin/offer/listoffer/listoffer.component';
import { UpdateofferComponent } from './private/admin/offer/updateoffer/updateoffer.component';
import { ClientManagementComponent } from './private/client/client-management/client-management.component';
import { MyOrdersDetailsComponent } from './private/client/order/my-orders-details/my-orders-details.component';
import { MyOrdersComponent } from './private/client/order/my-orders/my-orders.component';
import { ProfilComponent } from './private/client/profil/profil.component';
import { DashboardComponent } from './private/shared/dashboard/dashboard.component';
import { ContactComponent } from './public/contact/contact.component';
import { HomeComponent } from './public/home/home.component';
import { HousesComponent } from './public/houses/houses.component';
import { LoginComponent } from './public/login/login.component';
import { Page404Component } from './public/page404/page404.component';
import { RegisterComponent } from './public/register/register.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "login",
    component:LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate:[AuthGuard]
  },
  
  {
    path:'admin/category/list',
    component:ListcategoryComponent,
    canActivate:[AdminGuard]
    
    
  }
  ,
   {
    path:'admin/category/add',
    component:AddcategoryComponent,
    canActivate:[AdminGuard]
    
    
  },
   {
    path:'admin/category/update/:id',
    component:UpdatecategoryComponent,
    canActivate:[AdminGuard]
    
    
  },
  {
    path:'admin/offer/list',
    component:ListofferComponent,
    canActivate:[AdminGuard]
    
  },
  {
    path:'admin/offer/add',
    component:AddofferComponent,
    canActivate:[AdminGuard]
   

  },
  {
    path:'admin/offer/update/:id',
    component:UpdateofferComponent,
    canActivate:[AdminGuard]

  },
  {
    path:'client/client-management',
    component:ClientManagementComponent,
    canActivate:[AdminGuard]

  },
  {
    path:'houses',
    component:HousesComponent

  },
  {
    path:'demand/list',
    component:DemandListComponent,
    canActivate:[AdminGuard]

  },
  {
    path:'demand/details',
    component:DemandDetailsComponent,
    canActivate:[AdminGuard]

  },
  {
    path:'myorders/details',
    component:MyOrdersDetailsComponent,
    canActivate:[ClientGuard]

  },
  {
    path:'myorders',
    component:MyOrdersComponent,
    canActivate:[ClientGuard]

  },
  {
    path:'profil',
    component:ProfilComponent,
    canActivate:[ClientGuard]

  },

  
  {
    path:'**',
    component:Page404Component
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
