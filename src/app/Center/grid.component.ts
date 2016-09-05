import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'centerGrid',
  templateUrl: 'grid.component.html',

  styles: [`md-card{border:1px solid red;width:400px;}
            .card-container{
                            display: flex;
                            flex-flow: row wrap;}`]

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
  ];
  constructor() { }

  ngOnInit() { }

  collapse(item) {
    for (let elem of this.items) {
      elem.isCollapsed = true;
    }
    item.isCollapsed = !item.isCollapsed;
  }
}
