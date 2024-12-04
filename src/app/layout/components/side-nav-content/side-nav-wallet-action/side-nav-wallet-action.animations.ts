import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

const animateIn = '0.20s ease-in';
const animateOut = '0.15s ease-out';

const styleIdle = { transform: 'translate3d(0, 0, 0)' };
const styleTop = { transform: 'translate3d(0, -200%, 0)' };
const styleRight = { transform: 'translate3d(100%, 0, 0)' };
const styleBottom = { transform: 'translate3d(0, 200%, 0)' };
const styleLeft = { transform: 'translate3d(-100%, 0, 0)' };

export const SideNavWalletActionAnimations = [
  trigger('hover', [
    state('*', style(styleIdle)),
    transition('* => in-left', [style(styleLeft), animate(animateIn)]),
    transition('* => in-right', [style(styleRight), animate(animateIn)]),
    transition('* => in-top', [
      animate(animateIn, style(styleBottom)),
      style(styleTop),
      animate(animateIn),
    ]),
    transition('* => in-bottom', [
      animate(animateIn, style(styleTop)),
      style(styleBottom),
      animate(animateIn),
    ]),
    transition('* => out-right', [animate(animateOut, style(styleRight))]),
    transition('* => out-left', [animate(animateOut, style(styleLeft))]),
    transition('* => out-top', [
      animate(animateOut, style(styleBottom)),
      style(styleTop),
      animate(animateOut),
    ]),
    transition('* => out-bottom', [
      animate(animateOut, style(styleTop)),
      style(styleBottom),
      animate(animateOut),
    ]),
  ]),
];
