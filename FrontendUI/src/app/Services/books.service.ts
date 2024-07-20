import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Book } from '../models/book.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.baseApiUrl + '/api/books');
  }

  addBook(addBookRequest: Book): Observable<Book> {
    const { id, ...bookWithoutId } = addBookRequest;
    return this.http.post<Book>(this.baseApiUrl + '/api/books', {...bookWithoutId, isbn: bookWithoutId.isbn.toString()});
  }

  getBook(id: string): Observable<Book> {
    return this.http.get<Book>(this.baseApiUrl + '/api/books/' + id);
  }

  updateBook(id: string, updateBookRequest: Book): Observable<Book> {
    const { id: updateId, ...bookWithoutId } = updateBookRequest;
    return this.http.put<Book>(this.baseApiUrl + '/api/books/' + id, {...bookWithoutId, isbn: bookWithoutId.isbn.toString()});
  }

  deleteBook(id: string): Observable<Book> {
    return this.http.delete<Book>(this.baseApiUrl + '/api/books/' + id);
  }
}
