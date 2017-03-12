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