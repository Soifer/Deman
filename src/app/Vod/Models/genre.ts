import { UiEventsViewModel } from './uiviewmodel';
import { ThumbnailModel, ImageTypes } from './thumbnail';
import { IGridVodCommon } from './igridcommon';

export class GenreModel extends UiEventsViewModel implements IGridVodCommon {
  Title: string;
  Comments: string;
  Id: number;
  Thumb: ThumbnailModel;
  constructor(data) {
    super();
    this.Id = data.Id;
    this.Visible = data.isVisible;
    this.Title = data.Title;
    this.Comments = data.Comments;
    this.Thumb = new ThumbnailModel(data.Thumb);
  }

  public get AvatarImg(): string {
    return this.Thumb.Images[ImageTypes[ImageTypes.Avatar]];
  }
  public get MainImg(): string {
    return this.Thumb.Images[ImageTypes[ImageTypes.Standart]];
  }
}
