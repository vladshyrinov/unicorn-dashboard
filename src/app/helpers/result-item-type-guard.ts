import { ResultItemType } from '../models/result-item-type.enum';

const resultItemGuard =  (arg: any) => {
    if(arg.Temp_A !== undefined) {
        return ResultItemType.WEATHER;
    } else {
        return ResultItemType.SEARCH;
    }
}

export default resultItemGuard;
