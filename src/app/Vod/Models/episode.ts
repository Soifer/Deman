import { UiViewModel } from './uiViewModel';
import { ThumbnailModel, ImageTypes } from './thumbnail';
import { SeasonModel } from './season';
import { IGridCommon } from './IGridCommon';

export class EpisodeModel extends UiViewModel {
  Parent: SeasonModel;
  Thumb: ThumbnailModel;
  DisplayOrder: number;
  ProgramId: number;
  SubTitle: string;
  VideoId: number;
  ArticleId: number;


  constructor(data) {
    super(data);

    this.Parent = new SeasonModel(data.Season);
    this.Thumb = new ThumbnailModel(data.Thumb);
    this.DisplayOrder = data.DisplayOrder;
    this.ProgramId = data.ProgramId;
    this.SubTitle = data.SubTitle;
    this.VideoId = data.VideoId;
    this.ArticleId = data.ArticleId;
  }
  public get AvatarImg(): string {
    return this.Thumb.Images[ImageTypes[ImageTypes.Avatar]];
  }
  public get MainImg(): string {
    return this.Thumb.Images[ImageTypes[ImageTypes.Big]];
  public get Comments(): string {
    return this.SubTitle;
  }
  public set Comments(value: string) {
    this.SubTitle = value;
  }
}
