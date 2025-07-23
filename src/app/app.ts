import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { FormsModule } from '@angular/forms';
import { Login } from './login/login';
import { StudentComponent } from './student/student';
import { Child } from './child/child';
import { Parent } from './parent/parent';

@Component({
  selector: 'app-root',                                
  imports: [RouterOutlet,FormsModule,RouterOutlet,Home,Login,StudentComponent,Child,Parent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // a: string = "welcome to coforge";
  // displayValue(){
  //   console.log("Hello!!!",this.a)
// }
   
}
