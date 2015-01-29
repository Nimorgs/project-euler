var answer=0;

for(var i=100;i<=999;i++){
	for(var j=100;j<=999;j++){
		var cur=i*j;
		if(isPalindrome(cur)&&(cur>answer)){

			answer=(cur);
			//print(i*j); //testing purpose
		}//if
	}//for
}//for
print("The biggest three digit Palindrome Product is: "+answer);

function isPalindrome(number){
	number=number.toString();
	var boolIsPalindrome=true;
	for(var i=0;i<number.length;i++)
		if(number.substring(i,i+1)===number.substring((number.length-1)-i,number.length-i)){

		}else{
			boolIsPalindrome=false;
		}

	return boolIsPalindrome;
}//function
