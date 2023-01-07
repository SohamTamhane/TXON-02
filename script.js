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

function oneFunc(){
    if(lower_screen.innerHTML==="0"){
        lower_screen.innerHTML = "1";    
    }
    else{
        lower_screen.innerHTML += "1";
    }
}
function twoFunc(){
    if(lower_screen.innerHTML==="0"){
        lower_screen.innerHTML = "2";    
    }
    else{
        lower_screen.innerHTML += "2";
    }
}
function threeFunc(){
    if(lower_screen.innerHTML==="0"){
        lower_screen.innerHTML = "3";    
    }
    else{
        lower_screen.innerHTML += "3";
    }
}
function fourFunc(){
    if(lower_screen.innerHTML==="0"){
        lower_screen.innerHTML = "4";    
    }
    else{
        lower_screen.innerHTML += "4";
    }
}
function fiveFunc(){
    if(lower_screen.innerHTML==="0"){
        lower_screen.innerHTML = "5";    
    }
    else{
        lower_screen.innerHTML += "5";
    }
}
function sixFunc(){
    if(lower_screen.innerHTML==="0"){
        lower_screen.innerHTML = "6";    
    }
    else{
        lower_screen.innerHTML += "6";
    }
}
function sevenFunc(){
    if(lower_screen.innerHTML==="0"){
        lower_screen.innerHTML = "7";    
    }
    else{
        lower_screen.innerHTML += "7";
    }
}
function eightFunc(){
    if(lower_screen.innerHTML==="0"){
        lower_screen.innerHTML = "8";    
    }
    else{
        lower_screen.innerHTML += "8";
    }
}
function nineFunc(){
    if(lower_screen.innerHTML==="0"){
        lower_screen.innerHTML = "9";    
    }
    else{
        lower_screen.innerHTML += "9";
    }
}
function zeroFunc(){
    if(lower_screen.innerHTML==="0"){
        lower_screen.innerHTML = "0";    
    }
    else{
        lower_screen.innerHTML += "0";
    }
}
function acFunc(){
    lower_screen.innerHTML = "0";
    upper_screen.innerHTML = "";
    point_count=0;
}
function cFunc(){
    lower_screen.innerHTML = "0";
    point_count=0;
}

function addFunc(){
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
}
function subtractFunc(){
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
    point_count=0;
}
function multiplyFunc(){
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
    point_count=0;
}
function divideFunc(){
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
    point_count=0;
}
function equalsFunc(){
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
}
function percentFunc(){
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
}
function pointFunc(){
    if(point_count===0){
        lower_screen.innerHTML += ".";
        point_count++;
    }
}
ac.addEventListener('click', acFunc);
c.addEventListener('click', cFunc);

one.addEventListener('click', oneFunc);
two.addEventListener('click', twoFunc);
three.addEventListener('click', threeFunc);
four.addEventListener('click', fourFunc);
five.addEventListener('click', fiveFunc);
six.addEventListener('click', sixFunc);
seven.addEventListener('click', sevenFunc);
eight.addEventListener('click', eightFunc);
nine.addEventListener('click', nineFunc);
zero.addEventListener('click', zeroFunc);

add.addEventListener('click', addFunc);
subtract.addEventListener('click', subtractFunc);
multiply.addEventListener('click', multiplyFunc);
divide.addEventListener('click', divideFunc);
equals.addEventListener('click', equalsFunc);
percent.addEventListener('click', percentFunc);
point.addEventListener('click', pointFunc);

// Keyboard Event
window.addEventListener('keydown', function(event){
    if(event.key === "1"){
        oneFunc();
    }
    else if(event.key==="2"){
        twoFunc();
    }
    else if(event.key==="3"){
        threeFunc();
    }
    else if(event.key==="4"){
        fourFunc();
    }
    else if(event.key==="5"){
        fiveFunc();
    }
    else if(event.key==="6"){
        sixFunc();
    }
    else if(event.key==="7"){
        sevenFunc();
    }
    else if(event.key==="8"){
        eightFunc();
    }
    else if(event.key==="9"){
        nineFunc();
    }
    else if(event.key==="0"){
        zeroFunc();
    }
    else if(event.key==="Escape"){
        acFunc();
    }
    else if(event.key==="Backspace"){
        cFunc();
    }
    else if(event.key==="+"){
        addFunc();
    }
    else if(event.key==="-"){
        subtractFunc();
    }
    else if(event.key==="*" || event.key==="x" || event.key==="X"){
        multiplyFunc();
    }
    else if(event.key==="/"){
        divideFunc();
    }
    else if(event.key==="=" || event.key==="Enter"){
        equalsFunc();
    }
    else if(event.key==="%"){
        percentFunc();
    }
    else if(event.key==="."){
        pointFunc();
    }
})