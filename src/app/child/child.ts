import { Component, Input , SimpleChanges} from '@angular/core';
import { Book } from '../model/book.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-child',
  imports: [CommonModule],
  templateUrl: './child.html',
  styleUrl: './child.css'
})
export class Child {
    books: Book[] =[
        new Book(1, "Java", "James Gosling"),
        new Book(2, "React", "Facebook"),
        new Book(3, "Angular", "Google"),
        new Book(4, "Spring", "Oracle"),
        new Book(1, "Java", "Oracle"),
        new Book(2, "React JS", "Facebook"),
      ];

      @Input() titleVal:String="";


      filteredBooks: Book[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['titleVal']) {
      this.filterBooks();
    }
  }

  filterBooks() {
    const search = this.titleVal.toLowerCase();
    this.filteredBooks = this.books.filter(book =>
      book.title.toLowerCase().includes(search) || book.author.toLowerCase().includes(search)
    );
  }

  constructor() {
    this.filteredBooks = this.books;
  }
}