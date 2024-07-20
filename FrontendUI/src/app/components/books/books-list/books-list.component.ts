import { Component, OnInit } from '@angular/core';
import { Book } from '../../../models/book.model';
import {  CommonModule, NgFor, NgIf } from '@angular/common';
import { BooksService } from '../../../Services/books.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-books-list',
  standalone: true,
  imports: [ NgIf, NgFor, CommonModule, RouterModule ],
  templateUrl: './books-list.component.html',
  styleUrl: './books-list.component.css'
})
export class BooksListComponent implements OnInit {

  books: Book[] = [];

  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
    this.booksService.getAllBooks()
    .subscribe({
      next: (books) => {
        this.books = books;
      },
      error: (response) => {
        console.log(response);
      }
    })
  }
}
