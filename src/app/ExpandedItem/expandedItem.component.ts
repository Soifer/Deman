import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
    @Input() item: any;

    registerForm: FormGroup;

    constructor(private formBuilder: FormBuilder) { }
    @Output() closeElement = new EventEmitter();
    clearItem(event) {
        this.closeElement.emit(event);
    }
   stopPropagation(event)
   {
       event.stopPropagation()
   }
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstname: [this.item.Name, Validators.required],
            lastname: ['', Validators.required],
            address: this.formBuilder.group({
                street: [],
                zip: [],
                city: []
            })
        });
    }
}
