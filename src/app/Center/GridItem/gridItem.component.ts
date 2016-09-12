import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { UiEventsModel } from '../../Vod/Models/uiEventsModel';
import { FormControl } from '@angular/forms';
import { GenreModel } from '../../Vod/Models/genre';
import { Episode } from '../../Vod/Models/episode';
import { Program } from '../../Vod/Models/program';

@Component({
    selector: 'gridItem',
    templateUrl: 'gridItem.component.html',
    styleUrls: ['gridItem.component.css'],
})

export class GridItemComponent implements OnInit {
    @Input() item: GenreModel;
    @Input() loading: boolean;
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
            this.item.Changed = true;
            this.item.Visible = true;
        });

    }

    onInputChanged(event) {
        console.log(event);
    }
}
