import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Child } from '../child/child';

@Component({
  selector: 'app-parent',
  imports: [FormsModule, Child],
  templateUrl: './parent.html',
  styleUrl: './parent.css'
})
export class Parent {
    title:String="";
}
