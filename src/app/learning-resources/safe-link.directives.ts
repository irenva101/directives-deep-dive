import { Directive } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onConfirmLeavePage($event)',
  }
})
export class SafeLinkDirective {
  constructor() {
    console.log('SafeLink is ative!');
  }

  onConfirmLeavePage(event: MouseEvent) {
    const wantsToLeave = window.confirm('Do  you want to leave?');

    if (wantsToLeave) {
      return;
    }

    event.preventDefault();
  }
}
