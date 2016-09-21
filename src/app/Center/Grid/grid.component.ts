import { Component, OnInit, OnDestroy } from '@angular/core';
import { Http } from '@angular/http';
import { GenreService } from '../../Vod/Services/genre.service';
import { IService } from '../../Vod/Services/iservice';
import { ProgramService } from '../../Vod/Services/program.service';
import { EpisodeService } from '../../Vod/Services/episode.service';
import { Genre } from '../../Vod/Models/genre';
import { IGridCommon } from '../../Vod/Models/IgridCommon';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'grid',
  templateUrl: 'grid.component.html',
  styleUrls: ['grid.component.css'],
  host: {
    '(window:scroll)': 'scrolleEvent($event)'
  }
})
export class GridComponent implements OnInit, OnDestroy {
  items: IGridCommon[] = [];
  subscriber: any;
  services: any[] = [];
  selectedItem: any;
  isLoading: boolean = true;
  skip: number = 0;
  top: number = 40;
  isScrolled = false;
  currPos: number = 0;
  startPos: number = 0;
  changePos: number = 50;
  increasePosition: number = 300;

  constructor(context: Http, public route: ActivatedRoute) {
    console.log('grid ctor:' + route);
    // console.log("test:" + data);


    this.services.push(new GenreService(context));
    this.services.push(new ProgramService(context));
    this.services.push(new EpisodeService(context));
  }

  scrolleEvent(evt) {
    console.log();
    this.currPos = (window.pageYOffset || evt.target.scrollBottom) - (evt.target.clientBottom || 0);
    if (this.currPos >= this.changePos) {
      this.changePos = this.currPos + this.increasePosition;
      this.isScrolled = true;
      this.skip += this.top;
      console.log("current position: " + this.currPos);
      console.log("change position: " + this.changePos);
      this.getItems();
    } else {
      this.isScrolled = false;
    }
  }

  setExpandedItem(item) {
    this.selectedItem = item;
  }
  ngOnInit() {
    this.getItems();
    let t = this.route.params.forEach((params: Params) => {
      let id = +params['id']; // (+) converts string 'id' to a number
    });

  }

  clearItem(data) {
    this.selectedItem = null;
  }
  getItems() {
    this.subscriber = this.services[2].getAll(this.top, this.skip).subscribe(data => {
      this.isLoading = false;
      data.forEach(element => {
        this.items.push(element);
      });
    });


  }

  ngOnDestroy() {
    this.subscriber.unsubscribe();
  }
}
