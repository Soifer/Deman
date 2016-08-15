import {UiEventsModel} from './uiEventsModel';

export class Episode extends UiEventsModel {
    constructor(data: Episode) {
        super();
        this.Id = data.Id;
        this.SeasonId = data.SeasonId;
        this.Title = data.Title;
        this.SubTitle = data.SubTitle;
        this.VideoId = data.VideoId;
        this.Visible = false;
        this.Changed = false;
    }
    SeasonId: number;
    Title: string;
    SubTitle: string;
    VideoId: number;
}
