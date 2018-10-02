const numb = parseFloat(prompt('Enter the number of Fibonacci'));
alert("Loop method: " + fiboInLoop(numb));
alert("Array method: " + fiboInArray(numb));
alert("Recurcive method: " + fiboRecurcive(numb));

function fiboInLoop(numb){
    let fiboNumb_1 = 1, fiboNumb_2 = 1;
    for(let i = 3; i <= numb; i++){
        let fiboNextNumb = fiboNumb_1 + fiboNumb_2;
        fiboNumb_1 = fiboNumb_2;
        fiboNumb_2 = fiboNextNumb;
    }
    return fiboNumb_2;
}

function fiboInArray(numb){
    let fiboArr = [1, 1];
    for(let i = 2; i < numb; i++){
        fiboArr.push(fiboArr[i-1] + fiboArr[i-2]);
    }
    return fiboArr.pop();
}

function fiboRecurcive(numb){
    if(numb <= 1) { 
       return numb;
    }
    return fiboRecurcive(numb - 1) + fiboRecurcive(numb - 2);
}

    