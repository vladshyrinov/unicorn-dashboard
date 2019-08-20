import { IResultItem } from './result-item.interface';

export interface IWeatherResultItem extends IResultItem {
    Datum: string;
    Feuchte_A: number;
    Helligkeit: number;
    Luftdruck: number;
    Regen: number;
    Richtung: number;
    Temp_3: number;
    Temp_A: number;
    Wind: number;
    Zeit: string;
}
