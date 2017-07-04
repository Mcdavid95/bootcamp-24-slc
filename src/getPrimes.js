
const isPrime = (digit) => {
    if (digit < 2) {
       return false ;
    } else if
     (digit <= 3) {
        return true;
    } else if (digit % 2 === 0) {
        return false;
    }
    let root = Math.sqrt(digit) + 1;
    for (let num = 3; num <= root; num += 2) {
        if (digit % num === 0) {
            return false;
        }
    }
    return true;
}

const getPrimes = (wholeNum) => {
	let list = [];
	if(Number.isInteger(wholeNum) === false || typeof wholeNum === "number") {
		return "Input should be a number";
	}
	else if(wholeNum < 2){
		return list;
	} else {
	for(let i = 0; i <= wholeNum; i++) {
		if(isPrime(i) === true){
			list.push(i);
		}
	}
  }
  return list
}
getPrimes(hyt);
module.exports = {isPrime, getPrimes}
