import { UiEventsModel } from './uiEventsModel';
import { Thumbnail, ImageTypes } from './thumbnail';
import { Season } from './season';
import { IGridCommon } from './IGridCommon';

export class Episode extends UiEventsModel implements IGridCommon {
  Id: number;
  Parent: Season;
  Thumb: Thumbnail;
  DisplayOrder: number;
  ProgramId: number;
  SubTitle: string;
  Title: string;
  VideoId: number;
  ArticleId: number;


  constructor(data) {
    super();
    this.Id = data.Id;
    this.Parent = new Season(data.Season);
    this.Thumb = new Thumbnail(data.Thumb);
    this.DisplayOrder = data.DisplayOrder;
    this.Visible = data.isVisible;
    this.ProgramId = data.ProgramId;
    this.SubTitle = data.SubTitle;
    this.Title = data.Title;
    this.VideoId = data.VideoId;
    this.ArticleId = data.ArticleId;
  }
  public get AvatarImg(): string {
    return this.Thumb.Images[ImageTypes[ImageTypes.Avatar]];
  }
  public get Comments(): string {
    return this.SubTitle;
  }
  public set Comments(value: string) {
    this.SubTitle = value;
  }
}
