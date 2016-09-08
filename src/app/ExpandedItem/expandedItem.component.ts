import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Genre } from '../Vod/Models/genre';
@Component({
  selector: 'expandedItem',
  templateUrl: 'expandedItem.component.html',
  styles: [`
        .extendedItemContainer {
             background-color: rgba(245,245,245,0.9);
             height:100%;
             min-height:1200px;

            }
              .extendedItemContainer > md-card {
               width:800px;
               margin-left:auto;
               margin-right:auto;
               z-index:150;

              }

           `]
})

export class ExpandedCardComponent implements OnInit {
  @Output() closeElement = new EventEmitter();
  @Input() item: Genre;

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
