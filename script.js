var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');
var five = document.getElementById('five');
var six = document.getElementById('six');
var seven = document.getElementById('seven');
var eight = document.getElementById('eight');
var nine = document.getElementById('nine');
var zero = document.getElementById('zero');
var point = document.getElementById('point');
var equals = document.getElementById('equals');
var add = document.getElementById('add');
var subtract = document.getElementById('subtract');
var multiply = document.getElementById('multiply');
var divide = document.getElementById('divide');
var ac = document.getElementById('ac');
var c = document.getElementById('c');
var percent = document.getElementById('percent');

var upper_screen = document.getElementById('upper-screen');
var lower_screen = document.getElementById('lower-screen');

point_count=0;

ac.addEventListener('click', function(){
    lower_screen.innerHTML = "0";
    upper_screen.innerHTML = "";
    point_count=0;
})

c.addEventListener('click', function(){
    lower_screen.innerHTML = "0";
    point_count=0;
})

one.addEventListener('click', function(){
    if(lower_screen.innerHTML==="0"){
        lower_screen.innerHTML = "1";    
    }
    else{
        lower_screen.innerHTML += "1";
    }
})
two.addEventListener('click', function(){
    if(lower_screen.innerHTML==="0"){
        lower_screen.innerHTML = "2";    
    }
    else{
        lower_screen.innerHTML += "2";
    }
})
three.addEventListener('click', function(){
    if(lower_screen.innerHTML==="0"){
        lower_screen.innerHTML = "3";    
    }
    else{
        lower_screen.innerHTML += "3";
    }
})
four.addEventListener('click', function(){
    if(lower_screen.innerHTML==="0"){
        lower_screen.innerHTML = "4";    
    }
    else{
        lower_screen.innerHTML += "4";
    }
})
five.addEventListener('click', function(){
    if(lower_screen.innerHTML==="0"){
        lower_screen.innerHTML = "5";    
    }
    else{
        lower_screen.innerHTML += "5";
    }
})
six.addEventListener('click', function(){
    if(lower_screen.innerHTML==="0"){
        lower_screen.innerHTML = "6";    
    }
    else{
        lower_screen.innerHTML += "6";
    }
})
seven.addEventListener('click', function(){
    if(lower_screen.innerHTML==="0"){
        lower_screen.innerHTML = "7";    
    }
    else{
        lower_screen.innerHTML += "7";
    }
})
eight.addEventListener('click', function(){
    if(lower_screen.innerHTML==="0"){
        lower_screen.innerHTML = "8";    
    }
    else{
        lower_screen.innerHTML += "8";
    }
})
nine.addEventListener('click', function(){
    if(lower_screen.innerHTML==="0"){
        lower_screen.innerHTML = "9";    
    }
    else{
        lower_screen.innerHTML += "9";
    }
})
zero.addEventListener('click', function(){
    if(lower_screen.innerHTML==="0"){
        lower_screen.innerHTML = "0";    
    }
    else{
        lower_screen.innerHTML += "0";
    }
})

add.addEventListener('click', function(){
    if(upper_screen.innerHTML=="" || upper_screen.innerHTML=="0"){
        upper_screen.innerHTML = lower_screen.innerHTML+"+";
        lower_screen.innerHTML = "";
    }
    else{
        var num1 = Number(upper_screen.innerHTML.slice(0, upper_screen.innerHTML.length-1));
        var num2 = Number(lower_screen.innerHTML);
        var sign = upper_screen.innerHTML.charAt(upper_screen.innerHTML.length-1)
        if(sign==="+"){
            upper_screen.innerHTML = String(num1+num2)+"+";
            lower_screen.innerHTML = "";
        }
        else if(sign==="-"){
            upper_screen.innerHTML = String(num1 - num2)+"+";
            lower_screen.innerHTML = "";
        }
        else if(sign==="x"){
            upper_screen.innerHTML = String(num1 * num2)+"+";
            lower_screen.innerHTML = "";
        }
        else{
            upper_screen.innerHTML = String(num1 / num2)+"+";
            lower_screen.innerHTML = "";
        }
    }
    point_count=0;
})

subtract.addEventListener('click', function(){
    if(upper_screen.innerHTML=="" || upper_screen.innerHTML=="0"){
        upper_screen.innerHTML = lower_screen.innerHTML+"-";
        lower_screen.innerHTML = "";
    }
    else{
        var num1 = Number(upper_screen.innerHTML.slice(0, upper_screen.innerHTML.length-1));
        var num2 = Number(lower_screen.innerHTML);
        var sign = upper_screen.innerHTML.charAt(upper_screen.innerHTML.length-1)
        if(sign==="+"){
            upper_screen.innerHTML = String(num1 + num2)+"-";
            lower_screen.innerHTML = "";
        }
        else if(sign==="-"){
            upper_screen.innerHTML = String(num1 - num2)+"-";
            lower_screen.innerHTML = "";
        }
        else if(sign==="x"){
            upper_screen.innerHTML = String(num1 * num2)+"-";
            lower_screen.innerHTML = "";
        }
        else{
            upper_screen.innerHTML = String(num1 / num2)+"-";
            lower_screen.innerHTML = "";
        }
    }
})

