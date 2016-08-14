import {UiEventsModel} from './uiEventsModel';

export class Genre extends UiEventsModel {
    Id: number;
    GenreName: string;
    constructor(data: Genre) {
        this.Id = data.Id;
        this.GenreName = data.GenreName;
        this.Visible = false;
        this.Changed = false;
    }
}
