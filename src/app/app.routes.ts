import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Login } from './login/login';
import { Customer } from './customer/customer';
import { Librarian } from './librarian/librarian';
import { StudentComponent } from './student/student';
import { Child } from './child/child';
import { Parent } from './parent/parent';
import { Activity } from './activity/activity';
import { Todos } from './todos/todos';

export const routes: Routes = [{
    path:"",
    component: Login
},{
    path:"home",
    component: Home
},{
    path:"customer",
    component: Customer
},{
    path:"librarian",
    component: Librarian
},{
    path:"student",
    component: StudentComponent
},{
    path:"child",
    component: Child
},{
    path:"parent",
    component: Parent
},{
    path:"activity",
    component: Activity
},{
    path:"todos",
    component: Todos
}];
