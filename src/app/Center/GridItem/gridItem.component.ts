import { Component, OnInit, Input, Output, EventEmitter, AfterContentChecked, AfterContentInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Http } from '@angular/http';
import { UiEventsModel } from '../../Vod/Models/uiEventsModel';
import { FormControl } from '@angular/forms';
import { Genre } from '../../Vod/Models/genre';
import { Observable } from 'rxjs/Rx';


@Component({
    selector: 'gridItem',
    templateUrl: 'gridItem.component.html',
    styleUrls: ['gridItem.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class GridItemComponent implements OnInit, AfterContentChecked, AfterContentInit {
    @Input() item: Genre;
    @Input() loading: boolean;
    @Input() isScrolled: boolean;
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