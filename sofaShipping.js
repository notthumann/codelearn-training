function sofaShipping(a){
    let sortedA = [...a].sort((a, b) => a-b);
    let count = 0;
    for(let i = 0; i < sortedA.length; i++) {
        count += a.indexOf(sortedA[i])+1;
        a.splice(a.indexOf(sortedA[i]),1);
    }
    return count;
}
