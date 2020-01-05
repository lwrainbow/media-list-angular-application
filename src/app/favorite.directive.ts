// HostBinding bind a host element property to a directive property
import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[mwFavorite]'
})

export class FavoriteDirective {
  @HostBinding('class.is-favorite') isFavorite = true; // add class is-favorite when isFavorite equal true
  @Input() set mwFavorite(value) {
    this.isFavorite = value;
  }

  @HostBinding('class.is-favorite-hovering') hovering = false;
  @HostListener('mouseenter') onMouseenter() {
    this.hovering = true;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.hovering = false;
  }
}