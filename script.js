function isPrime(i){
    let prime = true;
    for(let n=2; n<10; n++){
        if(i%n === 0 && i!==n){
            prime = false; 
            } 
        }return prime;
}