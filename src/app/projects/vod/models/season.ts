import { UiViewModel } from '../../common/models/ui-view-model';
import { ThumbnailModel } from '../../common/models/thumbnail';
import { IGridCommon } from '../../common/Igrid-common';
import { ImageTypes } from '../../common/Enums';
import { ProgramModel } from './program';

export class SeasonModel extends UiViewModel {
  Parent: ProgramModel;
  Thumb: ThumbnailModel;
  FullEpisodes: boolean;
  IsMain: boolean;
  Promo: string;
  SectionId: number;

  constructor(data) {
    super(data);

    this.Parent = new ProgramModel(data.Program);
    this.Thumb = new ThumbnailModel(data.Thumb);
    this.FullEpisodes = data.FullEpisodes;
    this.IsMain = data.IsMain;
    this.Promo = data.Promo;
    this.SectionId = data.SectionId;
  }
  public get AvatarImg(): string {
    return this.Thumb.Images[ImageTypes[ImageTypes.Avatar]];
  }
  public get MainImg(): string {
    return this.Thumb.Images[ImageTypes[ImageTypes.Big]];
  }

}
