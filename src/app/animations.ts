import { animate, group, keyframes, query, state, style, transition, trigger } from '@angular/animations';

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

export const filterTrigger = trigger('filterAnimation', [
    transition(':enter', [
        style({ opacity: 0, width: 0 }),
        animate('900ms cubic-bezier(1,.12,.73,.92)', keyframes([
            style({ offset: 0, opacity: 0, width: 0 }),
            style({ offset: 0.8, opacity: 0.5, width: '*' }),
            style({ offset: 1, opacity: 1, width: '*' })
        ]))
    ]),
    transition(':leave', [
        animate('200ms cubic-bezier(.13,.9,.8,.1)', style({ opacity: 0, width: 0 }))
    ])
]);

export const formButtonTrigger = trigger('formButton', [
    transition('invalid => valid', [
        query('#botao-salvar', [
            group([
                animate(600, style({
                    backgroundColor: '#63B77C',
                })),
                animate(100, style({
                    transform: 'scale(1.1)',
                }))
            ]),
            animate(200, style({
                transform: 'scale(1)',
            }))
        ]),
    ]),
    transition('valid => invalid', [
        query('#botao-salvar', [
            group([
                animate(600, style({
                    backgroundColor: '#6C757D',
                })),
                animate(100, style({
                    transform: 'scale(1.1)',
                }))
            ]),
            animate(200, style({
                transform: 'scale(1)',
            }))
        ])
    ])
]);

//Ainda não consegui utilizar para aviso de lista vazia
export const flyInOutTrigger = trigger('flyInOut', [
    transition(':enter', [
        style({
            width: '100%',
            transform: 'translateX(-100%)',
            opacity: 0
        }),
        group([
            animate('0.3s 0.1s ease', style({
                transform: 'translateX(0)',
                width: '*'
            })),
            animate('0.3s ease', style({
                opacity: 1
            }))
        ])
    ]),
    transition(':leave', [
        group([
            animate('0.3s ease', style({
                transform: 'translateX(100%)',
                width: '*'
            })),
            animate('0.3s 0.2s ease', style({
                opacity: 0
            }))
        ])
    ])
]);