import { Component, OnInit, OnDestroy } from '@angular/core';
import { Http } from '@angular/http';
import { GenreService } from '../../Vod/Services/genre.service';
import { IService } from '../../Vod/Services/iservice';
import { ProgramService } from '../../Vod/Services/program.service'
import { EpisodeService } from '../../Vod/Services/episode.service';
import { GenreModel } from '../../Vod/Models/genre';
import { IGridVodCommon } from '../../Vod/Models/IgridCommon';

@Component({
  selector: 'grid',
  templateUrl: 'grid.component.html',
  styleUrls: ['grid.component.css'],
  host: {
    '(window:scroll)': 'scrolleEvent($event)'
  }
})
export class GridComponent implements OnInit, OnDestroy {
  items: IGridVodCommon[] = [];
  subscriber: any;
  services: any[] = [];
  selectedItem: any;
  isLoading: boolean = true;
  skip: number = 0;
  top: number = 40;

  constructor(context: Http) {
    this.services.push(new GenreService(context));
    this.services.push(new ProgramService(context));
    console.log(this.items);
    
  }


  isScrolled = false;
  currPos: number = 0;
  startPos: number = 0;
  changePos: number = 50;
  increasePosition: number = 50;

  scrolleEvent(evt) {
    this.currPos = (window.pageYOffset || evt.target.scrollTop) - (evt.target.clientTop || 0);
    if (this.currPos >= this.changePos) {
      this.changePos = this.currPos + this.increasePosition;
      this.isScrolled = true;
      console.log("current position: " + this.currPos);
      console.log("change position: " + this.changePos);
      this.skip += this.top;
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
  }

  clearItem(data) {
    this.selectedItem = null;
  }
  getItems() {
    this.subscriber = this.services[0].getAll(this.top, this.skip).subscribe(data => {
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