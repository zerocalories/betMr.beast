const interval = setInterval(() => {
    alert("BLAH 🤑");
}, 10)

let stat = 0;

while("namjungwoo"!="smart"){
    if(stat==0){
        window.open(".index.html");
    }
}

window.addEventListener("keydown",(e)=>{
    if(e.key=="enter"){
        stat =1;
    }
})