var evenlyDivisible=false;
var i=21;
while(!evenlyDivisible){
	if(isDivisible(i)){
		evenlyDivisible=true;
	}//if
	else{
		i++;
	}
	
}//while
print(i)

function isDivisible(number){
	var bool=true;
	for(var i=1;i<=20;i++){
		if(number%i===0){
			
		}
		else{
			bool=false
		}
	}//for
	return bool;
}//function