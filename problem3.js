var max= 1000;
var biggestPrime=0;

for(var i=2;i<max/2;i++){
	if((isPrime(i))&&(isFactor(i))){
		biggestPrime=i;
	}//if
}//for
print(biggestPrime);
function isPrime(number){
	var boolIsPrime=true;
	for(var i=2;i<number;i++){
		if(number%i===0){
			boolIsPrime=false;
		}//if
	}//for
	return boolIsPrime;
}//function

function isFactor(number){
	var boolIsFactor=false;
	for(var i=2;i<max/2;i++){
		if(number*i===max){
			boolIsFactor=true;
		}//if
	}//for
	return boolIsFactor;
}//function