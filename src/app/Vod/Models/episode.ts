import { UiViewModel } from './uiViewModel';
import { ThumbnailModel, ImageTypes } from './thumbnail';
import { SeasonModel } from './season';
import { IGridCommon } from './IGridCommon';

export class EpisodeModel extends UiViewModel implements IGridCommon {
  Id: number;
  Parent: SeasonModel;
  Thumb: ThumbnailModel;
  DisplayOrder: number;
  ProgramId: number;
  SubTitle: string;
  Title: string;
  VideoId: number;
  ArticleId: number;


  constructor(data) {
    super();
    this.Id = data.Id;
    this.Parent = new SeasonModel(data.Season);
    this.Thumb = new ThumbnailModel(data.Thumb);
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
