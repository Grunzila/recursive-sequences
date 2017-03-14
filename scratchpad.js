document.title = 'Fabulous Number Sequence Trees!';
document.body.style.backgroundColor = '#B09090';

function divBuild(name, id){
    var div = document.createElement('div');
    div.setAttribute('class', name);
    if (id !== null)
        div.setAttribute('id', id);
    document.body.appendChild(div);
    return div;
}

function pSeqBuild(name, iter, sum, father){
    var p = document.createElement('p');
    p.textContent = name + '(' + iter + ') = ' + sum;
    father.appendChild(p);
}

function fibonacci(iter, node){
    var sum;
    var div = divBuild('fib', null);
    if (iter <= 1){
        if (iter === 0) sum = 0;
        else if (iter === 1) sum = 1;
        
        pSeqBuild('Fib', iter, sum, div);
    }
    else {
        var left = fibonacci(iter - 1, div);
        var className = left.node.getAttribute("class");
        left.node.setAttribute('class', className + ' left');
        
        var right = fibonacci(iter - 2, div);
        className = right.node.getAttribute("class");
        right.node.setAttribute('class', className + ' right');
        
        sum = left.result + right.result;
        
        pSeqBuild('Fib', iter, sum, div);
        
        div.appendChild(left.node);
        div.appendChild(right.node);
    }
    return {'result': sum, 'node': div};
}

function pell(iter, node){
    var sum;
    var div = divBuild('pell', null);
    if (iter <= 1){
        if (iter === 0) sum = 0;
        else if (iter === 1) sum = 1;
        
        pSeqBuild('Pell', iter, sum, div);
    }
    else {
        var left = pell(iter - 1, div);
        var className = left.node.getAttribute("class");
        left.node.setAttribute('class', className + ' left');
        
        var right = pell(iter - 2, div);
        className = right.node.getAttribute("class");
        right.node.setAttribute('class', className + ' right');
        
        sum = 2*left.result + right.result;
        
        pSeqBuild('Pell', iter, sum, div);
        
        div.appendChild(left.node);
        div.appendChild(right.node);
    }
    return {'result': sum, 'node': div};
}

function tribonacci(num){
    if (num === 0) return 0;
    if (num === 1) return 0;
    if (num === 2) return 1;
    return tribonacci(num - 1) + tribonacci(num - 2) + tribonacci(num - 3);
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
var pello = divBuild('pell box', 'pell');
var tribo = divBuild('tribonacci box', 'tribonacci');

fibo.appendChild(fibonacci(5, fibo).node);
pello.appendChild(pell(5, pello).node);
//tribo.appendChild(tribo(5, tribo).node);


var box = document.querySelectorAll('.box');
for (var i = 0; i < box.length; i++){
  box[i].style.borderRadius = '12px';
  box[i].style.width = '900px';
  box[i].style.margin = '20px 5px';
}

fibo.style.background = 'rgba(200,50,0,0.5)';
fibo.style.border = '5px solid rgba(210,30,0,0.7)';
var fib = document.querySelectorAll('.fib');
for (var i = 0; i < fib.length; i++){
  fib[i].style.textAlign = 'center';
  fib[i].style.backgroundColor = 'rgba(255,255,255,0.1)';
  fib[i].style.display = 'inline-block';
}

pello.style.background = 'rgba(175,75,0,0.5)';
pello.style.border = '5px solid rgba(165,85,0,0.7)';
var pel = document.querySelectorAll('.pell');
for (var i = 0; i < pel.length; i++){
  pel[i].style.textAlign = 'center';
  pel[i].style.backgroundColor = 'rgba(255,255,255,0.1)';
  pel[i].style.display = 'inline-block';
}

tribo.style.background = 'rgba(150,100,0,0.5)';
tribo.style.border = '5px solid rgba(140,110,0,0.7)';

var right = document.querySelectorAll('.right');
for (var i = 0; i < right.length; i++){
  //right[i].style.display = 'inline-block';
  right[i].style.float = 'right';
  right[i].style.marginLeft = '3px';
}

var left = document.querySelectorAll('.left');
for (var i = 0; i < left.length; i++){
  //left[i].style.display = 'inline-block';
  left[i].style.float = 'left';
  left[i].style.marginRight = '3px';
}

linkBuild('https://oeis.org/A000045', 'Fibonacci Sequence|');
linkBuild('https://oeis.org/A000129', 'Pell Sequence|');
linkBuild('https://oeis.org/A000073', 'Tribonacci Sequence');