import { UiViewModel } from './uiViewModel';
import { ThumbnailModel, ImageTypes } from './thumbnail';
import { Genre } from './genre';
import { IGridCommon } from './IGridCommon';

export class ProgramModel extends UiViewModel implements IGridCommon {
  Color: string;
  Promo: string;
  private Parent: Genre;
  private Thumb: ThumbnailModel;
  constructor(data) {
    super(data);
    this.Promo = data.Promo;
    this.Thumb = new ThumbnailModel(data.Thumb);
    this.Color = data.Color;
    this.Parent = new Genre(data.Genre);
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
