import { UiViewModel } from '../../common/models/ui-view-model';
import { ThumbnailModel } from '../../common/models/thumbnail';
import { IGridCommon } from '../../common/Igrid-common';
import { ImageTypes } from '../../common/Enums';
import { SeasonModel } from './season';

export class EpisodeModel extends UiViewModel {
  Parent: SeasonModel;
  Thumb: ThumbnailModel;
  ProgramId: number;
  SubTitle: string;
  VideoId: number;
  ArticleId: number;


  constructor(data) {
    super(data);
    this.Parent = new SeasonModel(data.Season);
    this.Thumb = new ThumbnailModel(data.Thumb);
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
  }
  public get Comments(): string {
    return this.SubTitle;
  }
  public set Comments(value: string) {
    this.SubTitle = value;
  }
}
