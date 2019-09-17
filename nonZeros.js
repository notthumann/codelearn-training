function nonZeros(v, a){
    //tinh tong that cua a va v
    let aSum = v + a;

    //loai bo so 0 khoi a, v va aSum
    let vNonZero = removeZero(v);
    let aNonZero = removeZero(a);
    let aSumNonzero = removeZero(aSum);

    //tinh tong a va v khi da loai bo so khong
    let sum = vNonZero + aNonZero;

    //so sanh va tra ve ket qua
    return aSumNonzero === sum? "YES" : "NO";
}
//Loai bo so 0
function removeZero (num) {
    return Number(num.toString().split("").filter(a => a!=0).join(""));
}
