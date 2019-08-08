import { Component, OnInit, Input } from '@angular/core';
import { IResultItem } from '../../models/result-item.interface';
import { ResultItemType } from '../../models/result-item-type.enum';
import resultItemGuard from '../../helpers/result-item-type-guard';
import { ISearchResultItem } from '../../models/search-result-item.interface';

@Component({
  selector: 'app-info-entry',
  templateUrl: './info-entry.component.html',
  styleUrls: ['./info-entry.component.scss']
})
export class InfoEntryComponent implements OnInit {

  private _resultItem: IResultItem;
  public resultItemType: ResultItemType;

  public get resultItem(): IResultItem {
    return this._resultItem;
  }

  @Input('resultItem')
  public set resultItem(item: IResultItem) {
    this._resultItem = item;
    this.resultItemType = resultItemGuard(item);
  }

  public get creationDate(): string {
    const searchResultItem = <ISearchResultItem>this._resultItem;
    const date = new Date(searchResultItem.creation_date * 1000);
    return date.toLocaleString();
  }

  constructor() { }

  ngOnInit() { }

  public htmlDecode(input) {
    const e = document.createElement('textarea');
    e.innerHTML = input;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
  }
}
