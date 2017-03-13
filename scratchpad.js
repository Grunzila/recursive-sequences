document.title = 'Fabulous Number Sequence Trees!';
document.body.style.backgroundColor = '#B09090';

function fibonacci(num, node){
    var sum;
    var div = divBuild('fib', null);
    if (num <= 1){
        if (num === 0) sum = 0;
        else if (num === 1) sum = 1;
        var p = document.createElement('p');
        p.textContent = 'Fib(' + num + ') = ' + sum;
        div.appendChild(p);
    }
    else {
        var left = fibonacci(num - 1, div);
        var className = left.node.getAttribute("class");
        left.node.setAttribute('class', className + ' left');
        
        var right = fibonacci(num - 2, div);
        className = left.node.getAttribute("class");
        right.node.setAttribute('class', className + ' right');
        
        sum = left.result + right.result;
        //console.log('(' + num + ')[' + sum + '];');
        
        var p = document.createElement('p');
        p.textContent = 'Fib(' + num + ') = ' + sum;
        div.appendChild(p);
    }
    node.appendChild(div);
    return {'result': sum, 'node': div};
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
    if (id !== null)
        div.setAttribute('id', id);
    document.body.appendChild(div);
    return div;
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

var fibo = divBuild('fibonacci box', 'fibonacci');
var pell = divBuild('pell box', 'pell');
var tribo = divBuild('tribonacci box', 'tribonacci');

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
  box[i].style.width = '1200px';
  box[i].style.margin = '20px 5px';
}

fibonacci(5, fibo);

var right = document.querySelectorAll('.right');
for (var i = 0; i < right.length; i++){
  //right[i].style.display = 'inline-block';
  right[i].style.float = 'right';
}

var left = document.querySelectorAll('.left');
for (var i = 0; i < left.length; i++){
  //left[i].style.display = 'inline-block';
  left[i].style.float = 'left';
}

var fib = document.querySelectorAll('.fib');
for (var i = 0; i < fib.length; i++){
  fib[i].style.textAlign = 'center';
  fib[i].style.padding = '5px';
  //fib[i].style.borderWidth = '10px';
  //fib[i].style.borderColor = 'clear';
  fib[i].style.backgroundColor = 'rgba(200,200,200,0.15)';
  fib[i].style.display = 'inline-block';
}

linkBuild('https://oeis.org/A000045', 'Fibonacci Sequence|');
linkBuild('https://oeis.org/A000129', 'Pell Sequence|');
linkBuild('https://oeis.org/A000073', 'Tribonacci Sequence');