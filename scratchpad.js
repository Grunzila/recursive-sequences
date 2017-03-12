document.title = 'Fabulous Number Sequence Trees!';

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
    return document.querySelector('.' + name);
}

document.body.style.backgroundColor = '#201000';

var divis1 = document.createElement('div');
divis1.setAttribute('class','fiboDiv');
divis1.style.background = 'rgba(200,50,0,0.5)';
divis1.style.border = '5px solid rgba(210,30,0,0.7)';
divis1.style.borderRadius = '12px';
divis1.style.height = '40px';
divis1.style.margin = '20px 5px';
document.body.appendChild(divis1);

var divis2 = document.createElement('div');
divis2.setAttribute('class','fiboDiv');
divis2.style.background = 'rgba(175,75,0,0.5)';
divis2.style.border = '5px solid rgba(165,85,0,0.7)';
divis2.style.borderRadius = '12px';
divis2.style.height = '40px';
divis2.style.margin = '20px 5px';
document.body.appendChild(divis2);

var divis3 = document.createElement('div');
divis3.setAttribute('class','fiboDiv');
divis3.style.background = 'rgba(150,100,0,0.5)';
divis3.style.border = '5px solid rgba(140,110,0,0.7)';
divis3.style.borderRadius = '12px';
divis3.style.height = '40px';
divis3.style.margin = '20px 5px';
document.body.appendChild(divis3);

var fourthDiv = divBuild('fourth', 'box');
fourthDiv.style.height = '40px';
fourthDiv.style.background = 'purple';