import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
    selector: 'expandedItem',
    templateUrl: 'expandedItem.component.html',
    styles: [`
        .extendedItemContainer {
             background-color: rgba(245,245,245,0.9);
             height:100%;
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
    @Output() change1 = new EventEmitter();
    clearItem() {
        this.change1.emit(this.item);
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
