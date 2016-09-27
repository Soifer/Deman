import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GenreModel } from '../models/genre';

@Component({
  selector: 'expanded-item',
  templateUrl: 'expanded-item.component.html',
  styleUrls: ['expanded-item.component.css']
})

export class ExpandedCardComponent implements OnInit {
  @Output() closeElement = new EventEmitter();
  @Input() item: GenreModel;

  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }
  clearItem(event) {
    this.closeElement.emit(event);
  }
  stopPropagation(event) {
    event.stopPropagation();
  }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      title: [this.item.Title, Validators.required],
      comments: [this.item.Comments, Validators.required],
      address: this.formBuilder.group({
        street: [],
        zip: [],
        city: []
      })
    });
  }
}
