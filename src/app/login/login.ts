import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  uname : string = "";
   pwd : string = "";

   validateUser(){
    if(this.uname === this.pwd){
      // console.log("Success");
      location.href="home"
    }
    else{
      alert("Invalid");
    }
   }
  
}
