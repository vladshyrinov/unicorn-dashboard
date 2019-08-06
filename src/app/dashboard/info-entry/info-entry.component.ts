import { Component, OnInit, Input } from '@angular/core';
import { IResultItem } from '../../models/result-item.interface';
import { ResultItemType } from '../../models/result-item-type.enum';
import resultItemGuard from '../../helpers/result-item-type-guard';

@Component({
  selector: 'app-info-entry',
  templateUrl: './info-entry.component.html',
  styleUrls: ['./info-entry.component.scss']
})
export class InfoEntryComponent implements OnInit {

  _resultItem: IResultItem;
  resultItemType: ResultItemType; 

  get resultItem(): IResultItem {
    return this._resultItem;
  }

  @Input('resultItem')
  set resultItem(item: IResultItem) {
    this._resultItem = item;
    this.resultItemType = resultItemGuard(item);
  }

  constructor() { }

  ngOnInit() { }
}
