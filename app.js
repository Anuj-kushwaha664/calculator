

let box1 = document.querySelector('.box1');

let expression = "";
let seven = document.querySelector(".seven");
let eight = document.querySelector(".eight");
let nine = document.querySelector(".nine");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let six = document.querySelector(".six");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let zero = document.querySelector(".zero");
let dot = document.querySelector(".dot");
let pluse = document.querySelector(".pluse");
let minus = document.querySelector(".minus");
let multiply = document.querySelector(".multiply");
let divide = document.querySelector(".divide");
let modulo = document.querySelector(".modulo");
let Ac = document.querySelector(".Ac");
let equ = document.querySelector(".equ");
let plusMinus = document.querySelector(".plusMinus");

seven.addEventListener("click", function(){
    expression = expression + "7"; 
    box1.innerText = expression;
});
eight.addEventListener("click", function(){
    expression = expression + "8"; 
    box1.innerText = expression;
});
nine.addEventListener("click", function(){
    expression = expression + "9"; 
    box1.innerText = expression;
});
four.addEventListener("click", function(){
    expression = expression + "4"; 
    box1.innerText = expression;
});
five.addEventListener("click", function(){
    expression = expression + "5"; 
    box1.innerText = expression;
});
six.addEventListener("click", function(){
    expression = expression + "6"; 
    box1.innerText = expression;
});
one.addEventListener("click", function(){
    expression = expression + "1"; 
    box1.innerText = expression;
});
two.addEventListener("click", function(){
    expression = expression + "2"; 
    box1.innerText = expression;
});
three.addEventListener("click", function(){
    expression = expression + "3"; 
    box1.innerText = expression;
});
zero.addEventListener("click", function(){
    expression = expression + "0"; 
    box1.innerText = expression;
});
dot.addEventListener("click", function(){
    expression = expression + "."; 
    box1.innerText = expression;
});
pluse.addEventListener("click", function(){
    
    if(expression.length == 0){
        alert("please enter a valid expression");
        expression = "";
        box1.innerText = expression;
        return;
    }
    let flag= check(expression, '+');
    if(flag){
         expression = expression + "+";
         box1.innerText = expression;
    }
});
minus.addEventListener("click", function(){
    
    if(expression.length == 0){
        alert("please enter a valid expression");
        expression = "";
        box1.innerText = expression;
        return;
    }
    let flag= check(expression, '-');
    if(flag){
         expression = expression + "-";
         box1.innerText = expression;
    }
});
multiply.addEventListener("click", function(){
    
    if(expression.length == 0){
        alert("please enter a valid expression");
        expression = "";
        box1.innerText = expression;
        return;
    }
    let flag= check(expression, '*');
    if(flag){
         expression = expression + "*";
         box1.innerText = expression;
    }
});
divide.addEventListener("click", function(){
   
    if(expression.length == 0){
        alert("please enter a valid expression");
        expression = "";
        box1.innerText = expression;
        return;
    } 
    let flag= check(expression, '/');
    if(flag){
         expression = expression + "/";
         box1.innerText = expression;
    }
});
modulo.addEventListener("click", function(){
    if(expression.length == 0){
        alert("please enter a valid expression");
        expression = "";
        box1.innerText = expression;
        return;
    } 
    expression = expression + "/100"; 
    expression = eval(expression);
    box1.innerText = expression;
    
});
Ac.addEventListener("click", function(){
    expression = ""; 
    box1.innerText = expression;
});
equ.addEventListener("click", function(){
    let n = expression.length-1;
    if(n==-1 || expression[n]=='+' || expression[n]=='-' || expression[n]=='*' || expression[n]=='/'){
        alert("please enter a valid expression");
        expression = "";
        box1.innerText = expression;
        return;
    } 
    expression = eval(expression); 

    box1.innerText = expression;
});
plusMinus.addEventListener("click", function(){
    let flag = true;
    for(let i =0; i<expression.length; i++){
        if(expression.charAt(i) == '*' || expression.charAt(i)=='-' || expression.charAt(i)=='+' || expression.charAt(i)=='/'){
            flag = false;
        }
    }
    if(flag == true || expression.charAt(0)=='-'){
        if(expression.charAt(0)=='-'){
            expression = expression.substring(1,expression.length);
        }else{
            expression = '-' + expression;
        }
        box1.innerText = expression;
    }
    
});

function check(exp, special){
    let i = exp.length-1;
    if(exp[i] <'1' || exp[i] >'9'){
        alert("please enter a valid expression");   
        return false;
    }
    return true;
}

