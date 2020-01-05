// HostBinding bind a host element property to a directive property
import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[mwFavorite]'
})

export class FavoriteDirective {
  @HostBinding('class.is-favorite') isFavorite = true;
}