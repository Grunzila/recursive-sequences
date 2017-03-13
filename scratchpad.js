document.title = 'Fabulous Number Sequence Trees!';
document.body.style.backgroundColor = '#B09090';

function fibonacci(num){
    if (num === 0) return 0;
    if (num === 1) return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
}

function pell(num){
    if (num === 0) return 0;
    if (num === 1) return 1;
    return 2*pell(num - 1) + pell(num - 2);
}

function tribonacci(num){
    if (num === 0) return 0;
    if (num === 1) return 0;
    if (num === 2) return 1;
    return tribonacci(num - 1) + tribonacci(num - 2) + tribonacci(num - 3);
}

function divBuild(name, id){
    var div = document.createElement('div');
    div.setAttribute('class', name);
    div.setAttribute('id', id);
    document.body.appendChild(div);
    return document.getElementById(id);
}

function linkBuild(link, text){
    var a = document.createElement('a');
    a.setAttribute('href', link);
    a.setAttribute('target','_blank');
    a.innerHTML = text;
    //a.style.fontColor = 'white';
    //a.style.setAttribute('visited','yellow');
    document.body.appendChild(a);
}

var fibo = divBuild('fib box', 'fibonacci');
var pell = divBuild('pell box', 'pell');
var tribo = divBuild('trib box', 'tribonacci');

fibo.style.background = 'rgba(200,50,0,0.5)';
fibo.style.border = '5px solid rgba(210,30,0,0.7)';
pell.style.background = 'rgba(175,75,0,0.5)';
pell.style.border = '5px solid rgba(165,85,0,0.7)';
tribo.style.background = 'rgba(150,100,0,0.5)';
tribo.style.border = '5px solid rgba(140,110,0,0.7)';

var box = document.querySelectorAll('.box');
for (var i = 0; i < box.length; i++){
  box[i].style.borderRadius = '12px';
  box[i].style.height = '40px';
  box[i].style.margin = '20px 5px';
}

linkBuild('https://oeis.org/A000045', 'Fibonacci Sequence|');
linkBuild('https://oeis.org/A000129', 'Pell Sequence|');
linkBuild('https://oeis.org/A000073', 'Tribonacci Sequence');