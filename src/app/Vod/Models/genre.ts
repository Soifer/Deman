import { UiEventsModel } from './uiEventsModel';
import { Thumbnail, ImageTypes } from './thumbnail';
export class Genre extends UiEventsModel {
  Title: string;
  Comments: string;
  Id: number;
  private Thumb: Thumbnail;
  constructor(data) {
    super();
    this.Id = data.Id;
    this.Visible = data.isVisible;
    this.Title = data.Title;
    this.Comments = data.Comments;
    this.Thumb = new Thumbnail(data.Thumb);
  }

  public get AvatarImg(): string {
    return this.Thumb.Images[ImageTypes[ImageTypes.Avatar]];
  }
  public get MainImg(): string {
    return this.Thumb.Images[ImageTypes[ImageTypes.Standart]];
  }
}
