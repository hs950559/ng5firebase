import { Component, OnInit, Input } from '@angular/core';
import { state, style, transition, trigger, animate } from '@angular/animations';

@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.scss'],
  animations: [
    trigger('expandCollapse', [
      state('collapsed', style({
        height: 0,
        paddingTop: 0,
        paddingBottom: 0,
        overflow: 'hidden',
        opacity: 0
      })),

      transition('collapsed => expanded', [
        animate('500ms ease-out', style({
          height: '*',
          padding: '*',
          overflow: 'auto'
        })),
        animate('1s', style({
          opacity: 1
        }))
      ]),

      transition('expanded => collapsed', [
        animate('10s ease-in')
      ])
    ])
  ]
})
export class ZippyComponent {
  @Input('title') title: string;
  isExpanded: boolean;

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
