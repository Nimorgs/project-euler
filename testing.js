function isPalindrome(number){
	number=number.toString();
	var boolIsPalindrome=true;
	for(var i=0;i<number.length;i++)
	//	print("i  "+number.substring(i,i+1));
	//	print("k  "+number.substring((number.length-1)-i,number.length-i));
		if(number.substring(i,i+1)===number.substring((number.length-1)-i,number.length-i)){

		}else{
			print("test");
			boolIsPalindrome=false;
		}

	return boolIsPalindrome;
}//function

print(isPalindrome(11211));