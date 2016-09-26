import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { Http } from '@angular/http';
import { GenreService } from '../../Vod/Services/genre.service';
import { IService } from '../../Vod/Services/iservice';
import { ProgramService } from '../../Vod/Services/program.service';
import { EpisodeService } from '../../Vod/Services/episode.service';
import { SeasonService } from '../../Vod/Services/season.service';
import { Genre } from '../../Vod/Models/genre';
import { IGridCommon } from '../../Vod/Models/IgridCommon';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DragulaService } from 'ng2-dragula/ng2-dragula';

console.log('`GRID` component loaded asynchronously');

@Component({
  selector: 'grid',
  templateUrl: 'grid.component.html',
  styleUrls: ['grid.component.css'],
  // host: {
  //   '(window:scroll)': 'scrolleEvent($event)'
  // }
})



export class GridComponent implements OnInit, OnDestroy {
  items: IGridCommon[] = [];
  subscriber: any;
  routeSubscriber: any;
  services: any[] = [];
  selectedItem: any;
  isLoading: boolean = true;
  skip: number = 0;
  top: number;
  serviceId: number = 0;
  isScrolled = false;
  currPosition: number;
  lastPosition: number = 150;
  deltaPosition: number = 50;
  totalItems: number = 0;
  total: any;
  windowHeight: number;
  windowWidth: number;
  itemWidth: number = 274;
  itemHeight: number = 155;
  rows: number;
  columns: number;

  constructor(private context: Http, public route: ActivatedRoute, private dragulaService: DragulaService) {
    this.windowHeight = window.innerHeight;
    this.windowWidth = window.innerWidth;
    console.log('grid ctor:' + route);
    this.services.push(new GenreService(context));
    this.services.push(new ProgramService(context));
    this.services.push(new SeasonService(context));
    this.services.push(new EpisodeService(context));

    dragulaService.setOptions('cardGrid', {
      revertOnSpill: true
    });
    dragulaService.dropModel.subscribe((value) => {
      this.onDropModel(value.slice(1));
    });
    dragulaService.removeModel.subscribe((value) => {
      this.onRemoveModel(value.slice(1));
    });
  }
  private onDropModel(args) {
    let [el, target, source] = args;
    console.log("inDropModel: " + args);

    // do something else
  }

  private onRemoveModel(args) {
    let [el, source] = args;
    console.log("onRemoveModel: " + args);
  }

  getItemsCapacity() {
    this.rows = parseInt((this.windowWidth / this.itemWidth).toFixed());
    this.columns = parseInt((this.windowHeight / this.itemHeight).toFixed());
    this.top = (this.rows * this.columns);
  }

  onScroll(data) {
    this.skip += this.top;
    this.getItems();
  }

  setExpandedItem(item) {
    this.selectedItem = item;
  }

  ngOnInit() {

    this.getItemsCapacity();
    this.routeSubscriber = this.route.params.subscribe(params => {
      this.serviceId = Number.parseInt(params['id']);
      this.items = [];
      this.getCount();
      this.getItems();

    });

  }

  clearItem(data) {
    this.selectedItem = null;
  }

  getItems() {
    this.subscriber = this.services[isNaN(this.serviceId) ? 0 : this.serviceId].getAll(this.top, this.skip).subscribe(data => {
      this.isLoading = false;
      data.forEach(element => {
        this.items.push(element);
      });

    });
  }
  getCount() {
    this.total = this.services[isNaN(this.serviceId) ? 0 : this.serviceId].getCount('EpisodeController')
      .subscribe(data => {
        this.totalItems = data;
      });


    // this.services[isNaN(this.serviceId) ? 0 : this.serviceId].getCount('EpisodeController').s;
  }
  ngOnDestroy() {
    this.subscriber.unsubscribe();
    this.routeSubscriber.unsubscribe();
    this.services = [];
  }
}
