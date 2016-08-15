import {UiEventsModel} from './uiEventsModel';

export class Season extends UiEventsModel {
    constructor(data: Season) {
        super();
        this.Id = data.Id;
        this.Name = data.Name;
        this.FullEpisodes = data.FullEpisodes;
        this.IsMain = data.IsMain;
        this.Promo = data.Promo;
        this.ImagePath = data.ImagePath;
        this.Visible = false;
        this.Changed = false;
    }
    ProgramId: number;
    Name: string;
    FullEpisodes: boolean;
    IsMain: boolean;
    Promo: string;
    ImagePath: string;
}
