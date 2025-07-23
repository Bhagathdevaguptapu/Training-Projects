import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { Person } from './person/person';

export const routes: Routes = [{
    path: "home",
    component: Home
},{
    path: "contact",
    component: Contact
},{
    path: "person",
    component: Person
}];
