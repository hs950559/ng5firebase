import { transition, style, trigger, animate, state, keyframes, animation } from '@angular/animations';

export let bounceOutLeft = animation(
  animate('5s cubic-bezier(1,.25,.05,.99)', keyframes([
    // 20%
    style({
      offset: .2,
      opacity: 1,
      transform: 'translate3d(120px, 0, 0)'
    }),
    // 100%
    style({
      offset: 1,
      opacity: 0,
      transform: 'translate3d(-100%, 0, 0)'
    })
  ]))
);

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
  transition(':leave', bounceOutLeft)
]);
