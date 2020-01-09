import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { newItemRouting } from './new-item.routing';
import { MediaItemFormComponent } from './media-item-form.component';

@NgModule({
  imports:[
    CommonModule,
    ReactiveFormsModule,
    newItemRouting
  ],
  declarations: [
    MediaItemFormComponent
  ]
})
export class NewItemModule {}