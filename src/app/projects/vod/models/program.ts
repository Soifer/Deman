import { UiViewModel } from '../../common/models/ui-view-model';
import { ThumbnailModel } from '../../common/models/thumbnail';
import { IGridCommon } from '../../common/Igrid-common';
import { ImageTypes } from '../../common/Enums';
import { GenreModel } from './genre';

export class ProgramModel extends UiViewModel implements IGridCommon {
  Color: string;
  Promo: string;
  private Parent: GenreModel;
  private Thumb: ThumbnailModel;
  
  constructor(data) {
    super(data);
    this.Promo = data.Promo;
    this.Thumb = new ThumbnailModel(data.Thumb);
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
