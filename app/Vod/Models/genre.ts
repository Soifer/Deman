import {UiEventsModel} from './uiEventsModel';

export class Genre extends UiEventsModel {
    constructor(data: Genre) {
        super();
        this.Id = data.Id;
        this.GenreName = data.GenreName;
        this.Visible = false;
        this.Changed = false;
    }
    GenreName: string;
}
