function cyclicSequence(sequence){
    let breakPoint = 0;
    if(sequence.length <=1) {
        return true;
    }
    for ( let i = 0; i < sequence.length; i++) {
        if( sequence[i] > sequence[i+1]) {
            breakPoint = i;
        }
    }
    
    sequence = sequence.splice(breakPoint+1);

    if(sequence.length<=1) {
        return false;
    }

    for (let j = 0; j < sequence.length; j++) {
        if( sequence[j] > sequence[j+1]) {
            return false;
        }
    }
    return true
}
