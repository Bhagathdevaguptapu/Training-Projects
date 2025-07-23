import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // <-- add this
import { Person } from '../person/person';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, Person], // <-- include CommonModule here
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class Contact {
  contacts: { name: string, number: string }[] = [];
  searchName: string = '';

  addContact(newContact: { name: string; number: string }) {
    this.contacts = [...this.contacts, newContact];
  }

  deleteContact(index: number) {
    this.contacts.splice(index, 1);
  }

  get filteredContacts() {
    const search = this.searchName.toLowerCase();
    return this.contacts.filter(contact =>
      contact.name.toLowerCase().includes(search)
    );
  }
}
