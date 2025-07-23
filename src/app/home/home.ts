import { Component } from '@angular/core';
import { Book } from '../model/book.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  books: Book[] =[
    new Book(1, "Java", "James Gosling"),
    new Book(2, "React", "Facebook"),
    new Book(3, "Angular", "Google"),
  ];
}
