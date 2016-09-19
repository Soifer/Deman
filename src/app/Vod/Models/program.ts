import { UiEventsViewModel } from './uiviewmodel';
import { ThumbnailModel, ImageTypes } from './thumbnail';
import { GenreModel } from './genre';
import { IGridVodCommon } from './igridcommon';

export class ProgramModel extends UiEventsViewModel implements IGridVodCommon {
  Id: number;
  Title: string;
  Color: string;
  Promo: string;
  private Parent: GenreModel;
  private Thumb: ThumbnailModel;
  constructor(data) {
    super();
    this.Title = data.Title;
    this.Promo = data.Promo;
    this.Id = data.Id;
    this.Thumb = new ThumbnailModel(data.Thumb);
    this.Visible = data.isVisible;
    this.Color = data.Color;
    this.Parent = new GenreModel(data.Genre);
  }
  public get AvatarImg(): string {
    return this.Thumb.Images[ImageTypes[ImageTypes.Avatar]];
  }
  public get Comments(): string {
    return this.Promo;
  }
  public set Comments(value: string) {
    this.Promo = value;
  }
    public get MainImg(): string {
    return this.Thumb.Images[ImageTypes[ImageTypes.Standart]];
  }
}
