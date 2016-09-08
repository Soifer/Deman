import { Component, OnInit, OnDestroy } from '@angular/core';
import { Http } from '@angular/http';
import { Genre } from '../Vod/Models/genre';
import { GenreService } from '../Vod/Services/genre.service';

@Component({
  selector: 'centerGrid',
  templateUrl: 'grid.component.html',
  styleUrls: ['grid.css'],
})
export class GridComponent implements OnInit, OnDestroy {
  items: Genre[];
  subscriber: any;
  service: GenreService;
  selectedItem: any;

  constructor(context: Http) {
    this.service = new GenreService(context);
  }
  onClick(item, event) {
    this.selectedItem = item;
  }
  ngOnInit() {
    this.getItems();
  }
  clearItem(data) {
    this.selectedItem = null;
    console.log(data);
  }
  getItems() {
    this.subscriber = this.service.getAll().subscribe(data => {
      this.items = data;
    });
  }
  ngOnDestroy() {
    this.subscriber.unsubscribe();
  }
}
