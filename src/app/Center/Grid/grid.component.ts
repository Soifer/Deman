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
import { Subscription } from 'rxjs/Rx';
import { DragulaService } from 'ng2-dragula/ng2-dragula';
import { ApiControllers, VodServices } from '../Enums';


@Component({
  selector: 'grid',
  templateUrl: 'grid.component.html',
  styleUrls: ['grid.component.css']
})



export class GridComponent implements OnInit, OnDestroy {
  urlServiceParam: string = 'service';
  items: IGridCommon[] = [];
  subscriber: Subscription;
  routeSubscriber: Subscription;
  counterSubscriber: Subscription;
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
  windowHeight: number;
  windowWidth: number;
  itemWidth: number = 274;
  itemHeight: number = 155;
  rows: number;
  columns: number;




  constructor(private context: Http, public route: ActivatedRoute, private dragulaService: DragulaService) {
    this.windowHeight = window.innerHeight;
    this.windowWidth = window.innerWidth;
    // console.log('grid ctor:' + route);
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
    let rows = parseInt((this.windowWidth / this.itemWidth).toFixed(), 10);
    let columns = parseInt((this.windowHeight / this.itemHeight).toFixed(), 10);
    this.top = (rows * columns);
  }


  onScroll() {
    this.skip += this.top;
    this.getItems();
  }

  setExpandedItem(item) {
    this.selectedItem = item;
  }

  ngOnInit() {
    this.getItemsCapacity();
    this.routeSubscriber = this.route.params.subscribe(params => {
      this.serviceId = Number.parseInt(VodServices[params[this.urlServiceParam]]);
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
    this.counterSubscriber = this.services[isNaN(this.serviceId) ? 0 : this.serviceId].getCount(ApiControllers[this.serviceId])
      .subscribe(data => {
        this.totalItems = data;
      });
  }
  ngOnDestroy() {
    this.subscriber.unsubscribe();
    this.routeSubscriber.unsubscribe();
    this.counterSubscriber.unsubscribe();
    this.services = [];
  }
}
