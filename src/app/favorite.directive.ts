// HostBinding bind a host element property to a directive property
import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[mwFavorite]'
})

export class FavoriteDirective {
  @HostBinding('class.is-favorite') isFavorite = true; // add class is-favorite when isFavorite equal true
  @Input() set mwFavorite(value) {
    this.isFavorite = value;
  }
}