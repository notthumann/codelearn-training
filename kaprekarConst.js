function kaprekarConst(n) {
    let count = 0
    let maxN;
    let minN;
    while (true) {
        maxN = Number(n.toString().split('').sort(function (a, b) {
            return b - a;
        }).join(''));
        minN = Number(n.toString().split('').sort().join(''));
        sub = maxN - minN
        if(sub == 0 || sub < 1000) {
            return 0;
        }
        count++;
        if(sub == 6174) {
            break;
        };
        n = sub;
    }
    return count;
}
