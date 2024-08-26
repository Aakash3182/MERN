
var remBtn = document.getElementById('rem');

// domTarget.addEventLisenter(event,callback function)

remBtn.addEventListener("click",function(){
    let x = 1246;
    let y = 55;
    document.write(`<h1> remainder is = ${x % y} </h1>`)
})
