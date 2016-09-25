import { IGridCommon } from './IGridCommon';
import { ThumbnailModel, ImageTypes } from './thumbnail';

export class UiViewModel implements IGridCommon {
  public isVisible: boolean;
  public Changed: boolean = false;
  public MouseOver: boolean = false;
  public isEditable: boolean = false;
  public Id: number;
  public Title: string;
  public Comments: string;
  public DisplayOrder: number;

  constructor(data) {
    if (data == null)
      return;
    this.Title = data.Title;
    this.Id = data.Id;
    this.isVisible = data.isVisible;
    this.DisplayOrder = data.DisplayOrder;
  }


  public get AvatarImg(): string {
    throw 'not implemented avatar image';

  }

}
