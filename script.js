let currentValue = "";
const trigSection = document.getElementById('trigSection');

function appendValue(value){
    const resultField = document.getElementById("result");
    currentValue += value;
    resultField.value = currentValue;
    updateDisplay();
}

function updateDisplay(){
    const display = document.getElementById('result');
    display.value = currentValue || '0';
}

function calculate(){
    try{
        const input = currentValue.replace(/[^-()\d/*+.]/g, ''); // Allow valid math operators only
        const resultField = document.getElementById("result");
        resultField.value = eval(input);
        currentValue = resultField.value;      
    }
    catch(error){
        alert("Expression Invalid");
        clearResult();

    }
    updateDisplay();

}

function clearResult(){
    currentValue = "";
    document.getElementById("result").value = "";
    updateDisplay();
}

function undo(){
    currentValue = currentValue.slice(0,-1);
    document.getElementById("result").value = currentValue;
    updateDisplay();

}

function trignometry(){
    trigSection.classList.toggle("show");

}

function applyTrig(operation){
    try{
        const resultField = document.getElementById("result");
        const radians = parseFloat(resultField.value)*(Math.PI/180);
        let result;
        if (operation === "sin"){
            result = Math.sin(radians);
        }

        if (operation === "cos"){
            result = Math.cos(radians);
        }

        if (operation === "tan"){
            result = Math.tan(radians);
        }
        resultField.value = result.toFixed(5); // Limit precision
        currentValue = resultField.value;
    }
    catch(error){
        alert("Enter a valid number ");

    }
    updateDisplay();

}