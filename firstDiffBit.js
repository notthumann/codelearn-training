function firstDiffBit(a, b){
    let bin1 = a.toString(2);
    // console.log(typeof bin1)
    bin1 = bin1.split("").reverse();
    // console.log(bin1);
    let bin2 = b.toString(2);
    bin2 = bin2.split("").reverse();
    // console.log(bin2);
    if(bin1.length < bin2.length){
        while(bin1.length != bin2.length){
            bin1.push("0")
            // console.log(bin1)
        }
    }else{
        while(bin1.length != bin2.length){
            bin2.push("0");
            // console.log(bin2)
        }
    }
    for (let i = 0; i < bin1.length; i++){
        if(bin1[i] != bin2[i]){
            return i;
        }
    }
    return -1;
}
