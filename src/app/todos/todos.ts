import { Component } from '@angular/core';
import { Activity } from '../activity/activity';

@Component({
  selector: 'app-todos',
  imports: [Activity],
  templateUrl: './todos.html',
  styleUrl: './todos.css'
})
export class Todos {
  activities: String[]=["coding","testing"];
  receiveActivity($event: String){
    this.activities=[...this.activities,$event]
  }

}