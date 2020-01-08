import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MediaItemService } from './media-item.service';
import { lookupListToken } from './providers'

@Component({
  selector: 'mw-media-item-form',
  templateUrl: './media-item-form.component.html',
  styleUrls: ['./media-item-form.component.css']
})

export class MediaItemFormComponent implements OnInit{
  form: FormGroup;

  constructor(private fromBuilder: FormBuilder, 
    private mediaItemService: MediaItemService, 
    @Inject(lookupListToken) public lookupLists) { }

  ngOnInit() {
    this.form = this.fromBuilder.group({
      medium: this.fromBuilder.control('Movies'),
      name: this.fromBuilder.control('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      category: this.fromBuilder.control(''),
      year: this.fromBuilder.control('', this.yearValidator),
    })
  }

  // Custom validator for year
  yearValidator(control: FormControl) {
    if (control.value.trim().length === 0)
      return null;
    
    const year = parseInt(control.value, 10);
    const minYear = 1900;
    const maxYear = 2100;

    if (year >= minYear && year <= maxYear)
      return null;
    else
      return { year: {
        min: minYear,
        max: maxYear
      } 
    }
  }

  onSubmit(mediaItem){
    this.mediaItemService.add(mediaItem);
  }
}