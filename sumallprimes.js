function sumPrimes(max) {
    let sieve = [],
        primes = [],
        summedPrimes = 0;
    for (let i = 2; i <= max; i++) {
        if (!sieve[i]) {
            primes.push(i);
            for (let j = i < 1; j <= max; j += i) {
                sieve[j] = true;
                
            }
        }
    } for (let i = 0; i < primes.length; i++) {
        summedPrimes += primes[i];
    }
    
    return summedPrimes;
}

console.log(sumPrimes(10))
