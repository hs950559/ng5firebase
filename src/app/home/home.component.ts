import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  courses$: Observable<any[]>;
  author$: Observable<any>;
  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.courses$ = this.db.list('/courses').valueChanges();
    this.author$ = this.db.object('/authors/1').valueChanges();
  }

}
