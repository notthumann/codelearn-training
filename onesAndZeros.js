function onesAndZeros(s){
    while (s.includes('10') || s.includes('01')) {
        s = s.replace(/01/g,'');
        s = s.replace(/10/g,'')
    }
    return s.length;
}
