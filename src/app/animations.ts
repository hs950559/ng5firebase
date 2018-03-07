import { transition, style, trigger, animate, state } from '@angular/animations';

export let fade = trigger('fade', [
  state('void', style({opacity: 0 })),
  transition('void <=> *', [
    animate(2000)
  ])
]);

export let slide = trigger('slide', [
  transition(':enter', [
    style({transform: 'translateX(-20px)'}),
    animate(300)
  ]),
  transition(':leave', [
    animate('300 1s ease-in', style({transform: 'translateX(-100%)'}))
  ])
]);
