import { UiEventsModel } from './uiEventsModel';
import { Thumbnail, ImageTypes } from './thumbnail';
import { Genre } from './genre';
export class Program extends UiEventsModel implements IGridCommon {
  private Parent: Genre;
  Id: number;
  Title: string;
  Comments: string;
  Color: string;
  private Thumb: Thumbnail;
  constructor(data) {
    super();
    this.Id = data.Id;
    this.Thumb = new Thumbnail(data.Thumb);
    this.Visible = data.isVisible;
    this.Color = data.Color;
    this.Parent = new Genre(data.Genre);
  }
}
