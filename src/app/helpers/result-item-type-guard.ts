const resultItemGuard =  (arg: any) => {
    if(arg.Temp_A !== undefined) {
        return 'weather-item';
    } else {
        return 'search-item';
    }
}

export default resultItemGuard;