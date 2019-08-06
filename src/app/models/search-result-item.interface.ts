import { IResultItem } from './result-item.interface';

interface ISearchItemOwner {
    reputation: number;
    user_id: number;
    user_type: string;
    accept_rate: number;
    profile_image: string;
    display_name: string;
    link: string;
}

export interface ISearchResultItem extends IResultItem {
    tags: string[];
    owner: ISearchItemOwner;
    view_count: number;
    is_answered: boolean;
    answer_count: number;
    score: number;
    last_activity_date: number;
    creation_date: number;
    question_id: number;
    link: string;
    title: string;
}