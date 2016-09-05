import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'centerGrid',
  templateUrl: 'grid.component.html',

  styles: [`
            md-card{ min-width:150px; width:258px;height:100px;}
            .card-container{
                            display: flex;
                            flex-flow: row wrap;
                      
                                
                          }
             .card-container > md-card{
                            margin: 10px;  
                            border: 0 1px 1px 0;                    
                          }
             .card-container > md-card  md-card-subtitle{
                    display:inline-block;
                    width:152px;
                    white-space: nowrap;
                    overflow:hidden !important;
                    text-overflow: ellipsis;
             }                          

             `]

})
export class GridComponent implements OnInit {
  items = [
    { 'Id': '1', 'Name': 'One One', 'Url': 'http://loremflickr.com/320/240', 'isCollapsed': true, 'Text': 'Lorem ipsum dolor sit amet.' },
    { 'Id': '2', 'Name': 'Two One', 'Url': 'http://loremflickr.com/320/240', 'isCollapsed': true, 'Text': 'Lorem ipsum dolor sit amet, consectetur.' },
    { 'Id': '3', 'Name': 'Three One', 'Url': 'http://loremflickr.com/320/240', 'isCollapsed': true, 'Text': '123' },
    { 'Id': '4', 'Name': 'Four One', 'Url': 'http://loremflickr.com/320/240', 'isCollapsed': true, 'Text': 'asdfsadf' },
    { 'Id': '5', 'Name': 'Five One', 'Url': 'http://loremflickr.com/320/240', 'isCollapsed': true, 'Text': 'adsfasdf' }
    ,
    { 'Id': '5', 'Name': 'Five One', 'Url': 'http://loremflickr.com/320/240', 'isCollapsed': true, 'Text': 'adsfasdf' }
    ,
    { 'Id': '5', 'Name': 'Five One', 'Url': 'http://loremflickr.com/320/240', 'isCollapsed': true, 'Text': 'adsfasdf' }
    ,
    { 'Id': '5', 'Name': 'Five One', 'Url': 'http://loremflickr.com/320/240', 'isCollapsed': true, 'Text': 'adsfasdf' }
    ,
    { 'Id': '5', 'Name': 'Five One', 'Url': 'http://loremflickr.com/320/240', 'isCollapsed': true, 'Text': 'adsfasdf' }
    ,
    { 'Id': '5', 'Name': 'Five One', 'Url': 'http://loremflickr.com/320/240', 'isCollapsed': true, 'Text': 'adsfasdf' }
    ,
    { 'Id': '5', 'Name': 'Five One', 'Url': 'http://loremflickr.com/320/240', 'isCollapsed': true, 'Text': 'adsfasdf' }
    ,
    { 'Id': '5', 'Name': 'Five One', 'Url': 'http://loremflickr.com/320/240', 'isCollapsed': true, 'Text': 'adsfasdf' }
    ,
    { 'Id': '5', 'Name': 'Five One', 'Url': 'http://loremflickr.com/320/240', 'isCollapsed': true, 'Text': 'adsfasdf' }
  ];
  selectedItem: any;
  constructor() { }
  onClick(item) {
    this.selectedItem = item;
  }
  ngOnInit() { }
  clearItem() {
    this.selectedItem = null;
    console.log("click");

  }
}
