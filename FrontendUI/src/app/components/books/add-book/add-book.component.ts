import { Component, OnInit } from '@angular/core';
import { Book } from '../../../models/book.model';
import { BooksService } from '../../../Services/books.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [ RouterModule, CommonModule, FormsModule ],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent implements OnInit {

  addBookRequest: Book = {
    id:'',
    title: '',
    author: '',
    isbn: '',
    publicationDate: ''
  }

  constructor(private bookService: BooksService, private router: Router) { }

  ngOnInit(): void {
  }

  addBook() {
    this.bookService.addBook(this.addBookRequest).subscribe({ next: (book) => {
      this.router.navigate(['books']);
    }})
  }
}
