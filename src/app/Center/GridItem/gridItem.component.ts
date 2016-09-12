import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { UiEventsModel } from '../../Vod/Models/uiEventsModel';
import { FormControl } from '@angular/forms';
import { Genre } from '../../Vod/Models/genre';

@Component({
    selector: 'gridItem',
    templateUrl: 'gridItem.component.html',
    styleUrls: ['gridItem.component.css'],
})

export class GridItemComponent implements OnInit {
    @Input() item: Genre;
    @Input() loading :boolean;
    @Output() doubleClick = new EventEmitter();
    titleField: FormControl;

    onDoubleClick(item) {
        this.doubleClick.emit(item);
    }

    setTitleFieldToEditable(data, event) {
        this.stopPropagation(event);
        data.EditField = !data.EditField;
    }

    stopPropagation(event) {
        event.stopPropagation();
    }

    ngOnInit() {
        this.titleField = new FormControl(this.item.Title);
        console.log(this.loading);
        
        this.titleField.valueChanges.subscribe(x => {
            this.item.Changed = true,
            this.item.Visible = true,
                console.log(this.item.Changed);
        });
       
    }

    onInputChanged(event) {
        console.log(event);
    }
}