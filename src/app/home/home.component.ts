import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  coursesRef: AngularFireList<any>;
  courses: Observable<any[]>;
  author: Observable<any>;

  constructor(db: AngularFireDatabase) {
    this.coursesRef = db.list('courses');
    // Use snapshotChanges().map() to store the key
    this.courses = this.coursesRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
    this.author = db.object('authors/1').valueChanges();
  }
  addCourse(course) {
    this.coursesRef.push({
      author: course.value,
      isPremium: false,
      students: 0
    });
  }
  updateCourse(course) {
    this.coursesRef.update(course.key, {
      author: course.author + ' UPDATED!',
      isPremium: false,
      students: 0
    });
  }
  removeCourse(course) {
    this.coursesRef.remove(course.key);
  }

  removeAllBook() {
    this.coursesRef.remove();
  }
}
