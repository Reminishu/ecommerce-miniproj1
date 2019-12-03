import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/common/components/home/home.component';
import { CoursesComponent } from './modules/courses/components/courses/courses.component';
import { LoginComponent } from './modules/authen/components/login/login.component';
import { AboutComponent } from './modules/common/components/about/about.component';
import { combineAll } from 'rxjs/operators';
import { OrdersComponent } from './modules/orders/components/orders/orders.component';
import { AdminCoursesComponent } from './modules/admin/components/admin-courses/admin-courses.component';
import { LoginService } from './modules/authen/services/login.service';
import { AdminService } from './modules/admin/services/admin.service';
import { ShoppingCartComponent } from './modules/shoppingCart/components/shopping-cart/shopping-cart.component';
import { SuccessOrderComponent } from './modules/orders/components/success-order/success-order.component';
import { CourseContentComponent } from './modules/courses/components/course-content/course-content.component';


const routes: Routes = [

  {
    path:'',
    component:HomeComponent
  },
  {
    path:'courses',
    component:CoursesComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'orders',
    component:OrdersComponent,
    canActivate:[LoginService]
  },
  {
    path:'admin-courses',
    component:AdminCoursesComponent,
    canActivate:[LoginService,AdminService]
  },
  {
    path:'shooping-cart',
    component:ShoppingCartComponent
  },
  {
    path:'success-orde/:id',
    component:SuccessOrderComponent,
    canActivate:[LoginService]
  },
   {
     path:'course-content/:id',
     component:CourseContentComponent,
     canActivate:[LoginService]
   }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
