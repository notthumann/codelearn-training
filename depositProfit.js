function depositProfit(deposit, rate, threshold){
    let profit = 0;
    let count = 1;
    while (deposit < threshold) {
        profit = deposit*rate/100;
        deposit+=profit;
        count++;
    }
    return count - 1;
}
