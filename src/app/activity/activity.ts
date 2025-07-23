import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-activity',
  imports: [FormsModule],
  templateUrl: './activity.html',
  styleUrl: './activity.css'
})
export class Activity {
  activity:String="";
  
  @Output() sendActivity = new EventEmitter<String>();
  addActivity(){
    this.sendActivity.emit(this.activity);
  }
}
