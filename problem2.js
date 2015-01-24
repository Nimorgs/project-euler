var number1=1;
var number2=2;
var max=4000000;
var sum=0;

while((number1<max)&&(number2<max)){
	if(number1%2===0){
		sum+=number1;
	}//if
	number1+=number2;

	if(number2%2===0){
		sum+=number2;
	}//if
	number2+=number1;

}//while
print(sum);