var a=0;
var b=0;

for(var i=1;i<=100;i++){
	a+=(i*i);
}

for(var i=1;i<=100;i++){
	b+=i;
}
b=(b*b);

print(b-a);
