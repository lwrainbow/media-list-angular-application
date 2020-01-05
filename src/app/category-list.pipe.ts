// Custom pipe will display a list of all of the unique media item categories for the media items
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryList'
}) 

export class CategoryListPipe implements PipeTransform {
  transform(mediaItems) {
    const categories = [];
    mediaItems.forEach(mediaItem => {
      if (categories.indexOf(mediaItem.category) <= -1) {
        categories.push(mediaItem.category);
      }
    });
    return categories.join(', ');
  }
}