import { Routes } from '@angular/router';
import { BooksListComponent } from './components/books/books-list/books-list.component';
import { AddBookComponent } from './components/books/add-book/add-book.component';
import { EditBookComponent } from './components/books/edit-book/edit-book.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path: 'books',
        component: BooksListComponent ,
    },
    {
        path: 'books/add',
        component: AddBookComponent 
    },
    {
        path: 'books/edit/:id',
        component: EditBookComponent 
    }
];
