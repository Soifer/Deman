import { Component, OnInit, OnDestroy } from '@angular/core';
import { Http } from '@angular/http';
import { GenreService } from '../../Vod/Services/genre.service';
import { EpisodeService } from '../../Vod/Services/episode.service';
import { UiEventsModel } from '../../Vod/Models/uiEventsModel';
import { GenreModel } from '../../Vod/Models/genre';
import { IGridCommon } from '../../Vod/Models/IGridCommon';
@Component({
  selector: 'grid',
  templateUrl: 'grid.component.html',
  styleUrls: ['grid.component.css'],
})
export class GridComponent implements OnInit, OnDestroy {
  items: GenreModel[];
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
}
