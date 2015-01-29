var i=2;
var k=0;

while(k<10001){
	if(isPrime(i)){
		k++;
	}
	if(k<10001){
		i++;
	}
	
}
print(i);


function isPrime (number){
	for(var j=2;j<=number-1;j++){
		if(number%j===0){
			return false;

		}
	}
	return true;
}