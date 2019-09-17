function primaryFactor347(n){
    if(n <= 1) {
        return false;
    }
    while(n%3===0){
        n = n/3;
    }
    while(n%4===0){
        n = n/4;
    }
    while(n%7 ===0){
        n = n/7;
    }
    return n ===1;
}
