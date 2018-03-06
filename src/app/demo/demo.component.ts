import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { transition, style, trigger, animate } from '@angular/animations';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({opacity: 0 }),
        animate(2000)
      ]),
      transition('* => void', [
        animate(2000, style({opacity: 0 }))
      ])
  ])
]
})
export class DemoComponent {
  booksRef: AngularFireList<any>;
  books: Observable<any[]>;

  constructor(db: AngularFireDatabase) {
    this.booksRef = db.list('books');
    // Use snapshotChanges().map() to store the key
    this.books = this.booksRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }
  addBook(book) {
    this.booksRef.push({
      title: book.value,
      author: 'Hemant',
      price: 0
    });
  }
  updateBook(book) {
    this.booksRef.update(book.key, {
      title: book.title + ' UPDATED!'
    });
  }
  removeBook(book) {
    this.booksRef.remove(book.key);
  }

  removeAllBook() {
    this.booksRef.remove();
  }
}
