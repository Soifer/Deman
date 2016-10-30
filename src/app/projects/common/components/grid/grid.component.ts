import { Component, OnInit, OnDestroy, Provider, ReflectiveInjector } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { Http } from '@angular/http';

import { IService } from '../../Iservice';
import { Constants } from '../../Constants';
import { VodFactory } from '../../../vod/services/vod.factory.service';

import { IGridCommon } from '../../Igrid-common';
import { DragulaService } from 'ng2-dragula/ng2-dragula';
import { ApiControllers, VodServices } from '../../Enums';

@Component({
  selector: 'grid',
  templateUrl: 'grid.component.html',
  styleUrls: ['grid.component.css']
})

export class GridComponent implements OnInit, OnDestroy {
  items: IGridCommon[] = [];
  selectedItem: any;
  isLoading: boolean = true;
  skip: number = 0;
  top: number;
  isScrolled = false;
  currPosition: number;
  lastPosition: number = 150;
  deltaPosition: number = 50;
  totalItems: number = 0;
  windowHeight: number;
  windowWidth: number;
  itemWidth: number = 274;
  itemHeight: number = 155;
  node: any;


  private _currentService: IService<any>;
  private _subscriber: Subscription;
  private _counterSubscriber: Subscription;
  private _factory: VodFactory;

  constructor(public route: ActivatedRoute, private _dragulaService: DragulaService, private _http: Http) {
    console.log('grid ctor');

    this._factory = new VodFactory(this._http);

    this.windowHeight = window.innerHeight;
    this.windowWidth = window.innerWidth;

    _dragulaService.setOptions('cardGrid', {
      revertOnSpill: true
    });
    _dragulaService.dropModel.subscribe((value) => {
      this.onDropModel(value.slice(1));
    });
    _dragulaService.removeModel.subscribe((value) => {
      this.onRemoveModel(value.slice(1));
    });
  }

  getItemsCapacity() {
    let rows = +(this.windowWidth / this.itemWidth).toFixed();
    let columns = +(this.windowHeight / this.itemHeight).toFixed();
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
    let serviceName = this.route.snapshot.params[Constants.SERVICE_KEY];
    let instructions = this.route.snapshot.params[Constants.SEARCH_KEY];
    console.log('init. Service: ' + serviceName + ', key: ' + instructions);

    this.getService(serviceName);

    this.items = [];
    this.getCount();
    this.getItems();
  }

  clearItem(data) {
    this.selectedItem = null;
  }

  getItems() {
    this._subscriber = this._currentService.getAll(this.top, this.skip).subscribe(data => {
      this.isLoading = false;
      data.forEach(element => {
        this.items.push(element);
      });

    });
  }
  getCount() {
    this._counterSubscriber = this._currentService.getCount()
      .subscribe(data => {
        this.totalItems = data;
      });
  }
  ngOnDestroy() {
    this._subscriber.unsubscribe();
    this._counterSubscriber.unsubscribe();
    this._dragulaService.destroy('cardGrid');
  }

  private onDropModel(args: Element[]) {
    let [el, target, source] = args;
    console.log('drop targ: ' + target + ',so: ' + source);

  }

  private onRemoveModel(args) {
    let [el, source] = args;
    console.log('drop el: ' + el + ',so: ' + source);
  }

  private getService(name: string) {
    this._currentService = this._factory.GetInstanceByKey(name);
    console.log(this._currentService);
  }
}
