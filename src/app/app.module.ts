import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './public/home/home.component';
import { LoginComponent } from './public/login/login.component';
import { RegisterComponent } from './public/register/register.component';
import { Page404Component } from './public/page404/page404.component';
import { DashboardComponent } from './private/shared/dashboard/dashboard.component';
import { SidebarComponent } from './private/shared/sidebar/sidebar.component';
import { TopbarComponent } from './private/shared/topbar/topbar.component';
import { AddcategoryComponent } from './private/admin/category/addcategory/addcategory.component';
import { ListcategoryComponent } from './private/admin/category/listcategory/listcategory.component';
import { UpdatecategoryComponent } from './private/admin/category/updatecategory/updatecategory.component';
import { AddofferComponent } from './private/admin/offer/addoffer/addoffer.component';
import { UpdateofferComponent } from './private/admin/offer/updateoffer/updateoffer.component';
import { ListofferComponent } from './private/admin/offer/listoffer/listoffer.component';
import { FooterComponent } from './public/shared/footer/footer.component';
import { NavbarComponent } from './public/shared/navbar/navbar.component';
import { ContactComponent } from './public/contact/contact.component';
import { ClientManagementComponent } from './private/client/client-management/client-management.component';
import { HousesComponent } from './public/houses/houses.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { DemandListComponent } from './private/admin/demand/demand-list/demand-list.component';
import { DemandDetailsComponent } from './private/admin/demand/demand-details/demand-details.component';
import { MyOrdersComponent } from './private/client/order/my-orders/my-orders.component';
import { MyOrdersDetailsComponent } from './private/client/order/my-orders-details/my-orders-details.component';
import { ProfilComponent } from './private/client/profil/profil.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    Page404Component,
    DashboardComponent,
    SidebarComponent,
    TopbarComponent,
    AddcategoryComponent,
    ListcategoryComponent,
    UpdatecategoryComponent,
    AddofferComponent,
    UpdateofferComponent,
    ListofferComponent,
    FooterComponent,
    NavbarComponent,
    ContactComponent,
    ClientManagementComponent,
    HousesComponent,
    DemandListComponent,
    DemandDetailsComponent,
    MyOrdersComponent,
    MyOrdersDetailsComponent,
    ProfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    HttpClientModule, 
    ReactiveFormsModule,
    ToastNoAnimationModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
