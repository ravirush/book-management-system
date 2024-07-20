import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from '../../../Services/books.service';
import { Book } from '../../../models/book.model';

@Component({
  selector: 'app-edit-book',
  standalone: true,
  imports: [ CommonModule, FormsModule ],
  templateUrl: './edit-book.component.html',
  styleUrl: './edit-book.component.css'
})
export class EditBookComponent implements OnInit {

  bookDetails: Book = {
    id:'',
    title: '',
    author: '',
    isbn: '',
    publicationDate: ''
  };

  constructor(private route: ActivatedRoute, private bookService: BooksService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if(id) {
          this.bookService.getBook(id)
          .subscribe({
            next: (response) => {
              this.bookDetails = response;
            }
          })
        }
      }  
    });
  }

  updateBook() {
    this.bookService.updateBook(this.bookDetails.id, this.bookDetails)
    .subscribe({
      next: (response) => {
        this.router.navigate(['books']);
      }
    });
  }

  deleteBook(id: string) {
    this.bookService.deleteBook(id)
    .subscribe({
      next: (response) => {
        this.router.navigate(['books']);
      }
    });
  }
}
