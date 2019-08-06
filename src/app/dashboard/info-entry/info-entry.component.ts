import { Component, OnInit, Input } from '@angular/core';
import { IResultItem } from 'app/models/result-item.interface';
import resultItemGuard from 'app/helpers/result-item-type-guard';

@Component({
  selector: 'app-info-entry',
  templateUrl: './info-entry.component.html',
  styleUrls: ['./info-entry.component.scss']
})
export class InfoEntryComponent implements OnInit {

  // resultItem: IResultItem;
  resultItemType: string; 

  @Input() resultItem;
  // set resultItem(item: IResultItem) {
  //   console.log(item);
  //   this.resultItem = item;
  //   this.resultItemType = resultItemGuard(item);
  // }

  constructor() { 
    console.log('item');
  }

  ngOnInit() {

  }

}
