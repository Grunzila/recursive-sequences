//******************************************
//          --DOCUMENT ATTRIBUTES--
//******************************************

document.title = 'Fabulous Number Sequence Trees!';
document.body.style.backgroundColor = '#B09090';

//******************************************
//               --FUNCTIONS--
//******************************************

//Creates a div with class and id
//Returns a pointer to the div
//Use "null" for the id parameter to disinclude id
function divBuild(name, id){
    var div = document.createElement('div');
    div.setAttribute('class', name);
    if (id !== null)
        div.setAttribute('id', id);
    document.body.appendChild(div);
    return div;
}

//Creates text of a sequence iteration
//'name' identifies the sequence
//'iter' and 'sum' refers to the values in the sequence
//'father' is the div to be appended onto
function pSeqBuild(name, iter, sum, father){
    var p = document.createElement('p');
    p.textContent = name + '(' + iter + ') = ' + sum;
    father.appendChild(p);
}

//Creates Fibonacci sequence tree
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

//Creates Pell sequence tree
function pell(iter, node){
    var sum;
    var div = divBuild('pel', null);
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

//Creates Tribonacci sequence tree
function tribonacci(iter, node){
    var sum;
    var div = divBuild('trib', null);
    if (iter <= 2){
        if (iter === 0) sum = 0;
        else if (iter === 1) sum = 0;
        else if (iter === 2) sum = 1;
        
        pSeqBuild('Trib', iter, sum, div);
    }
    else {
        var left = tribonacci(iter - 1, div);
        var className = left.node.getAttribute("class");
        left.node.setAttribute('class', className + ' left');
        
        var center = tribonacci(iter - 2, div);
        className = center.node.getAttribute("class");
        center.node.setAttribute('class', className + ' center');
        
        var right = tribonacci(iter - 3, div);
        className = right.node.getAttribute("class");
        right.node.setAttribute('class', className + ' right');
        
        sum = left.result + center.result + right.result;
        
        pSeqBuild('Trib', iter, sum, div);
        
        div.appendChild(left.node);
        div.appendChild(center.node);
        div.appendChild(right.node);
    }
    return {'result': sum, 'node': div};
}

//Makes a hyperlink of an element
function linkBuild(link, node){
    var a = document.createElement('a');
    a.setAttribute('href', link);
    a.setAttribute('target','_blank');
    a.appendChild(node);
    document.body.appendChild(a);
}

//******************************************
//           --INSTANTIATIONS--
//******************************************

//Creates a box for each sequence
var fibo = divBuild('fibonacci box', 'fibonacci');
var pello = divBuild('pell box', 'pell');
var tribo = divBuild('tribonacci box', 'tribonacci');

//Forms the tree of each tree
fibo.appendChild(fibonacci(11, fibo).node);
pello.appendChild(pell(11, pello).node);
tribo.appendChild(tribonacci(11, tribo).node);

//Makes hyperlinks from each sequence's box
linkBuild('https://oeis.org/A000045', fibo);
linkBuild('https://oeis.org/A000129', pello);
linkBuild('https://oeis.org/A000073', tribo);

//******************************************
//                 --STYLE--
//******************************************

//Styles all sequence boxes
var box = document.querySelectorAll('.box');
for (var i = 0; i < box.length; i++){
  box[i].style.borderRadius = '12px';
  box[i].style.width = '37119px';
  box[i].style.margin = '20px 5px';
  box[i].style.cursor = 'pointer';
  box[i].style.letterSpacing = '2px';
  box[i].style.textShadow = '1px 1px 1px white';
  box[i].style.color = 'darkslategray';
  box[i].style.fontFamily = '"Comic Sans MS", cursive, sans-serif';
}

//Styles the Fibonacci sequence box
fibo.style.background = 'rgba(200,50,0,0.5)';
fibo.style.border = '5px solid rgba(210,30,0,0.7)';
var fib = document.querySelectorAll('.fib');
for (var i = 0; i < fib.length; i++){
  fib[i].style.textAlign = 'center';
  fib[i].style.backgroundColor = 'rgba(255,255,255,0.1)';
  fib[i].style.display = 'inline-block';
}

//Styles the Pell sequence box
pello.style.background = 'rgba(175,75,0,0.5)';
pello.style.border = '5px solid rgba(165,85,0,0.7)';
var pel = document.querySelectorAll('.pel');
for (var i = 0; i < pel.length; i++){
  pel[i].style.textAlign = 'center';
  pel[i].style.backgroundColor = 'rgba(255,255,255,0.1)';
  pel[i].style.display = 'inline-block';
}

//Styles the Tribonacci sequence box
tribo.style.background = 'rgba(150,100,0,0.5)';
tribo.style.border = '5px solid rgba(140,110,0,0.7)';
var trib = document.querySelectorAll('.trib');
for (var i = 0; i < trib.length; i++){
  trib[i].style.textAlign = 'center';
  trib[i].style.backgroundColor = 'rgba(255,255,255,0.1)';
  trib[i].style.display = 'inline-block';
}

//Styles right sequence elements 
var right = document.querySelectorAll('.right');
for (var i = 0; i < right.length; i++){
  //right[i].style.display = 'inline-block';
  right[i].style.float = 'right';
  right[i].style.marginLeft = '3px';
}

//Styles left sequence elements 
var left = document.querySelectorAll('.left');
for (var i = 0; i < left.length; i++){
  left[i].style.float = 'left';
  left[i].style.marginRight = '3px';
}