
function convertToRoman(num) {
    var str="";
    var d,i;
    if(num >= 1000)
    {
        d= Math.floor(num / 1000);
        for(i=0;i<d;i++)
            str+="M";
        num = num%1000;
    }
    if(num >=900)
    {
        str+="CM";
        num=num-900;
    }
    if(num>=500)
    {
        str+="D";
        num =num - 500;

    }
    if(num >=400)
    {
        str="CD";
        num =num-400;
    }
    if(num>=100)
    {
        d=Math.floor(num/100);
        for(i=0;i<d;i++)
            str +="C";
        num = num % 100;
    }
    if(num >=90)
    {
        str +="XC";
        num = num -90;
    }
    if(num>=50)
    {
        str += "L";
        num = num - 50;

        d = Math.floor(num/10);
        for(i=0;i < d ; i++)
        {
            str += "X";
        }
        num =num %10;
    }
    if((num < 50)&&(num >=40))
    {
        str += "XL";
        num = num - 40;
    }
    if((num <40)&&(num >=10))
    {
        d= Math.floor(num/10);
        for(i=0 ;i<d;i++)
        {
            str +='X';

        }
        num = num % 10;
    }
    if(num === 9)
    {
        str +="IX";
        num =0;
    }
    if(num>=5)
    {
        str +="V";
        num = num -5;

    }
    if(num === 4)
    {
        str += "IV";
        num =0;
    }
    if(num<=3)
    {
        for(i=0;i<num;i++)
            str += "I";
        num =0;
    }
    console.log(str);
}

convertToRoman(3999 );


