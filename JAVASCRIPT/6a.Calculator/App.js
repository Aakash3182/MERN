// target all keys
var keys = document.querySelectorAll(".key")

// display
var inTxt = document.querySelector(".in")
var outTxt = document.querySelector(".out")

// console.log(`all keys =`, keys)

//looping statement to read key values

for(let item of keys) {
    item.addEventListener("click", function(event){
        console.log(`value =`, event.target.innerText)
        // to read key text 
        let inVal = event.target.innerText

        if(inVal === "CE") {
            // clear all
            inTxt.innerText  = "";
            outTxt.innerText = "";
        } else if(inVal === "C") {
            // clear input
            inTxt.innerText  = "";
        } else if(inVal === "BS") {
            // remove values of input one by one from last position
            let x = inTxt.innerText.slice(0,-1);
            inTxt.textContent = x;
        } else if (inVal === "=") {
            // calculation
            let res = eval(inTxt.innerText);
            outTxt.innerText = res;
        } else {
            // printing the input in display
            inTxt.textContent += inVal
        }
    });
}