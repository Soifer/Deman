import { UiViewModel } from '../../common/models/ui-view-model';
import { ThumbnailModel } from '../../common/models/thumbnail';
import { IGridCommon } from '../../common/Igrid-common';
import { ImageTypes } from '../../common/Enums';

export class GenreModel extends UiViewModel {

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
