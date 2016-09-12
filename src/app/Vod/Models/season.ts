import { UiEventsModel } from './uiEventsModel';
import { Program } from './program';
import { ThumbnailModel, ImageTypes } from './thumbnail';
import { IGridCommon } from './IGridCommon';

export class Season extends UiEventsModel implements IGridCommon {
  Id: number;
  Parent: Program;
  Thumb: ThumbnailModel;
  FullEpisodes: boolean;
  IsMain: boolean;
  Promo: string;
  Title: string;
  SectionId: number;

  constructor(data) {
    super();
    this.Id = data.Id;
    this.Parent = new Program(data.Program);
    this.Thumb = new ThumbnailModel(data.Thumb);
    this.FullEpisodes = data.FullEpisodes;
    this.IsMain = data.IsMain;
    this.Promo = data.Promo;
    this.Title = data.Title;
    this.SectionId = data.SectionId;
    this.Visible = data.isVisible;
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
}
