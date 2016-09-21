import {
    Component, OnInit, Input, Output, EventEmitter, AfterContentChecked,
    AfterContentInit, ChangeDetectionStrategy, ChangeDetectorRef
} from '@angular/core';
import { Http } from '@angular/http';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { Genre } from '../../Vod/Models/genre';
import { IGridCommon } from '../../Vod/Models/IgridCommon';
import { UiViewModel } from '../../Vod/Models/uiViewModel';

@Component({
    selector: 'gridItem',
    templateUrl: 'gridItem.component.html',
    styleUrls: ['gridItem.component.css']

})

export class GridItemComponent implements OnInit, AfterContentChecked, AfterContentInit {
    @Input() isScrolled: boolean;
    @Input() item: UiViewModel;
    preItemState: UiViewModel = null;

    @Output() doubleClick = new EventEmitter();
    titleField: FormControl;

    constructor() {
    }
    onDoubleClick() {
        this.doubleClick.emit(this.item);
    }

    setTitleFieldToEditable(data, event) {
        this.stopPropagation(event);
        this.setTitleFieldToEditableMobile(data);
    }

    setTitleFieldToEditableMobile(data) {
        data.isEditable = !data.isEditable;
    }
    stopPropagation(event) {
        event.stopPropagation();
    }
    ngAfterContentInit() {

    }

    ngAfterContentChecked() {

    }
    ngOnInit() {
        this.titleField = new FormControl(this.item.Title);

        this.preItemState = new UiViewModel(this.item);

        this.titleField.valueChanges.subscribe(x => {

            if (this.titleField.value !== this.preItemState.Title) {
                this.item.Title = this.titleField.value;
                this.item.Changed = true;
                this.item.isVisible = true;
                console.log(true);
            } else {
                this.unDoChanges();
            }
        });

    }
    unDoChanges() {
        this.item.Changed = this.preItemState.Changed;
        this.item.isVisible = this.preItemState.isVisible;
        this.item.isEditable = this.preItemState.isEditable;
        this.item.Title = this.preItemState.Title;
    }
    onInputChanged(event) {
    }
}
