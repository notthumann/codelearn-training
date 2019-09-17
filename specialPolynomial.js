function specialPolynomial(x, n) {
    let k = 0;
    let sum = 0;
    while (true) {
        sum += Math.pow(x, k);
        if (sum > n) {
            return k - 1;
        }
        k += 1;
    }
}
