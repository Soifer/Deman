import { Component, OnInit, Input, Output, EventEmitter, AfterContentChecked, AfterContentInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Http } from '@angular/http';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { Genre } from '../../Vod/Models/genre';

@Component({
    selector: 'gridItem',
    templateUrl: 'gridItem.component.html',
    styleUrls: ['gridItem.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class GridItemComponent implements OnInit, AfterContentChecked, AfterContentInit {
    @Input() loading: boolean;
    @Input() isScrolled: boolean;
    @Input() item: Genre;

    @Output() doubleClick = new EventEmitter();
    titleField: FormControl;

    constructor(private cd: ChangeDetectorRef) { }
    onDoubleClick() {
        this.doubleClick.emit(this.item);
    }

    setTitleFieldToEditable(data, event) {
        this.stopPropagation(event);
        data.EditField = !data.EditField;
    }

    setTitleFieldToEditableMobile(data) {
        data.EditField = !data.EditField;
    }
    stopPropagation(event) {
        event.stopPropagation();
    }
    ngAfterContentInit() {
        console.log('ngAfterContentInit');

    }

    ngAfterContentChecked() {

    }
    ngOnInit() {
        this.titleField = new FormControl(this.item.Title);
        this.titleField.valueChanges.subscribe(x => {
            this.item.Changed = true,
                this.item.Visible = true,
                this.item.Title = this.titleField.value;
            console.log(this.item.Changed);
        });

    }

    onInputChanged(event) {
        console.log(event);
    }
}
