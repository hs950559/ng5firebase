import { transition, style, trigger, animate, state, keyframes, animation, useAnimation } from '@angular/animations';

export let bounceOutLeftAnimation = animation(
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

export let slideInLeftAnimation = animation([
  style({transform: 'translateX(-120px)'}),
  animate(2000)
]);

export let fadeInAnimation = animation([
  style({opacity: 0 }),
  animate('{{ duration }} {{ easing }}')
], {
  params: {
    duration: '2s',
    easing: 'ease-out'
  }
});

export let fadeOutAnimation = animation([
  animate('{{ duration }} {{ easing }}', style({opacity: 0 }))
], {
  params: {
    duration: '2s',
    easing: 'ease-in'
  }
});

export let fade = trigger('fade', [
  transition(':enter', fadeInAnimation),
  transition(':leave', fadeOutAnimation)
]);

export let slide = trigger('slide', [
  transition(':enter', useAnimation(slideInLeftAnimation)),
  transition(':leave', useAnimation(bounceOutLeftAnimation))
]);
