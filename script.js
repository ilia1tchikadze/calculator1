const minuteEl = document.querySelector(".minutes");
const hoursEl = document.querySelector(".hours");
const displayEl = document.querySelector(".display")
const valueEl = document.querySelector('.value');

const acEl = document.querySelector('.ac');
const pmEl = document.querySelector('.pm');
const percentEl = document.querySelector('.percent');

const additionEl = document.querySelector('.addition');
const subtractionEl = document.querySelector('.subtraction');
const multiplicationEl = document.querySelector('.multiplication');
const divisionEl = document.querySelector('.division');
const equalEl = document.querySelector('.equal');

const decimalEl = document.querySelector('.decimal');
const number0El = document.querySelector('.number-0');
const number1El = document.querySelector('.number-1');
const number2El = document.querySelector('.number-2');
const number3El = document.querySelector('.number-3');
const number4El = document.querySelector('.number-4');
const number5El = document.querySelector('.number-5');
const number6El = document.querySelector('.number-6');
const number7El = document.querySelector('.number-7');
const number8El = document.querySelector('.number-8');
const number9El = document.querySelector('.number-9');

const numberElArray = [
    number0El, number1El, number2El, number3El, number4El,
    number5El, number6El, number7El, number8El, number9El
  ];

//functions

const getValueStr = () => displayEl.textContent.split(',').join('')


const getValueAsNum = () => {
    return parseFloat(getValueStr);
};

const setStringAsValue = (valueStr) =>{
    if(valueStr[valueStr.length -1] === "."){
        displayEl.textContent += ".";
        return;
    }

    const [wholeNumStr, decimalStr] = valueStr.split(".")

    if(decimalStr){
        displayEl.textContent = 
            parseFloat(wholeNumStr).toLocaleString() + "." + decimalStr;
    }else {

    }
    displayEl.textContent = parseFloat(valueStr).toLocaleString();
}

const handleNumberElement = (numStr) =>{

    const currentDispleyStr = getValueStr();

    if(currentDispleyStr === "0"){
        setStringAsValue(numStr)
    }else{
        setStringAsValue(currentDispleyStr + numStr);
    }
    
}


//addeventListener button and numbers
for(let i = 0; i < numberElArray.length; i++){
    const numberEL = numberElArray[i];
    numberEL.addEventListener("click", () => {
        handleNumberElement(i.toString())
    })
};


decimalEl.addEventListener("click", ()=>{
    const currentDispleyStr = getValueStr();
    if(!currentDispleyStr.includes('.')){
        setStringAsValue(currentDispleyStr + ".");
    }
})

// setInterval


const updateTime = () => {
    const currentTime = new Date();
    
    let currentHours = currentTime.getHours();
    const currentMinutes = currentTime.getMinutes();

    hoursEl.textContent = currentHours.toString();
    minuteEl.textContent = currentMinutes.toString().padStart(2, "0");
}

setInterval(updateTime, 1000)
updateTime();



// addeventListener 

acEl.addEventListener("click", () => {
    setStringAsValue("0");
});

pmEl.addEventListener("click", () =>{
    const currentValueNum = getValueAsNum();
    const currentValueAsStr = getValueStr();
    if(currentValueNum >= 0){
        setStringAsValue('-' + currentValueAsStr);
    }else{
        setStringAsValue(currentValueAsStr.substring(1));
    }

});

percentEl.addEventListener("click", () =>{
    const currentValueNum = getValueAsNum();
    const newValueNum = currentValueNum / 100;
    setStringAsValue(newValueNum.toString());
});