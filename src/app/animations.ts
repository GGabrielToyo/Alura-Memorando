import { animate, state, style, transition, trigger } from '@angular/animations';

export const highlightedTrigger = trigger('highlightedState', [
    state('default', style({
        border: '2px solid #B2B6FF'
    })),
    state('highlighted', style({
        border: '4px solid #B2B6FF',
        filter: 'brightness(90%)'
    })),
    transition('default => highlighted', [
        animate('2ms ease-in', style({
            tranform: 'scale(1.02)'
        })),
        animate(100),
    ])
]);

export const shownStateTrigger = trigger('shownState', [
    transition(':enter', [
        style({
            opcacity: 0
        }),
        animate(300, style({
            opacity: 1
        }))
    ]),
    transition(':leave', [
        animate(300, style({
            opacity: 0
        }))
    ])
]);

export const checkButtonTrigger = trigger('checkButton', [
    transition('* => checked', [
        animate('400ms ease-in', style({
            transform: 'scale(0.4)'
        }))
    ])
]);
