import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
    selector: 'expandedItem',
    templateUrl: 'expandedItem.component.html'
})
export class ExpandedCardComponent implements OnInit {
    @Input() item: any;

    registerForm: FormGroup;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {

        this.registerForm = this.formBuilder.group({
            firstname: ['', Validators.required],
            lastname: ['', Validators.required],
            address: this.formBuilder.group({
                street: [],
                zip: [],
                city: []
            })
        });

    }
}
