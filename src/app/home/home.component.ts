import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  courses$: Observable<any[]>;
  coursesRef: AngularFireList<any>;
  author$: Observable<any>;
  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.coursesRef = this.db.list('/courses');
    this.courses$ = this.coursesRef.valueChanges();

    this.author$ = this.db.object('/authors/1').valueChanges();
  }

  addCourse(course: HTMLInputElement) {
    console.log(course.value);
    this.coursesRef.push(course.value);
    course.value = '';
  }
}
