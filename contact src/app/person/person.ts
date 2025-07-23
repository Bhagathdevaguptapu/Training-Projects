import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './person.html',
  styleUrls: ['./person.css']
})
export class Person {
  name: string = '';
  number: string = '';

  @Output() personAdded = new EventEmitter<{ name: string; number: string }>();

  addPerson() {
    if (this.name.trim() && this.number.trim()) {
      this.personAdded.emit({ name: this.name, number: this.number });
    }
  }
}
