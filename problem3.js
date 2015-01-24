var n=600851475143;
var i=2;
var found=false;
while(!found){
	if(n<=i){
		found=true;
	}
	else{
		if(n%i===0){
			n=n/i;
		}
		else{
			i++;
		}
	}
}
print(n);