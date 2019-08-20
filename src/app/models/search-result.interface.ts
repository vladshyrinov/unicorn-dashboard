import { ISearchResultItem } from './search-result-item.interface';

export interface ISearchResult {
    items: ISearchResultItem[];
    has_more: boolean;
    quota_max: number;
    quota_remaining: number;
}
