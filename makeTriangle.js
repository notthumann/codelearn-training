function makeTriangle(a, b, c){
    if (a+b>c && a+c>b && c+b>a) {
        return 0;
    }
    return Math.max(a,b,c) == a ? a - b - c +1 : Math.max(a ,b, c) === b ? b - a -c +1 : c -a -b +1;
}
