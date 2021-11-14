let submitData = document.querySelector("#submit");
submitData.addEventListener("click" , () => {
    let initialValue = document.querySelector("#initialValue");
    let steps = document.querySelector("#steps");
    let outputBoard = document.querySelector("#outputBoard");
    let n = 1;
    let empty = "";
    initialValue.style.border = "1px solid black";
    steps.style.border = "1px solid black";
    switch(empty)
    {
        case initialValue.value: initialValue.style.border = "2px solid red";
        case steps.value: steps.style.border = "2px solid red";
    }
    if(initialValue.value == empty)
    {
        alert("initial value can\' left empty");
    }
    else if(steps.value == empty)
    {
        alert(" Number of steps can\' left empty");
    }
    else
    {
        outputBoard.innerText = empty;
        for(n = 1; n <= steps.value; n++) 
        {
            outputBoard.innerText = outputBoard.innerText + `${initialValue.value} X ${n} = ${initialValue.value * n} \n`;
        }
    }
    
});