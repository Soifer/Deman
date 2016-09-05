import {UiEventsModel} from './uiEventsModel';

export class Program extends UiEventsModel {
   constructor(data: Program) {
    super();
    this.Id = data.Id;
    this.Name = data.Name;
    this.Status = data.Status;
    this.MediaStockImageID = data.MediaStockImageID;
    this.ShowInDevices = data.ShowInDevices;
    this.GenreID = data.GenreID;
    this.FileExtensionID = data.FileExtensionID;
    this.TVSerieSort = data.TVSerieSort;
    }
    Name: string;
    Status: number;
    MediaStockImageID: number;
    ShowInDevices: number;
    GenreID: number;
    FileExtensionID: number;
    TVSerieSort: number;
}
