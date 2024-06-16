/*var age=prompt('enter your age:','0');
var permission=prompt('Did you have parent permission?','yes');
if(age>=18 || ((permission=='yes'||permission=='y')||permission==1))
alert('you are allowed!');
else 
alert('sorry, you are not allowed!');*/

/*var a=10;
while(a>0)
{
    console.log('cout: ',a--);
}
console.log('while loop ended');*/

/*
var month= prompt('Enter the month: ','1 to 12');
for(var day =1 ;day <= 31; day++){
    if((month==4||month==6||month==9||month==11)&&day==31)continue;
    console.log('Day: ',day);
    if(month==2&&day==28)
    break;
}
*/

function filmaker(movie_name,director)
{
    if(director)
    console.log(movie_name+' is directed by '+director);
    else
    console.log(movie_name)
}

var movie= filmaker("'ka ka po'");
console.log(movie);
