export class ThumbnailModel {
  Id: number;
  Comments: string;
  Created: Date;
  Credits: string;
  ImagePath: string;
  KeyWords: string[];
  MediaStockImageID: number;
  Modified: Date;
  Taken: Date;
  Title: string;
  Images: { [key: string]: string; } = {};

  constructor(data: any) {
    this.Id = data.Id;
    this.Comments = data.Comments;
    this.Created = new Date(data.Created);
    this.Credits = data.Credits;
    this.ImagePath = data.ImagePath;
    this.KeyWords = (data.Keywords == null) ? [] : data.KeyWords.split(',');
    this.MediaStockImageID = data.MediaStockImageID;
    this.Modified = new Date(data.Modified);
    this.Taken = new Date(data.Taken);
    this.Title = data.Title;
    this.setImages(data.GetImages, this.ImagePath);
  }
  setImages(images: any[], path: string) {
    this.Images[ImageTypes[ImageTypes.Avatar]] = images['Thumbnail_109_59'];
    this.Images[ImageTypes[ImageTypes.Small]] = images['Small_303_165'];
    this.Images[ImageTypes[ImageTypes.Standart]] = images['Standard_606_366'];
    this.Images[ImageTypes[ImageTypes.Medium]] = images['Medium_460_258'];
    this.Images[ImageTypes[ImageTypes.Big]] = images['Big_768_400'];
  }
}

export enum ImageTypes {
  Avatar,
  Small,
  Standart,
  Medium,
  Big
}
