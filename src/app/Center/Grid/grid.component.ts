import { Component, OnInit, OnDestroy } from '@angular/core';
import { Http } from '@angular/http';
import { GenreService } from '../../Vod/Services/genre.service';
import { UiEventsModel } from '../../Vod/Models/uiEventsModel';
import { Genre } from '../../Vod/Models/genre';

@Component({
  selector: 'grid',
  templateUrl: 'grid.component.html',
  styleUrls: ['grid.component.css'],
})
export class GridComponent implements OnInit, OnDestroy {
  items: Genre[];
  items2: any;
  subscriber: any;
  service: GenreService;
  selectedItem: any;
  isLoading: boolean = true;

  constructor(context: Http) {
    this.service = new GenreService(context);
  }
  setExpandedItem(item) {
    this.selectedItem = item;
  }
  ngOnInit() {
    this.getItems();
    //this.getTestItems();
  }

  clearItem(data) {
    this.selectedItem = null;
  }
  getItems() {
    this.subscriber = this.service.getAll().subscribe(data => {
      this.isLoading = false;
      this.items = data;
    });
  }
  ngOnDestroy() {
    this.subscriber.unsubscribe();
  }
  getTestItems() {
    this.items2 = [
      {
        "Thumb": {
          "Id": 1,
          "Comments": "Comments",
          "Created": "2016-08-15T07:54:19.38",
          "Credits": "ToMe",
          "ImagePath": "http://lorempixel.com/400/200/",
          "KeyWords": "qwe, rty",
          "MediaStockImageID": 12345,
          "Modified": "2016-08-16T07:54:19.38",
          "Taken": "2016-08-14T15:54:19.38",
          "Title": "Title1",
          "GetImages": {
            "Thumbnail_109_59": "http://f.nanafiles.co.il/upload/mediastock/img/28/0/12/12345.jpg",
            "Small_303_165": "http://f.nanafiles.co.il/upload/mediastock/img/493/0/12/12345.jpg",
            "Big_768_400": "http://f.nanafiles.co.il/upload/mediastock/img/1677/0/12/12345.jpg",
            "Standard_606_366": "http://f.nanafiles.co.il/upload/mediastock/img/1789/0/12/12345.jpg",
            "Medium_460_258": "http://f.nanafiles.co.il/upload/mediastock/img/693/0/12/12345.jpg"
          }
        },
        "isVisible": true,
        "Changed": true,
        "Title": "SomeTitle",
        "Id": 1
      },
      {
        "Thumb": {
          "Id": 2,
          "Comments": "Comments",
          "Created": "2016-08-15T07:54:19.387",
          "Credits": "ToMe",
          "ImagePath": "http://lorempixel.com/400/200/",
          "KeyWords": "qwe, rty",
          "MediaStockImageID": 12345,
          "Modified": "2016-08-16T07:54:19.387",
          "Taken": "2016-08-14T15:54:19.387",
          "Title": "Title2",
          "GetImages": {
            "Thumbnail_109_59": "http://f.nanafiles.co.il/upload/mediastock/img/28/0/12/12345.jpg",
            "Small_303_165": "http://f.nanafiles.co.il/upload/mediastock/img/493/0/12/12345.jpg",
            "Big_768_400": "http://f.nanafiles.co.il/upload/mediastock/img/1677/0/12/12345.jpg",
            "Standard_606_366": "http://f.nanafiles.co.il/upload/mediastock/img/1789/0/12/12345.jpg",
            "Medium_460_258": "http://f.nanafiles.co.il/upload/mediastock/img/693/0/12/12345.jpg"
          }
        },
        "isVisible": true,
        "Title": "SomeOtherAtAllTitle",
        "Id": 2
      },
      {
        "Thumb": {
          "Id": 3,
          "Comments": "Comments",
          "Created": "2016-08-15T07:54:19.387",
          "Credits": "ToMe",
          "ImagePath": "http://lorempixel.com/400/200/",
          "KeyWords": "qwe, rty",
          "MediaStockImageID": 12345,
          "Modified": "2016-08-16T07:54:19.387",
          "Taken": "2016-08-14T15:54:19.387",
          "Title": "Title3",
          "GetImages": {
            "Thumbnail_109_59": "http://f.nanafiles.co.il/upload/mediastock/img/28/0/12/12345.jpg",
            "Small_303_165": "http://f.nanafiles.co.il/upload/mediastock/img/493/0/12/12345.jpg",
            "Big_768_400": "http://f.nanafiles.co.il/upload/mediastock/img/1677/0/12/12345.jpg",
            "Standard_606_366": "http://f.nanafiles.co.il/upload/mediastock/img/1789/0/12/12345.jpg",
            "Medium_460_258": "http://f.nanafiles.co.il/upload/mediastock/img/693/0/12/12345.jpg"
          }
        },
        "isVisible": true,
        "Title": "Test",
        "Id": 3
      },
      {
        "Thumb": {
          "Id": 6,
          "Comments": "Comments",
          "Created": "2016-08-08T12:55:03.03",
          "Credits": "ToMe",
          "ImagePath": "http://lorempixel.com/400/200/",
          "KeyWords": null,
          "MediaStockImageID": 0,
          "Modified": "2016-08-09T12:55:03.03",
          "Taken": "2016-08-07T20:55:03.03",
          "Title": "Title6",
          "GetImages": {
            "Thumbnail_109_59": "",
            "Small_303_165": "",
            "Big_768_400": "",
            "Standard_606_366": "",
            "Medium_460_258": ""
          }
        },
        "isVisible": false,
        "Title": "SomeOtherTitle",
        "Id": 4
      },
      {
        "Thumb": {
          "Id": 1,
          "Comments": "Comments",
          "Created": "2016-08-15T07:54:19.38",
          "Credits": "ToMe",
          "ImagePath": "http://lorempixel.com/400/200/",
          "KeyWords": "qwe, rty",
          "MediaStockImageID": 12345,
          "Modified": "2016-08-16T07:54:19.38",
          "Taken": "2016-08-14T15:54:19.38",
          "Title": "Title1",
          "GetImages": {
            "Thumbnail_109_59": "http://f.nanafiles.co.il/upload/mediastock/img/28/0/12/12345.jpg",
            "Small_303_165": "http://f.nanafiles.co.il/upload/mediastock/img/493/0/12/12345.jpg",
            "Big_768_400": "http://f.nanafiles.co.il/upload/mediastock/img/1677/0/12/12345.jpg",
            "Standard_606_366": "http://f.nanafiles.co.il/upload/mediastock/img/1789/0/12/12345.jpg",
            "Medium_460_258": "http://f.nanafiles.co.il/upload/mediastock/img/693/0/12/12345.jpg"
          }
        },
        "isVisible": true,
        "Title": "SomeTitle",
        "Id": 1
      },
      {
        "Thumb": {
          "Id": 2,
          "Comments": "Comments",
          "Created": "2016-08-15T07:54:19.387",
          "Credits": "ToMe",
          "ImagePath": "http://lorempixel.com/400/200/",
          "KeyWords": "qwe, rty",
          "MediaStockImageID": 12345,
          "Modified": "2016-08-16T07:54:19.387",
          "Taken": "2016-08-14T15:54:19.387",
          "Title": "Title2",
          "GetImages": {
            "Thumbnail_109_59": "http://f.nanafiles.co.il/upload/mediastock/img/28/0/12/12345.jpg",
            "Small_303_165": "http://f.nanafiles.co.il/upload/mediastock/img/493/0/12/12345.jpg",
            "Big_768_400": "http://f.nanafiles.co.il/upload/mediastock/img/1677/0/12/12345.jpg",
            "Standard_606_366": "http://f.nanafiles.co.il/upload/mediastock/img/1789/0/12/12345.jpg",
            "Medium_460_258": "http://f.nanafiles.co.il/upload/mediastock/img/693/0/12/12345.jpg"
          }
        },
        "isVisible": true,
        "Title": "SomeOtherAtAllTitle",
        "Id": 2
      },
      {
        "Thumb": {
          "Id": 3,
          "Comments": "Comments",
          "Created": "2016-08-15T07:54:19.387",
          "Credits": "ToMe",
          "ImagePath": "http://lorempixel.com/400/200/",
          "KeyWords": "qwe, rty",
          "MediaStockImageID": 12345,
          "Modified": "2016-08-16T07:54:19.387",
          "Taken": "2016-08-14T15:54:19.387",
          "Title": "Title3",
          "GetImages": {
            "Thumbnail_109_59": "http://f.nanafiles.co.il/upload/mediastock/img/28/0/12/12345.jpg",
            "Small_303_165": "http://f.nanafiles.co.il/upload/mediastock/img/493/0/12/12345.jpg",
            "Big_768_400": "http://f.nanafiles.co.il/upload/mediastock/img/1677/0/12/12345.jpg",
            "Standard_606_366": "http://f.nanafiles.co.il/upload/mediastock/img/1789/0/12/12345.jpg",
            "Medium_460_258": "http://f.nanafiles.co.il/upload/mediastock/img/693/0/12/12345.jpg"
          }
        },
        "isVisible": true,
        "Title": "Test",
        "Changed": true,
        "Id": 3
      },
      {
        "Thumb": {
          "Id": 6,
          "Comments": "Comments",
          "Created": "2016-08-08T12:55:03.03",
          "Credits": "ToMe",
          "ImagePath": "http://lorempixel.com/400/200/",
          "KeyWords": null,
          "MediaStockImageID": 0,
          "Modified": "2016-08-09T12:55:03.03",
          "Taken": "2016-08-07T20:55:03.03",
          "Title": "Title6",
          "GetImages": {
            "Thumbnail_109_59": "",
            "Small_303_165": "",
            "Big_768_400": "",
            "Standard_606_366": "",
            "Medium_460_258": ""
          }
        },
        "isVisible": false,
        "Title": "SomeOtherTitle",
        "Id": 4
      },
      {
        "Thumb": {
          "Id": 1,
          "Comments": "Comments",
          "Created": "2016-08-15T07:54:19.38",
          "Credits": "ToMe",
          "ImagePath": "http://lorempixel.com/400/200/",
          "KeyWords": "qwe, rty",
          "MediaStockImageID": 12345,
          "Modified": "2016-08-16T07:54:19.38",
          "Taken": "2016-08-14T15:54:19.38",
          "Title": "Title1",
          "GetImages": {
            "Thumbnail_109_59": "http://f.nanafiles.co.il/upload/mediastock/img/28/0/12/12345.jpg",
            "Small_303_165": "http://f.nanafiles.co.il/upload/mediastock/img/493/0/12/12345.jpg",
            "Big_768_400": "http://f.nanafiles.co.il/upload/mediastock/img/1677/0/12/12345.jpg",
            "Standard_606_366": "http://f.nanafiles.co.il/upload/mediastock/img/1789/0/12/12345.jpg",
            "Medium_460_258": "http://f.nanafiles.co.il/upload/mediastock/img/693/0/12/12345.jpg"
          }
        },
        "isVisible": true,
        "Title": "SomeTitle",
        "Id": 1
      },
      {
        "Thumb": {
          "Id": 2,
          "Comments": "Comments",
          "Created": "2016-08-15T07:54:19.387",
          "Credits": "ToMe",
          "ImagePath": "http://lorempixel.com/400/200/",
          "KeyWords": "qwe, rty",
          "MediaStockImageID": 12345,
          "Modified": "2016-08-16T07:54:19.387",
          "Taken": "2016-08-14T15:54:19.387",
          "Title": "Title2",
          "GetImages": {
            "Thumbnail_109_59": "http://f.nanafiles.co.il/upload/mediastock/img/28/0/12/12345.jpg",
            "Small_303_165": "http://f.nanafiles.co.il/upload/mediastock/img/493/0/12/12345.jpg",
            "Big_768_400": "http://f.nanafiles.co.il/upload/mediastock/img/1677/0/12/12345.jpg",
            "Standard_606_366": "http://f.nanafiles.co.il/upload/mediastock/img/1789/0/12/12345.jpg",
            "Medium_460_258": "http://f.nanafiles.co.il/upload/mediastock/img/693/0/12/12345.jpg"
          }
        },
        "isVisible": true,
        "Title": "SomeOtherAtAllTitle",
        "Id": 2
      },
      {
        "Thumb": {
          "Id": 3,
          "Comments": "Comments",
          "Created": "2016-08-15T07:54:19.387",
          "Credits": "ToMe",
          "ImagePath": "http://lorempixel.com/400/200/",
          "KeyWords": "qwe, rty",
          "MediaStockImageID": 12345,
          "Modified": "2016-08-16T07:54:19.387",
          "Taken": "2016-08-14T15:54:19.387",
          "Title": "Title3",
          "GetImages": {
            "Thumbnail_109_59": "http://f.nanafiles.co.il/upload/mediastock/img/28/0/12/12345.jpg",
            "Small_303_165": "http://f.nanafiles.co.il/upload/mediastock/img/493/0/12/12345.jpg",
            "Big_768_400": "http://f.nanafiles.co.il/upload/mediastock/img/1677/0/12/12345.jpg",
            "Standard_606_366": "http://f.nanafiles.co.il/upload/mediastock/img/1789/0/12/12345.jpg",
            "Medium_460_258": "http://f.nanafiles.co.il/upload/mediastock/img/693/0/12/12345.jpg"
          }
        },
        "isVisible": true,
        "Title": "Test",
        "Id": 3
      },
      {
        "Thumb": {
          "Id": 6,
          "Comments": "Comments",
          "Created": "2016-08-08T12:55:03.03",
          "Credits": "ToMe",
          "ImagePath": "http://lorempixel.com/400/200/",
          "KeyWords": null,
          "MediaStockImageID": 0,
          "Modified": "2016-08-09T12:55:03.03",
          "Taken": "2016-08-07T20:55:03.03",
          "Title": "Title6",
          "GetImages": {
            "Thumbnail_109_59": "",
            "Small_303_165": "",
            "Big_768_400": "",
            "Standard_606_366": "",
            "Medium_460_258": ""
          }
        },
        "isVisible": false,
        "Title": "SomeOtherTitle",
        "Id": 4
      },
      {
        "Thumb": {
          "Id": 1,
          "Comments": "Comments",
          "Created": "2016-08-15T07:54:19.38",
          "Credits": "ToMe",
          "ImagePath": "http://lorempixel.com/400/200/",
          "KeyWords": "qwe, rty",
          "MediaStockImageID": 12345,
          "Modified": "2016-08-16T07:54:19.38",
          "Taken": "2016-08-14T15:54:19.38",
          "Title": "Title1",
          "GetImages": {
            "Thumbnail_109_59": "http://f.nanafiles.co.il/upload/mediastock/img/28/0/12/12345.jpg",
            "Small_303_165": "http://f.nanafiles.co.il/upload/mediastock/img/493/0/12/12345.jpg",
            "Big_768_400": "http://f.nanafiles.co.il/upload/mediastock/img/1677/0/12/12345.jpg",
            "Standard_606_366": "http://f.nanafiles.co.il/upload/mediastock/img/1789/0/12/12345.jpg",
            "Medium_460_258": "http://f.nanafiles.co.il/upload/mediastock/img/693/0/12/12345.jpg"
          }
        },
        "isVisible": true,
        "Title": "SomeTitle",
        "Id": 1
      },
      {
        "Thumb": {
          "Id": 2,
          "Comments": "Comments",
          "Created": "2016-08-15T07:54:19.387",
          "Credits": "ToMe",
          "ImagePath": "http://lorempixel.com/400/200/",
          "KeyWords": "qwe, rty",
          "MediaStockImageID": 12345,
          "Modified": "2016-08-16T07:54:19.387",
          "Taken": "2016-08-14T15:54:19.387",
          "Title": "Title2",
          "GetImages": {
            "Thumbnail_109_59": "http://f.nanafiles.co.il/upload/mediastock/img/28/0/12/12345.jpg",
            "Small_303_165": "http://f.nanafiles.co.il/upload/mediastock/img/493/0/12/12345.jpg",
            "Big_768_400": "http://f.nanafiles.co.il/upload/mediastock/img/1677/0/12/12345.jpg",
            "Standard_606_366": "http://f.nanafiles.co.il/upload/mediastock/img/1789/0/12/12345.jpg",
            "Medium_460_258": "http://f.nanafiles.co.il/upload/mediastock/img/693/0/12/12345.jpg"
          }
        },
        "isVisible": true,
        "Title": "SomeOtherAtAllTitle",
        "Id": 2
      },
      {
        "Thumb": {
          "Id": 3,
          "Comments": "Comments",
          "Created": "2016-08-15T07:54:19.387",
          "Credits": "ToMe",
          "ImagePath": "http://lorempixel.com/400/200/",
          "KeyWords": "qwe, rty",
          "MediaStockImageID": 12345,
          "Modified": "2016-08-16T07:54:19.387",
          "Taken": "2016-08-14T15:54:19.387",
          "Title": "Title3",
          "GetImages": {
            "Thumbnail_109_59": "http://f.nanafiles.co.il/upload/mediastock/img/28/0/12/12345.jpg",
            "Small_303_165": "http://f.nanafiles.co.il/upload/mediastock/img/493/0/12/12345.jpg",
            "Big_768_400": "http://f.nanafiles.co.il/upload/mediastock/img/1677/0/12/12345.jpg",
            "Standard_606_366": "http://f.nanafiles.co.il/upload/mediastock/img/1789/0/12/12345.jpg",
            "Medium_460_258": "http://f.nanafiles.co.il/upload/mediastock/img/693/0/12/12345.jpg"
          }
        },
        "isVisible": true,
        "Title": "Test",
        "Id": 3,
        "Changed": true,
      },
      {
        "Thumb": {
          "Id": 6,
          "Comments": "Comments",
          "Created": "2016-08-08T12:55:03.03",
          "Credits": "ToMe",
          "ImagePath": "http://lorempixel.com/400/200/",
          "KeyWords": null,
          "MediaStockImageID": 0,
          "Modified": "2016-08-09T12:55:03.03",
          "Taken": "2016-08-07T20:55:03.03",
          "Title": "Title6",
          "GetImages": {
            "Thumbnail_109_59": "",
            "Small_303_165": "",
            "Big_768_400": "",
            "Standard_606_366": "",
            "Medium_460_258": ""
          }
        },
        "isVisible": false,
        "Title": "SomeOtherTitle",
        "Id": 4
      },
      {
        "Thumb": {
          "Id": 1,
          "Comments": "Comments",
          "Created": "2016-08-15T07:54:19.38",
          "Credits": "ToMe",
          "ImagePath": "http://lorempixel.com/400/200/",
          "KeyWords": "qwe, rty",
          "MediaStockImageID": 12345,
          "Modified": "2016-08-16T07:54:19.38",
          "Taken": "2016-08-14T15:54:19.38",
          "Title": "Title1",
          "GetImages": {
            "Thumbnail_109_59": "http://f.nanafiles.co.il/upload/mediastock/img/28/0/12/12345.jpg",
            "Small_303_165": "http://f.nanafiles.co.il/upload/mediastock/img/493/0/12/12345.jpg",
            "Big_768_400": "http://f.nanafiles.co.il/upload/mediastock/img/1677/0/12/12345.jpg",
            "Standard_606_366": "http://f.nanafiles.co.il/upload/mediastock/img/1789/0/12/12345.jpg",
            "Medium_460_258": "http://f.nanafiles.co.il/upload/mediastock/img/693/0/12/12345.jpg"
          }
        },
        "isVisible": true,
        "Title": "SomeTitle",
        "Id": 1
      },
      {
        "Thumb": {
          "Id": 2,
          "Comments": "Comments",
          "Created": "2016-08-15T07:54:19.387",
          "Credits": "ToMe",
          "ImagePath": "http://lorempixel.com/400/200/",
          "KeyWords": "qwe, rty",
          "MediaStockImageID": 12345,
          "Modified": "2016-08-16T07:54:19.387",
          "Taken": "2016-08-14T15:54:19.387",
          "Title": "Title2",
          "GetImages": {
            "Thumbnail_109_59": "http://f.nanafiles.co.il/upload/mediastock/img/28/0/12/12345.jpg",
            "Small_303_165": "http://f.nanafiles.co.il/upload/mediastock/img/493/0/12/12345.jpg",
            "Big_768_400": "http://f.nanafiles.co.il/upload/mediastock/img/1677/0/12/12345.jpg",
            "Standard_606_366": "http://f.nanafiles.co.il/upload/mediastock/img/1789/0/12/12345.jpg",
            "Medium_460_258": "http://f.nanafiles.co.il/upload/mediastock/img/693/0/12/12345.jpg"
          }
        },
        "isVisible": true,
        "Title": "SomeOtherAtAllTitle",
        "Id": 2
      },
      {
        "Thumb": {
          "Id": 3,
          "Comments": "Comments",
          "Created": "2016-08-15T07:54:19.387",
          "Credits": "ToMe",
          "ImagePath": "http://lorempixel.com/400/200/",
          "KeyWords": "qwe, rty",
          "MediaStockImageID": 12345,
          "Modified": "2016-08-16T07:54:19.387",
          "Taken": "2016-08-14T15:54:19.387",
          "Title": "Title3",
          "GetImages": {
            "Thumbnail_109_59": "http://f.nanafiles.co.il/upload/mediastock/img/28/0/12/12345.jpg",
            "Small_303_165": "http://f.nanafiles.co.il/upload/mediastock/img/493/0/12/12345.jpg",
            "Big_768_400": "http://f.nanafiles.co.il/upload/mediastock/img/1677/0/12/12345.jpg",
            "Standard_606_366": "http://f.nanafiles.co.il/upload/mediastock/img/1789/0/12/12345.jpg",
            "Medium_460_258": "http://f.nanafiles.co.il/upload/mediastock/img/693/0/12/12345.jpg"
          }
        },
        "isVisible": true,
        "Title": "Test",
        "Id": 3
      },
      {
        "Thumb": {
          "Id": 6,
          "Comments": "Comments",
          "Created": "2016-08-08T12:55:03.03",
          "Credits": "ToMe",
          "ImagePath": "http://lorempixel.com/400/200/",
          "KeyWords": null,
          "MediaStockImageID": 0,
          "Modified": "2016-08-09T12:55:03.03",
          "Taken": "2016-08-07T20:55:03.03",
          "Title": "Title6",
          "GetImages": {
            "Thumbnail_109_59": "",
            "Small_303_165": "",
            "Big_768_400": "",
            "Standard_606_366": "",
            "Medium_460_258": ""
          }
        },
        "isVisible": false,
        "Title": "SomeOtherTitle",
        "Id": 4
      },
      {
        "Thumb": {
          "Id": 1,
          "Comments": "Comments",
          "Created": "2016-08-15T07:54:19.38",
          "Credits": "ToMe",
          "ImagePath": "http://lorempixel.com/400/200/",
          "KeyWords": "qwe, rty",
          "MediaStockImageID": 12345,
          "Modified": "2016-08-16T07:54:19.38",
          "Taken": "2016-08-14T15:54:19.38",
          "Title": "Title1",
          "GetImages": {
            "Thumbnail_109_59": "http://f.nanafiles.co.il/upload/mediastock/img/28/0/12/12345.jpg",
            "Small_303_165": "http://f.nanafiles.co.il/upload/mediastock/img/493/0/12/12345.jpg",
            "Big_768_400": "http://f.nanafiles.co.il/upload/mediastock/img/1677/0/12/12345.jpg",
            "Standard_606_366": "http://f.nanafiles.co.il/upload/mediastock/img/1789/0/12/12345.jpg",
            "Medium_460_258": "http://f.nanafiles.co.il/upload/mediastock/img/693/0/12/12345.jpg"
          }
        },
        "isVisible": true,
        "Title": "SomeTitle",
        "Id": 1
      },
      {
        "Thumb": {
          "Id": 2,
          "Comments": "Comments",
          "Created": "2016-08-15T07:54:19.387",
          "Credits": "ToMe",
          "ImagePath": "http://lorempixel.com/400/200/",
          "KeyWords": "qwe, rty",
          "MediaStockImageID": 12345,
          "Modified": "2016-08-16T07:54:19.387",
          "Taken": "2016-08-14T15:54:19.387",
          "Title": "Title2",
          "GetImages": {
            "Thumbnail_109_59": "http://f.nanafiles.co.il/upload/mediastock/img/28/0/12/12345.jpg",
            "Small_303_165": "http://f.nanafiles.co.il/upload/mediastock/img/493/0/12/12345.jpg",
            "Big_768_400": "http://f.nanafiles.co.il/upload/mediastock/img/1677/0/12/12345.jpg",
            "Standard_606_366": "http://f.nanafiles.co.il/upload/mediastock/img/1789/0/12/12345.jpg",
            "Medium_460_258": "http://f.nanafiles.co.il/upload/mediastock/img/693/0/12/12345.jpg"
          }
        },
        "isVisible": true,
        "Title": "SomeOtherAtAllTitle",
        "Id": 2
      },
      {
        "Thumb": {
          "Id": 3,
          "Comments": "Comments",
          "Created": "2016-08-15T07:54:19.387",
          "Credits": "ToMe",
          "ImagePath": "http://lorempixel.com/400/200/",
          "KeyWords": "qwe, rty",
          "MediaStockImageID": 12345,
          "Modified": "2016-08-16T07:54:19.387",
          "Taken": "2016-08-14T15:54:19.387",
          "Title": "Title3",
          "GetImages": {
            "Thumbnail_109_59": "http://f.nanafiles.co.il/upload/mediastock/img/28/0/12/12345.jpg",
            "Small_303_165": "http://f.nanafiles.co.il/upload/mediastock/img/493/0/12/12345.jpg",
            "Big_768_400": "http://f.nanafiles.co.il/upload/mediastock/img/1677/0/12/12345.jpg",
            "Standard_606_366": "http://f.nanafiles.co.il/upload/mediastock/img/1789/0/12/12345.jpg",
            "Medium_460_258": "http://f.nanafiles.co.il/upload/mediastock/img/693/0/12/12345.jpg"
          }
        },
        "isVisible": true,
        "Title": "Test",
        "Id": 3
      },
      {
        "Thumb": {
          "Id": 6,
          "Comments": "Comments",
          "Created": "2016-08-08T12:55:03.03",
          "Credits": "ToMe",
          "ImagePath": "http://lorempixel.com/400/200/",
          "KeyWords": null,
          "MediaStockImageID": 0,
          "Modified": "2016-08-09T12:55:03.03",
          "Taken": "2016-08-07T20:55:03.03",
          "Title": "Title6",
          "GetImages": {
            "Thumbnail_109_59": "",
            "Small_303_165": "",
            "Big_768_400": "",
            "Standard_606_366": "",
            "Medium_460_258": ""
          }
        },
        "isVisible": false,
        "Title": "SomeOtherTitle",
        "Id": 4
      },
      {
        "Thumb": {
          "Id": 1,
          "Comments": "Comments",
          "Created": "2016-08-15T07:54:19.38",
          "Credits": "ToMe",
          "ImagePath": "http://lorempixel.com/400/200/",
          "KeyWords": "qwe, rty",
          "MediaStockImageID": 12345,
          "Modified": "2016-08-16T07:54:19.38",
          "Taken": "2016-08-14T15:54:19.38",
          "Title": "Title1",
          "GetImages": {
            "Thumbnail_109_59": "http://f.nanafiles.co.il/upload/mediastock/img/28/0/12/12345.jpg",
            "Small_303_165": "http://f.nanafiles.co.il/upload/mediastock/img/493/0/12/12345.jpg",
            "Big_768_400": "http://f.nanafiles.co.il/upload/mediastock/img/1677/0/12/12345.jpg",
            "Standard_606_366": "http://f.nanafiles.co.il/upload/mediastock/img/1789/0/12/12345.jpg",
            "Medium_460_258": "http://f.nanafiles.co.il/upload/mediastock/img/693/0/12/12345.jpg"
          }
        },
        "isVisible": true,
        "Title": "SomeTitle",
        "Id": 1
      },
      {
        "Thumb": {
          "Id": 2,
          "Comments": "Comments",
          "Created": "2016-08-15T07:54:19.387",
          "Credits": "ToMe",
          "ImagePath": "http://lorempixel.com/400/200/",
          "KeyWords": "qwe, rty",
          "MediaStockImageID": 12345,
          "Modified": "2016-08-16T07:54:19.387",
          "Taken": "2016-08-14T15:54:19.387",
          "Title": "Title2",
          "GetImages": {
            "Thumbnail_109_59": "http://f.nanafiles.co.il/upload/mediastock/img/28/0/12/12345.jpg",
            "Small_303_165": "http://f.nanafiles.co.il/upload/mediastock/img/493/0/12/12345.jpg",
            "Big_768_400": "http://f.nanafiles.co.il/upload/mediastock/img/1677/0/12/12345.jpg",
            "Standard_606_366": "http://f.nanafiles.co.il/upload/mediastock/img/1789/0/12/12345.jpg",
            "Medium_460_258": "http://f.nanafiles.co.il/upload/mediastock/img/693/0/12/12345.jpg"
          }
        },
        "isVisible": true,
        "Title": "SomeOtherAtAllTitle",
        "Id": 2
      },
      {
        "Thumb": {
          "Id": 3,
          "Comments": "Comments",
          "Created": "2016-08-15T07:54:19.387",
          "Credits": "ToMe",
          "ImagePath": "http://lorempixel.com/400/200/",
          "KeyWords": "qwe, rty",
          "MediaStockImageID": 12345,
          "Modified": "2016-08-16T07:54:19.387",
          "Taken": "2016-08-14T15:54:19.387",
          "Title": "Title3",
          "GetImages": {
            "Thumbnail_109_59": "http://f.nanafiles.co.il/upload/mediastock/img/28/0/12/12345.jpg",
            "Small_303_165": "http://f.nanafiles.co.il/upload/mediastock/img/493/0/12/12345.jpg",
            "Big_768_400": "http://f.nanafiles.co.il/upload/mediastock/img/1677/0/12/12345.jpg",
            "Standard_606_366": "http://f.nanafiles.co.il/upload/mediastock/img/1789/0/12/12345.jpg",
            "Medium_460_258": "http://f.nanafiles.co.il/upload/mediastock/img/693/0/12/12345.jpg"
          }
        },
        "isVisible": true,
        "Title": "Test",
        "Id": 3
      },
      {
        "Thumb": {
          "Id": 6,
          "Comments": "Comments",
          "Created": "2016-08-08T12:55:03.03",
          "Credits": "ToMe",
          "ImagePath": "http://lorempixel.com/400/200/",
          "KeyWords": null,
          "MediaStockImageID": 0,
          "Modified": "2016-08-09T12:55:03.03",
          "Taken": "2016-08-07T20:55:03.03",
          "Title": "Title6",
          "GetImages": {
            "Thumbnail_109_59": "",
            "Small_303_165": "",
            "Big_768_400": "",
            "Standard_606_366": "",
            "Medium_460_258": ""
          }
        },
        "isVisible": false,
        "Title": "SomeOtherTitle",
        "Id": 4
      },
      {
        "Thumb": {
          "Id": 1,
          "Comments": "Comments",
          "Created": "2016-08-15T07:54:19.38",
          "Credits": "ToMe",
          "ImagePath": "http://lorempixel.com/400/200/",
          "KeyWords": "qwe, rty",
          "MediaStockImageID": 12345,
          "Modified": "2016-08-16T07:54:19.38",
          "Taken": "2016-08-14T15:54:19.38",
          "Title": "Title1",
          "GetImages": {
            "Thumbnail_109_59": "http://f.nanafiles.co.il/upload/mediastock/img/28/0/12/12345.jpg",
            "Small_303_165": "http://f.nanafiles.co.il/upload/mediastock/img/493/0/12/12345.jpg",
            "Big_768_400": "http://f.nanafiles.co.il/upload/mediastock/img/1677/0/12/12345.jpg",
            "Standard_606_366": "http://f.nanafiles.co.il/upload/mediastock/img/1789/0/12/12345.jpg",
            "Medium_460_258": "http://f.nanafiles.co.il/upload/mediastock/img/693/0/12/12345.jpg"
          }
        },
        "isVisible": true,
        "Title": "SomeTitle",
        "Id": 1
      },
      {
        "Thumb": {
          "Id": 2,
          "Comments": "Comments",
          "Created": "2016-08-15T07:54:19.387",
          "Credits": "ToMe",
          "ImagePath": "http://lorempixel.com/400/200/",
          "KeyWords": "qwe, rty",
          "MediaStockImageID": 12345,
          "Modified": "2016-08-16T07:54:19.387",
          "Taken": "2016-08-14T15:54:19.387",
          "Title": "Title2",
          "GetImages": {
            "Thumbnail_109_59": "http://f.nanafiles.co.il/upload/mediastock/img/28/0/12/12345.jpg",
            "Small_303_165": "http://f.nanafiles.co.il/upload/mediastock/img/493/0/12/12345.jpg",
            "Big_768_400": "http://f.nanafiles.co.il/upload/mediastock/img/1677/0/12/12345.jpg",
            "Standard_606_366": "http://f.nanafiles.co.il/upload/mediastock/img/1789/0/12/12345.jpg",
            "Medium_460_258": "http://f.nanafiles.co.il/upload/mediastock/img/693/0/12/12345.jpg"
          }
        },
        "isVisible": true,
        "Title": "SomeOtherAtAllTitle",
        "Id": 2
      },
      {
        "Thumb": {
          "Id": 3,
          "Comments": "Comments",
          "Created": "2016-08-15T07:54:19.387",
          "Credits": "ToMe",
          "ImagePath": "http://lorempixel.com/400/200/",
          "KeyWords": "qwe, rty",
          "MediaStockImageID": 12345,
          "Modified": "2016-08-16T07:54:19.387",
          "Taken": "2016-08-14T15:54:19.387",
          "Title": "Title3",
          "GetImages": {
            "Thumbnail_109_59": "http://f.nanafiles.co.il/upload/mediastock/img/28/0/12/12345.jpg",
            "Small_303_165": "http://f.nanafiles.co.il/upload/mediastock/img/493/0/12/12345.jpg",
            "Big_768_400": "http://f.nanafiles.co.il/upload/mediastock/img/1677/0/12/12345.jpg",
            "Standard_606_366": "http://f.nanafiles.co.il/upload/mediastock/img/1789/0/12/12345.jpg",
            "Medium_460_258": "http://f.nanafiles.co.il/upload/mediastock/img/693/0/12/12345.jpg"
          }
        },
        "isVisible": true,
        "Title": "Test",
        "Id": 3
      },
      {
        "Thumb": {
          "Id": 6,
          "Comments": "Comments",
          "Created": "2016-08-08T12:55:03.03",
          "Credits": "ToMe",
          "ImagePath": "http://lorempixel.com/400/200/",
          "KeyWords": null,
          "MediaStockImageID": 0,
          "Modified": "2016-08-09T12:55:03.03",
          "Taken": "2016-08-07T20:55:03.03",
          "Title": "Title6",
          "GetImages": {
            "Thumbnail_109_59": "",
            "Small_303_165": "",
            "Big_768_400": "",
            "Standard_606_366": "",
            "Medium_460_258": ""
          }
        },
        "isVisible": false,
        "Title": "SomeOtherTitle",
        "Id": 4
      },
      {
        "Thumb": {
          "Id": 1,
          "Comments": "Comments",
          "Created": "2016-08-15T07:54:19.38",
          "Credits": "ToMe",
          "ImagePath": "http://lorempixel.com/400/200/",
          "KeyWords": "qwe, rty",
          "MediaStockImageID": 12345,
          "Modified": "2016-08-16T07:54:19.38",
          "Taken": "2016-08-14T15:54:19.38",
          "Title": "Title1",
          "GetImages": {
            "Thumbnail_109_59": "http://f.nanafiles.co.il/upload/mediastock/img/28/0/12/12345.jpg",
            "Small_303_165": "http://f.nanafiles.co.il/upload/mediastock/img/493/0/12/12345.jpg",
            "Big_768_400": "http://f.nanafiles.co.il/upload/mediastock/img/1677/0/12/12345.jpg",
            "Standard_606_366": "http://f.nanafiles.co.il/upload/mediastock/img/1789/0/12/12345.jpg",
            "Medium_460_258": "http://f.nanafiles.co.il/upload/mediastock/img/693/0/12/12345.jpg"
          }
        },
        "isVisible": true,
        "Title": "SomeTitle",
        "Id": 1
      },
      {
        "Thumb": {
          "Id": 2,
          "Comments": "Comments",
          "Created": "2016-08-15T07:54:19.387",
          "Credits": "ToMe",
          "ImagePath": "http://lorempixel.com/400/200/",
          "KeyWords": "qwe, rty",
          "MediaStockImageID": 12345,
          "Modified": "2016-08-16T07:54:19.387",
          "Taken": "2016-08-14T15:54:19.387",
          "Title": "Title2",
          "GetImages": {
            "Thumbnail_109_59": "http://f.nanafiles.co.il/upload/mediastock/img/28/0/12/12345.jpg",
            "Small_303_165": "http://f.nanafiles.co.il/upload/mediastock/img/493/0/12/12345.jpg",
            "Big_768_400": "http://f.nanafiles.co.il/upload/mediastock/img/1677/0/12/12345.jpg",
            "Standard_606_366": "http://f.nanafiles.co.il/upload/mediastock/img/1789/0/12/12345.jpg",
            "Medium_460_258": "http://f.nanafiles.co.il/upload/mediastock/img/693/0/12/12345.jpg"
          }
        },
        "isVisible": true,
        "Title": "SomeOtherAtAllTitle",
        "Id": 2
      },
      {
        "Thumb": {
          "Id": 3,
          "Comments": "Comments",
          "Created": "2016-08-15T07:54:19.387",
          "Credits": "ToMe",
          "ImagePath": "http://lorempixel.com/400/200/",
          "KeyWords": "qwe, rty",
          "MediaStockImageID": 12345,
          "Modified": "2016-08-16T07:54:19.387",
          "Taken": "2016-08-14T15:54:19.387",
          "Title": "Title3",
          "GetImages": {
            "Thumbnail_109_59": "http://f.nanafiles.co.il/upload/mediastock/img/28/0/12/12345.jpg",
            "Small_303_165": "http://f.nanafiles.co.il/upload/mediastock/img/493/0/12/12345.jpg",
            "Big_768_400": "http://f.nanafiles.co.il/upload/mediastock/img/1677/0/12/12345.jpg",
            "Standard_606_366": "http://f.nanafiles.co.il/upload/mediastock/img/1789/0/12/12345.jpg",
            "Medium_460_258": "http://f.nanafiles.co.il/upload/mediastock/img/693/0/12/12345.jpg"
          }
        },
        "isVisible": true,
        "Title": "Test",
        "Id": 3
      },
      {
        "Thumb": {
          "Id": 6,
          "Comments": "Comments",
          "Created": "2016-08-08T12:55:03.03",
          "Credits": "ToMe",
          "ImagePath": "http://lorempixel.com/400/200/",
          "KeyWords": null,
          "MediaStockImageID": 0,
          "Modified": "2016-08-09T12:55:03.03",
          "Taken": "2016-08-07T20:55:03.03",
          "Title": "Title6",
          "GetImages": {
            "Thumbnail_109_59": "",
            "Small_303_165": "",
            "Big_768_400": "",
            "Standard_606_366": "",
            "Medium_460_258": ""
          }
        },
        "isVisible": false,
        "Title": "SomeOtherTitle",
        "Id": 4
      },
      {
        "Thumb": {
          "Id": 1,
          "Comments": "Comments",
          "Created": "2016-08-15T07:54:19.38",
          "Credits": "ToMe",
          "ImagePath": "http://lorempixel.com/400/200/",
          "KeyWords": "qwe, rty",
          "MediaStockImageID": 12345,
          "Modified": "2016-08-16T07:54:19.38",
          "Taken": "2016-08-14T15:54:19.38",
          "Title": "Title1",
          "GetImages": {
            "Thumbnail_109_59": "http://f.nanafiles.co.il/upload/mediastock/img/28/0/12/12345.jpg",
            "Small_303_165": "http://f.nanafiles.co.il/upload/mediastock/img/493/0/12/12345.jpg",
            "Big_768_400": "http://f.nanafiles.co.il/upload/mediastock/img/1677/0/12/12345.jpg",
            "Standard_606_366": "http://f.nanafiles.co.il/upload/mediastock/img/1789/0/12/12345.jpg",
            "Medium_460_258": "http://f.nanafiles.co.il/upload/mediastock/img/693/0/12/12345.jpg"
          }
        },
        "isVisible": true,
        "Title": "SomeTitle",
        "Id": 1
      },
      {
        "Thumb": {
          "Id": 2,
          "Comments": "Comments",
          "Created": "2016-08-15T07:54:19.387",
          "Credits": "ToMe",
          "ImagePath": "http://lorempixel.com/400/200/",
          "KeyWords": "qwe, rty",
          "MediaStockImageID": 12345,
          "Modified": "2016-08-16T07:54:19.387",
          "Taken": "2016-08-14T15:54:19.387",
          "Title": "Title2",
          "GetImages": {
            "Thumbnail_109_59": "http://f.nanafiles.co.il/upload/mediastock/img/28/0/12/12345.jpg",
            "Small_303_165": "http://f.nanafiles.co.il/upload/mediastock/img/493/0/12/12345.jpg",
            "Big_768_400": "http://f.nanafiles.co.il/upload/mediastock/img/1677/0/12/12345.jpg",
            "Standard_606_366": "http://f.nanafiles.co.il/upload/mediastock/img/1789/0/12/12345.jpg",
            "Medium_460_258": "http://f.nanafiles.co.il/upload/mediastock/img/693/0/12/12345.jpg"
          }
        },
        "isVisible": true,
        "Title": "SomeOtherAtAllTitle",
        "Id": 2
      },
      {
        "Thumb": {
          "Id": 3,
          "Comments": "Comments",
          "Created": "2016-08-15T07:54:19.387",
          "Credits": "ToMe",
          "ImagePath": "http://lorempixel.com/400/200/",
          "KeyWords": "qwe, rty",
          "MediaStockImageID": 12345,
          "Modified": "2016-08-16T07:54:19.387",
          "Taken": "2016-08-14T15:54:19.387",
          "Title": "Title3",
          "GetImages": {
            "Thumbnail_109_59": "http://f.nanafiles.co.il/upload/mediastock/img/28/0/12/12345.jpg",
            "Small_303_165": "http://f.nanafiles.co.il/upload/mediastock/img/493/0/12/12345.jpg",
            "Big_768_400": "http://f.nanafiles.co.il/upload/mediastock/img/1677/0/12/12345.jpg",
            "Standard_606_366": "http://f.nanafiles.co.il/upload/mediastock/img/1789/0/12/12345.jpg",
            "Medium_460_258": "http://f.nanafiles.co.il/upload/mediastock/img/693/0/12/12345.jpg"
          }
        },
        "isVisible": true,
        "Title": "Test",
        "Id": 3
      },
      {
        "Thumb": {
          "Id": 6,
          "Comments": "Comments",
          "Created": "2016-08-08T12:55:03.03",
          "Credits": "ToMe",
          "ImagePath": "http://lorempixel.com/400/200/",
          "KeyWords": null,
          "MediaStockImageID": 0,
          "Modified": "2016-08-09T12:55:03.03",
          "Taken": "2016-08-07T20:55:03.03",
          "Title": "Title6",
          "GetImages": {
            "Thumbnail_109_59": "",
            "Small_303_165": "",
            "Big_768_400": "",
            "Standard_606_366": "",
            "Medium_460_258": ""
          }
        },
        "isVisible": false,
        "Title": "SomeOtherTitle",
        "Id": 4
      },
      {
        "Thumb": {
          "Id": 1,
          "Comments": "Comments",
          "Created": "2016-08-15T07:54:19.38",
          "Credits": "ToMe",
          "ImagePath": "http://lorempixel.com/400/200/",
          "KeyWords": "qwe, rty",
          "MediaStockImageID": 12345,
          "Modified": "2016-08-16T07:54:19.38",
          "Taken": "2016-08-14T15:54:19.38",
          "Title": "Title1",
          "GetImages": {
            "Thumbnail_109_59": "http://f.nanafiles.co.il/upload/mediastock/img/28/0/12/12345.jpg",
            "Small_303_165": "http://f.nanafiles.co.il/upload/mediastock/img/493/0/12/12345.jpg",
            "Big_768_400": "http://f.nanafiles.co.il/upload/mediastock/img/1677/0/12/12345.jpg",
            "Standard_606_366": "http://f.nanafiles.co.il/upload/mediastock/img/1789/0/12/12345.jpg",
            "Medium_460_258": "http://f.nanafiles.co.il/upload/mediastock/img/693/0/12/12345.jpg"
          }
        },
        "isVisible": true,
        "Title": "SomeTitle",
        "Id": 1
      },
      {
        "Thumb": {
          "Id": 2,
          "Comments": "Comments",
          "Created": "2016-08-15T07:54:19.387",
          "Credits": "ToMe",
          "ImagePath": "http://lorempixel.com/400/200/",
          "KeyWords": "qwe, rty",
          "MediaStockImageID": 12345,
          "Modified": "2016-08-16T07:54:19.387",
          "Taken": "2016-08-14T15:54:19.387",
          "Title": "Title2",
          "GetImages": {
            "Thumbnail_109_59": "http://f.nanafiles.co.il/upload/mediastock/img/28/0/12/12345.jpg",
            "Small_303_165": "http://f.nanafiles.co.il/upload/mediastock/img/493/0/12/12345.jpg",
            "Big_768_400": "http://f.nanafiles.co.il/upload/mediastock/img/1677/0/12/12345.jpg",
            "Standard_606_366": "http://f.nanafiles.co.il/upload/mediastock/img/1789/0/12/12345.jpg",
            "Medium_460_258": "http://f.nanafiles.co.il/upload/mediastock/img/693/0/12/12345.jpg"
          }
        },
        "isVisible": true,
        "Title": "SomeOtherAtAllTitle",
        "Id": 2
      },
      {
        "Thumb": {
          "Id": 3,
          "Comments": "Comments",
          "Created": "2016-08-15T07:54:19.387",
          "Credits": "ToMe",
          "ImagePath": "http://lorempixel.com/400/200/",
          "KeyWords": "qwe, rty",
          "MediaStockImageID": 12345,
          "Modified": "2016-08-16T07:54:19.387",
          "Taken": "2016-08-14T15:54:19.387",
          "Title": "Title3",
          "GetImages": {
            "Thumbnail_109_59": "http://f.nanafiles.co.il/upload/mediastock/img/28/0/12/12345.jpg",
            "Small_303_165": "http://f.nanafiles.co.il/upload/mediastock/img/493/0/12/12345.jpg",
            "Big_768_400": "http://f.nanafiles.co.il/upload/mediastock/img/1677/0/12/12345.jpg",
            "Standard_606_366": "http://f.nanafiles.co.il/upload/mediastock/img/1789/0/12/12345.jpg",
            "Medium_460_258": "http://f.nanafiles.co.il/upload/mediastock/img/693/0/12/12345.jpg"
          }
        },
        "isVisible": true,
        "Title": "Test",
        "Id": 3
      },
      {
        "Thumb": {
          "Id": 6,
          "Comments": "Comments",
          "Created": "2016-08-08T12:55:03.03",
          "Credits": "ToMe",
          "ImagePath": "http://lorempixel.com/400/200/",
          "KeyWords": null,
          "MediaStockImageID": 0,
          "Modified": "2016-08-09T12:55:03.03",
          "Taken": "2016-08-07T20:55:03.03",
          "Title": "Title6",
          "GetImages": {
            "Thumbnail_109_59": "",
            "Small_303_165": "",
            "Big_768_400": "",
            "Standard_606_366": "",
            "Medium_460_258": ""
          }
        },
        "isVisible": false,
        "Title": "SomeOtherTitle",
        "Id": 4
      },
      {
        "Thumb": {
          "Id": 1,
          "Comments": "Comments",
          "Created": "2016-08-15T07:54:19.38",
          "Credits": "ToMe",
          "ImagePath": "http://lorempixel.com/400/200/",
          "KeyWords": "qwe, rty",
          "MediaStockImageID": 12345,
          "Modified": "2016-08-16T07:54:19.38",
          "Taken": "2016-08-14T15:54:19.38",
          "Title": "Title1",
          "GetImages": {
            "Thumbnail_109_59": "http://f.nanafiles.co.il/upload/mediastock/img/28/0/12/12345.jpg",
            "Small_303_165": "http://f.nanafiles.co.il/upload/mediastock/img/493/0/12/12345.jpg",
            "Big_768_400": "http://f.nanafiles.co.il/upload/mediastock/img/1677/0/12/12345.jpg",
            "Standard_606_366": "http://f.nanafiles.co.il/upload/mediastock/img/1789/0/12/12345.jpg",
            "Medium_460_258": "http://f.nanafiles.co.il/upload/mediastock/img/693/0/12/12345.jpg"
          }
        },
        "isVisible": true,
        "Title": "SomeTitle",
        "Id": 1
      },
      {
        "Thumb": {
          "Id": 2,
          "Comments": "Comments",
          "Created": "2016-08-15T07:54:19.387",
          "Credits": "ToMe",
          "ImagePath": "http://lorempixel.com/400/200/",
          "KeyWords": "qwe, rty",
          "MediaStockImageID": 12345,
          "Modified": "2016-08-16T07:54:19.387",
          "Taken": "2016-08-14T15:54:19.387",
          "Title": "Title2",
          "GetImages": {
            "Thumbnail_109_59": "http://f.nanafiles.co.il/upload/mediastock/img/28/0/12/12345.jpg",
            "Small_303_165": "http://f.nanafiles.co.il/upload/mediastock/img/493/0/12/12345.jpg",
            "Big_768_400": "http://f.nanafiles.co.il/upload/mediastock/img/1677/0/12/12345.jpg",
            "Standard_606_366": "http://f.nanafiles.co.il/upload/mediastock/img/1789/0/12/12345.jpg",
            "Medium_460_258": "http://f.nanafiles.co.il/upload/mediastock/img/693/0/12/12345.jpg"
          }
        },
        "isVisible": true,
        "Title": "SomeOtherAtAllTitle",
        "Id": 2
      },
      {
        "Thumb": {
          "Id": 3,
          "Comments": "Comments",
          "Created": "2016-08-15T07:54:19.387",
          "Credits": "ToMe",
          "ImagePath": "http://lorempixel.com/400/200/",
          "KeyWords": "qwe, rty",
          "MediaStockImageID": 12345,
          "Modified": "2016-08-16T07:54:19.387",
          "Taken": "2016-08-14T15:54:19.387",
          "Title": "Title3",
          "GetImages": {
            "Thumbnail_109_59": "http://f.nanafiles.co.il/upload/mediastock/img/28/0/12/12345.jpg",
            "Small_303_165": "http://f.nanafiles.co.il/upload/mediastock/img/493/0/12/12345.jpg",
            "Big_768_400": "http://f.nanafiles.co.il/upload/mediastock/img/1677/0/12/12345.jpg",
            "Standard_606_366": "http://f.nanafiles.co.il/upload/mediastock/img/1789/0/12/12345.jpg",
            "Medium_460_258": "http://f.nanafiles.co.il/upload/mediastock/img/693/0/12/12345.jpg"
          }
        },
        "isVisible": true,
        "Title": "Test",
        "Id": 3
      },
      {
        "Thumb": {
          "Id": 6,
          "Comments": "Comments",
          "Created": "2016-08-08T12:55:03.03",
          "Credits": "ToMe",
          "ImagePath": "http://lorempixel.com/400/200/",
          "KeyWords": null,
          "MediaStockImageID": 0,
          "Modified": "2016-08-09T12:55:03.03",
          "Taken": "2016-08-07T20:55:03.03",
          "Title": "Title6",
          "GetImages": {
            "Thumbnail_109_59": "",
            "Small_303_165": "",
            "Big_768_400": "",
            "Standard_606_366": "",
            "Medium_460_258": ""
          }
        },
        "isVisible": false,
        "Title": "SomeOtherTitle",
        "Id": 4
      },
      {
        "Thumb": {
          "Id": 1,
          "Comments": "Comments",
          "Created": "2016-08-15T07:54:19.38",
          "Credits": "ToMe",
          "ImagePath": "http://lorempixel.com/400/200/",
          "KeyWords": "qwe, rty",
          "MediaStockImageID": 12345,
          "Modified": "2016-08-16T07:54:19.38",
          "Taken": "2016-08-14T15:54:19.38",
          "Title": "Title1",
          "GetImages": {
            "Thumbnail_109_59": "http://f.nanafiles.co.il/upload/mediastock/img/28/0/12/12345.jpg",
            "Small_303_165": "http://f.nanafiles.co.il/upload/mediastock/img/493/0/12/12345.jpg",
            "Big_768_400": "http://f.nanafiles.co.il/upload/mediastock/img/1677/0/12/12345.jpg",
            "Standard_606_366": "http://f.nanafiles.co.il/upload/mediastock/img/1789/0/12/12345.jpg",
            "Medium_460_258": "http://f.nanafiles.co.il/upload/mediastock/img/693/0/12/12345.jpg"
          }
        },
        "isVisible": true,
        "Title": "SomeTitle",
        "Id": 1
      },
      {
        "Thumb": {
          "Id": 2,
          "Comments": "Comments",
          "Created": "2016-08-15T07:54:19.387",
          "Credits": "ToMe",
          "ImagePath": "http://lorempixel.com/400/200/",
          "KeyWords": "qwe, rty",
          "MediaStockImageID": 12345,
          "Modified": "2016-08-16T07:54:19.387",
          "Taken": "2016-08-14T15:54:19.387",
          "Title": "Title2",
          "GetImages": {
            "Thumbnail_109_59": "http://f.nanafiles.co.il/upload/mediastock/img/28/0/12/12345.jpg",
            "Small_303_165": "http://f.nanafiles.co.il/upload/mediastock/img/493/0/12/12345.jpg",
            "Big_768_400": "http://f.nanafiles.co.il/upload/mediastock/img/1677/0/12/12345.jpg",
            "Standard_606_366": "http://f.nanafiles.co.il/upload/mediastock/img/1789/0/12/12345.jpg",
            "Medium_460_258": "http://f.nanafiles.co.il/upload/mediastock/img/693/0/12/12345.jpg"
          }
        },
        "isVisible": true,
        "Title": "SomeOtherAtAllTitle",
        "Id": 2
      },
      {
        "Thumb": {
          "Id": 3,
          "Comments": "Comments",
          "Created": "2016-08-15T07:54:19.387",
          "Credits": "ToMe",
          "ImagePath": "http://lorempixel.com/400/200/",
          "KeyWords": "qwe, rty",
          "MediaStockImageID": 12345,
          "Modified": "2016-08-16T07:54:19.387",
          "Taken": "2016-08-14T15:54:19.387",
          "Title": "Title3",
          "GetImages": {
            "Thumbnail_109_59": "http://f.nanafiles.co.il/upload/mediastock/img/28/0/12/12345.jpg",
            "Small_303_165": "http://f.nanafiles.co.il/upload/mediastock/img/493/0/12/12345.jpg",
            "Big_768_400": "http://f.nanafiles.co.il/upload/mediastock/img/1677/0/12/12345.jpg",
            "Standard_606_366": "http://f.nanafiles.co.il/upload/mediastock/img/1789/0/12/12345.jpg",
            "Medium_460_258": "http://f.nanafiles.co.il/upload/mediastock/img/693/0/12/12345.jpg"
          }
        },
        "isVisible": true,
        "Title": "Test",
        "Id": 3
      },
      {
        "Thumb": {
          "Id": 6,
          "Comments": "Comments",
          "Created": "2016-08-08T12:55:03.03",
          "Credits": "ToMe",
          "ImagePath": "http://lorempixel.com/400/200/",
          "KeyWords": null,
          "MediaStockImageID": 0,
          "Modified": "2016-08-09T12:55:03.03",
          "Taken": "2016-08-07T20:55:03.03",
          "Title": "Title6",
          "GetImages": {
            "Thumbnail_109_59": "",
            "Small_303_165": "",
            "Big_768_400": "",
            "Standard_606_366": "",
            "Medium_460_258": ""
          }
        },
        "isVisible": false,
        "Title": "SomeOtherTitle",
        "Id": 4
      },
      {
        "Thumb": {
          "Id": 1,
          "Comments": "Comments",
          "Created": "2016-08-15T07:54:19.38",
          "Credits": "ToMe",
          "ImagePath": "http://lorempixel.com/400/200/",
          "KeyWords": "qwe, rty",
          "MediaStockImageID": 12345,
          "Modified": "2016-08-16T07:54:19.38",
          "Taken": "2016-08-14T15:54:19.38",
          "Title": "Title1",
          "GetImages": {
            "Thumbnail_109_59": "http://f.nanafiles.co.il/upload/mediastock/img/28/0/12/12345.jpg",
            "Small_303_165": "http://f.nanafiles.co.il/upload/mediastock/img/493/0/12/12345.jpg",
            "Big_768_400": "http://f.nanafiles.co.il/upload/mediastock/img/1677/0/12/12345.jpg",
            "Standard_606_366": "http://f.nanafiles.co.il/upload/mediastock/img/1789/0/12/12345.jpg",
            "Medium_460_258": "http://f.nanafiles.co.il/upload/mediastock/img/693/0/12/12345.jpg"
          }
        },
        "isVisible": true,
        "Title": "SomeTitle",
        "Id": 1
      },
      {
        "Thumb": {
          "Id": 2,
          "Comments": "Comments",
          "Created": "2016-08-15T07:54:19.387",
          "Credits": "ToMe",
          "ImagePath": "http://lorempixel.com/400/200/",
          "KeyWords": "qwe, rty",
          "MediaStockImageID": 12345,
          "Modified": "2016-08-16T07:54:19.387",
          "Taken": "2016-08-14T15:54:19.387",
          "Title": "Title2",
          "GetImages": {
            "Thumbnail_109_59": "http://f.nanafiles.co.il/upload/mediastock/img/28/0/12/12345.jpg",
            "Small_303_165": "http://f.nanafiles.co.il/upload/mediastock/img/493/0/12/12345.jpg",
            "Big_768_400": "http://f.nanafiles.co.il/upload/mediastock/img/1677/0/12/12345.jpg",
            "Standard_606_366": "http://f.nanafiles.co.il/upload/mediastock/img/1789/0/12/12345.jpg",
            "Medium_460_258": "http://f.nanafiles.co.il/upload/mediastock/img/693/0/12/12345.jpg"
          }
        },
        "isVisible": true,
        "Title": "SomeOtherAtAllTitle",
        "Id": 2
      },
      {
        "Thumb": {
          "Id": 3,
          "Comments": "Comments",
          "Created": "2016-08-15T07:54:19.387",
          "Credits": "ToMe",
          "ImagePath": "http://lorempixel.com/400/200/",
          "KeyWords": "qwe, rty",
          "MediaStockImageID": 12345,
          "Modified": "2016-08-16T07:54:19.387",
          "Taken": "2016-08-14T15:54:19.387",
          "Title": "Title3",
          "GetImages": {
            "Thumbnail_109_59": "http://f.nanafiles.co.il/upload/mediastock/img/28/0/12/12345.jpg",
            "Small_303_165": "http://f.nanafiles.co.il/upload/mediastock/img/493/0/12/12345.jpg",
            "Big_768_400": "http://f.nanafiles.co.il/upload/mediastock/img/1677/0/12/12345.jpg",
            "Standard_606_366": "http://f.nanafiles.co.il/upload/mediastock/img/1789/0/12/12345.jpg",
            "Medium_460_258": "http://f.nanafiles.co.il/upload/mediastock/img/693/0/12/12345.jpg"
          }
        },
        "isVisible": true,
        "Title": "Test",
        "Id": 3
      },
      {
        "Thumb": {
          "Id": 6,
          "Comments": "Comments",
          "Created": "2016-08-08T12:55:03.03",
          "Credits": "ToMe",
          "ImagePath": "http://lorempixel.com/400/200/",
          "KeyWords": null,
          "MediaStockImageID": 0,
          "Modified": "2016-08-09T12:55:03.03",
          "Taken": "2016-08-07T20:55:03.03",
          "Title": "Title6",
          "GetImages": {
            "Thumbnail_109_59": "",
            "Small_303_165": "",
            "Big_768_400": "",
            "Standard_606_366": "",
            "Medium_460_258": ""
          }
        },
        "isVisible": false,
        "Title": "SomeOtherTitle",
        "Id": 4
      },
      {
        "Thumb": {
          "Id": 1,
          "Comments": "Comments",
          "Created": "2016-08-15T07:54:19.38",
          "Credits": "ToMe",
          "ImagePath": "http://lorempixel.com/400/200/",
          "KeyWords": "qwe, rty",
          "MediaStockImageID": 12345,
          "Modified": "2016-08-16T07:54:19.38",
          "Taken": "2016-08-14T15:54:19.38",
          "Title": "Title1",
          "GetImages": {
            "Thumbnail_109_59": "http://f.nanafiles.co.il/upload/mediastock/img/28/0/12/12345.jpg",
            "Small_303_165": "http://f.nanafiles.co.il/upload/mediastock/img/493/0/12/12345.jpg",
            "Big_768_400": "http://f.nanafiles.co.il/upload/mediastock/img/1677/0/12/12345.jpg",
            "Standard_606_366": "http://f.nanafiles.co.il/upload/mediastock/img/1789/0/12/12345.jpg",
            "Medium_460_258": "http://f.nanafiles.co.il/upload/mediastock/img/693/0/12/12345.jpg"
          }
        },
        "isVisible": true,
        "Title": "SomeTitle",
        "Id": 1
      },
      {
        "Thumb": {
          "Id": 2,
          "Comments": "Comments",
          "Created": "2016-08-15T07:54:19.387",
          "Credits": "ToMe",
          "ImagePath": "http://lorempixel.com/400/200/",
          "KeyWords": "qwe, rty",
          "MediaStockImageID": 12345,
          "Modified": "2016-08-16T07:54:19.387",
          "Taken": "2016-08-14T15:54:19.387",
          "Title": "Title2",
          "GetImages": {
            "Thumbnail_109_59": "http://f.nanafiles.co.il/upload/mediastock/img/28/0/12/12345.jpg",
            "Small_303_165": "http://f.nanafiles.co.il/upload/mediastock/img/493/0/12/12345.jpg",
            "Big_768_400": "http://f.nanafiles.co.il/upload/mediastock/img/1677/0/12/12345.jpg",
            "Standard_606_366": "http://f.nanafiles.co.il/upload/mediastock/img/1789/0/12/12345.jpg",
            "Medium_460_258": "http://f.nanafiles.co.il/upload/mediastock/img/693/0/12/12345.jpg"
          }
        },
        "isVisible": true,
        "Title": "SomeOtherAtAllTitle",
        "Id": 2
      },
      {
        "Thumb": {
          "Id": 3,
          "Comments": "Comments",
          "Created": "2016-08-15T07:54:19.387",
          "Credits": "ToMe",
          "ImagePath": "http://lorempixel.com/400/200/",
          "KeyWords": "qwe, rty",
          "MediaStockImageID": 12345,
          "Modified": "2016-08-16T07:54:19.387",
          "Taken": "2016-08-14T15:54:19.387",
          "Title": "Title3",
          "GetImages": {
            "Thumbnail_109_59": "http://f.nanafiles.co.il/upload/mediastock/img/28/0/12/12345.jpg",
            "Small_303_165": "http://f.nanafiles.co.il/upload/mediastock/img/493/0/12/12345.jpg",
            "Big_768_400": "http://f.nanafiles.co.il/upload/mediastock/img/1677/0/12/12345.jpg",
            "Standard_606_366": "http://f.nanafiles.co.il/upload/mediastock/img/1789/0/12/12345.jpg",
            "Medium_460_258": "http://f.nanafiles.co.il/upload/mediastock/img/693/0/12/12345.jpg"
          }
        },
        "isVisible": true,
        "Title": "Test",
        "Id": 3
      },
      {
        "Thumb": {
          "Id": 6,
          "Comments": "Comments",
          "Created": "2016-08-08T12:55:03.03",
          "Credits": "ToMe",
          "ImagePath": "http://lorempixel.com/400/200/",
          "KeyWords": null,
          "MediaStockImageID": 0,
          "Modified": "2016-08-09T12:55:03.03",
          "Taken": "2016-08-07T20:55:03.03",
          "Title": "Title6",
          "GetImages": {
            "Thumbnail_109_59": "",
            "Small_303_165": "",
            "Big_768_400": "",
            "Standard_606_366": "",
            "Medium_460_258": ""
          }
        },
        "isVisible": false,
        "Title": "SomeOtherTitle",
        "Id": 4
      },
      {
        "Thumb": {
          "Id": 1,
          "Comments": "Comments",
          "Created": "2016-08-15T07:54:19.38",
          "Credits": "ToMe",
          "ImagePath": "http://lorempixel.com/400/200/",
          "KeyWords": "qwe, rty",
          "MediaStockImageID": 12345,
          "Modified": "2016-08-16T07:54:19.38",
          "Taken": "2016-08-14T15:54:19.38",
          "Title": "Title1",
          "GetImages": {
            "Thumbnail_109_59": "http://f.nanafiles.co.il/upload/mediastock/img/28/0/12/12345.jpg",
            "Small_303_165": "http://f.nanafiles.co.il/upload/mediastock/img/493/0/12/12345.jpg",
            "Big_768_400": "http://f.nanafiles.co.il/upload/mediastock/img/1677/0/12/12345.jpg",
            "Standard_606_366": "http://f.nanafiles.co.il/upload/mediastock/img/1789/0/12/12345.jpg",
            "Medium_460_258": "http://f.nanafiles.co.il/upload/mediastock/img/693/0/12/12345.jpg"
          }
        },
        "isVisible": true,
        "Title": "SomeTitle",
        "Id": 1
      },
      {
        "Thumb": {
          "Id": 2,
          "Comments": "Comments",
          "Created": "2016-08-15T07:54:19.387",
          "Credits": "ToMe",
          "ImagePath": "http://lorempixel.com/400/200/",
          "KeyWords": "qwe, rty",
          "MediaStockImageID": 12345,
          "Modified": "2016-08-16T07:54:19.387",
          "Taken": "2016-08-14T15:54:19.387",
          "Title": "Title2",
          "GetImages": {
            "Thumbnail_109_59": "http://f.nanafiles.co.il/upload/mediastock/img/28/0/12/12345.jpg",
            "Small_303_165": "http://f.nanafiles.co.il/upload/mediastock/img/493/0/12/12345.jpg",
            "Big_768_400": "http://f.nanafiles.co.il/upload/mediastock/img/1677/0/12/12345.jpg",
            "Standard_606_366": "http://f.nanafiles.co.il/upload/mediastock/img/1789/0/12/12345.jpg",
            "Medium_460_258": "http://f.nanafiles.co.il/upload/mediastock/img/693/0/12/12345.jpg"
          }
        },
        "isVisible": true,
        "Title": "SomeOtherAtAllTitle",
        "Id": 2
      },
      {
        "Thumb": {
          "Id": 3,
          "Comments": "Comments",
          "Created": "2016-08-15T07:54:19.387",
          "Credits": "ToMe",
          "ImagePath": "http://lorempixel.com/400/200/",
          "KeyWords": "qwe, rty",
          "MediaStockImageID": 12345,
          "Modified": "2016-08-16T07:54:19.387",
          "Taken": "2016-08-14T15:54:19.387",
          "Title": "Title3",
          "GetImages": {
            "Thumbnail_109_59": "http://f.nanafiles.co.il/upload/mediastock/img/28/0/12/12345.jpg",
            "Small_303_165": "http://f.nanafiles.co.il/upload/mediastock/img/493/0/12/12345.jpg",
            "Big_768_400": "http://f.nanafiles.co.il/upload/mediastock/img/1677/0/12/12345.jpg",
            "Standard_606_366": "http://f.nanafiles.co.il/upload/mediastock/img/1789/0/12/12345.jpg",
            "Medium_460_258": "http://f.nanafiles.co.il/upload/mediastock/img/693/0/12/12345.jpg"
          }
        },
        "isVisible": true,
        "Title": "Test",
        "Id": 3
      },
      {
        "Thumb": {
          "Id": 6,
          "Comments": "Comments",
          "Created": "2016-08-08T12:55:03.03",
          "Credits": "ToMe",
          "ImagePath": "http://lorempixel.com/400/200/",
          "KeyWords": null,
          "MediaStockImageID": 0,
          "Modified": "2016-08-09T12:55:03.03",
          "Taken": "2016-08-07T20:55:03.03",
          "Title": "Title6",
          "GetImages": {
            "Thumbnail_109_59": "",
            "Small_303_165": "",
            "Big_768_400": "",
            "Standard_606_366": "",
            "Medium_460_258": ""
          }
        },
        "isVisible": false,
        "Title": "SomeOtherTitle",
        "Id": 4
      },
      {
        "Thumb": {
          "Id": 1,
          "Comments": "Comments",
          "Created": "2016-08-15T07:54:19.38",
          "Credits": "ToMe",
          "ImagePath": "http://lorempixel.com/400/200/",
          "KeyWords": "qwe, rty",
          "MediaStockImageID": 12345,
          "Modified": "2016-08-16T07:54:19.38",
          "Taken": "2016-08-14T15:54:19.38",
          "Title": "Title1",
          "GetImages": {
            "Thumbnail_109_59": "http://f.nanafiles.co.il/upload/mediastock/img/28/0/12/12345.jpg",
            "Small_303_165": "http://f.nanafiles.co.il/upload/mediastock/img/493/0/12/12345.jpg",
            "Big_768_400": "http://f.nanafiles.co.il/upload/mediastock/img/1677/0/12/12345.jpg",
            "Standard_606_366": "http://f.nanafiles.co.il/upload/mediastock/img/1789/0/12/12345.jpg",
            "Medium_460_258": "http://f.nanafiles.co.il/upload/mediastock/img/693/0/12/12345.jpg"
          }
        },
        "isVisible": true,
        "Title": "SomeTitle",
        "Id": 1
      },
      {
        "Thumb": {
          "Id": 2,
          "Comments": "Comments",
          "Created": "2016-08-15T07:54:19.387",
          "Credits": "ToMe",
          "ImagePath": "http://lorempixel.com/400/200/",
          "KeyWords": "qwe, rty",
          "MediaStockImageID": 12345,
          "Modified": "2016-08-16T07:54:19.387",
          "Taken": "2016-08-14T15:54:19.387",
          "Title": "Title2",
          "GetImages": {
            "Thumbnail_109_59": "http://f.nanafiles.co.il/upload/mediastock/img/28/0/12/12345.jpg",
            "Small_303_165": "http://f.nanafiles.co.il/upload/mediastock/img/493/0/12/12345.jpg",
            "Big_768_400": "http://f.nanafiles.co.il/upload/mediastock/img/1677/0/12/12345.jpg",
            "Standard_606_366": "http://f.nanafiles.co.il/upload/mediastock/img/1789/0/12/12345.jpg",
            "Medium_460_258": "http://f.nanafiles.co.il/upload/mediastock/img/693/0/12/12345.jpg"
          }
        },
        "isVisible": true,
        "Title": "SomeOtherAtAllTitle",
        "Id": 2
      },
      {
        "Thumb": {
          "Id": 3,
          "Comments": "Comments",
          "Created": "2016-08-15T07:54:19.387",
          "Credits": "ToMe",
          "ImagePath": "http://lorempixel.com/400/200/",
          "KeyWords": "qwe, rty",
          "MediaStockImageID": 12345,
          "Modified": "2016-08-16T07:54:19.387",
          "Taken": "2016-08-14T15:54:19.387",
          "Title": "Title3",
          "GetImages": {
            "Thumbnail_109_59": "http://f.nanafiles.co.il/upload/mediastock/img/28/0/12/12345.jpg",
            "Small_303_165": "http://f.nanafiles.co.il/upload/mediastock/img/493/0/12/12345.jpg",
            "Big_768_400": "http://f.nanafiles.co.il/upload/mediastock/img/1677/0/12/12345.jpg",
            "Standard_606_366": "http://f.nanafiles.co.il/upload/mediastock/img/1789/0/12/12345.jpg",
            "Medium_460_258": "http://f.nanafiles.co.il/upload/mediastock/img/693/0/12/12345.jpg"
          }
        },
        "isVisible": true,
        "Title": "Test",
        "Id": 3
      },
      {
        "Thumb": {
          "Id": 6,
          "Comments": "Comments",
          "Created": "2016-08-08T12:55:03.03",
          "Credits": "ToMe",
          "ImagePath": "http://lorempixel.com/400/200/",
          "KeyWords": null,
          "MediaStockImageID": 0,
          "Modified": "2016-08-09T12:55:03.03",
          "Taken": "2016-08-07T20:55:03.03",
          "Title": "Title6",
          "GetImages": {
            "Thumbnail_109_59": "",
            "Small_303_165": "",
            "Big_768_400": "",
            "Standard_606_366": "",
            "Medium_460_258": ""
          }
        },
        "isVisible": false,
        "Title": "SomeOtherTitle",
        "Id": 4
      }
    ];
  }

}