multiply.addEventListener('click', function(){
    if(upper_screen.innerHTML=="" || upper_screen.innerHTML=="0"){
        upper_screen.innerHTML = lower_screen.innerHTML+"x";
        lower_screen.innerHTML = "";
    }
    else{
        var num1 = Number(upper_screen.innerHTML.slice(0, upper_screen.innerHTML.length-1));
        var num2 = Number(lower_screen.innerHTML);
        var sign = upper_screen.innerHTML.charAt(upper_screen.innerHTML.length-1)
        if(sign==="+"){
            upper_screen.innerHTML = String(num1 + num2)+"x";
            lower_screen.innerHTML = "";
        }
        else if(sign==="-"){
            upper_screen.innerHTML = String(num1 - num2)+"x";
            lower_screen.innerHTML = "";
        }
        else if(sign==="x"){
            upper_screen.innerHTML = String(num1 * num2)+"x";
            lower_screen.innerHTML = "";
        }
        else{
            upper_screen.innerHTML = String(num1 / num2)+"x";
            lower_screen.innerHTML = "";
        }
    }
})

divide.addEventListener('click', function(){
    if(upper_screen.innerHTML=="" || upper_screen.innerHTML=="0"){
        upper_screen.innerHTML = lower_screen.innerHTML+"/";
        lower_screen.innerHTML = "";
    }
    else{
        var num1 = Number(upper_screen.innerHTML.slice(0, upper_screen.innerHTML.length-1));
        var num2 = Number(lower_screen.innerHTML);
        var sign = upper_screen.innerHTML.charAt(upper_screen.innerHTML.length-1)
        if(sign==="+"){
            upper_screen.innerHTML = String(num1 + num2)+"/";
            lower_screen.innerHTML = "";
        }
        else if(sign==="-"){
            upper_screen.innerHTML = String(num1 - num2)+"/";
            lower_screen.innerHTML = "";
        }
        else if(sign==="x"){
            upper_screen.innerHTML = String(num1 * num2)+"/";
            lower_screen.innerHTML = "";
        }
        else{
            upper_screen.innerHTML = String(num1 / num2)+"/";
            lower_screen.innerHTML = "";
        }
    }
})

equals.addEventListener('click', function(){
    if(upper_screen.innerHTML=="" || upper_screen.innerHTML=="0"){
        if(lower_screen.innerHTML!="" || lower_screen.innerHTML!="0"){
            lower_screen.innerHTML = lower_screen.innerHTML
        }
        else{
            lower_screen.innerHTML = "0";
        }
    }
    else{
        var num1 = Number(upper_screen.innerHTML.slice(0, upper_screen.innerHTML.length-1));
        var num2 = Number(lower_screen.innerHTML);
        var sign = upper_screen.innerHTML.charAt(upper_screen.innerHTML.length-1)
        if(sign==="+"){
            lower_screen.innerHTML = String(num1 + num2);
            upper_screen.innerHTML = "";
        }
        else if(sign==="-"){
            lower_screen.innerHTML = String(num1 - num2);
            upper_screen.innerHTML = "";
        }
        else if(sign==="x"){
            lower_screen.innerHTML = String(num1 * num2);
            upper_screen.innerHTML = "";
        }
        else{
            lower_screen.innerHTML = String(num1 / num2);
            upper_screen.innerHTML = "";
        }
    }
})

percent.addEventListener('click', function(){
    if(upper_screen.innerHTML=="" || upper_screen.innerHTML=="0"){
        if(lower_screen.innerHTML!="" || lower_screen.innerHTML!="0"){
            var num1 = Number(lower_screen.innerHTML.slice(0, lower_screen.innerHTML.length));
            lower_screen.innerHTML = String(num1*0.01);
            upper_screen.innerHTML = "";
        }
    }
    else{
        var num1 = Number(upper_screen.innerHTML.slice(0, upper_screen.innerHTML.length-1));
        lower_screen.innerHTML = String(num1*0.01);
        upper_screen.innerHTML = "";
    }
})

point.addEventListener('click', function(){
    if(point_count===0){
        lower_screen.innerHTML += ".";
        point_count++;
    }
})
