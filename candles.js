function candles(a, b){
    let candles = a;
    let leftovers = a;
    while(leftovers >= b){
        candles += Math.floor(leftovers/b);
        leftovers = Math.floor(leftovers/b) + leftovers%b;
    }
    return candles;
}
