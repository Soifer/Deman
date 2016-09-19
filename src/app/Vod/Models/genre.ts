import { UiViewModel } from './uiViewModel';
import { ThumbnailModel, ImageTypes } from './thumbnail';
import { IGridCommon } from './igridcommon';

export class Genre extends UiViewModel {

  Thumb: ThumbnailModel;
  constructor(data) {
    super(data);
    this.Thumb = new ThumbnailModel(data.Thumb);
    this.Comments = data.Comments;
  }

  public get MainImg(): string {
    return this.Thumb.Images[ImageTypes[ImageTypes.Standart]];
  }
  public get AvatarImg(): string {
    return this.Thumb.Images[ImageTypes[ImageTypes.Avatar]];
  }

}
