
// incrimental
let count=0
const countElement=document.getElementById("count")

document.getElementById("incriment").addEventListener("click",function(){
    countElement.innerText =  count+1
    count++
})
document.getElementById("dicriment").addEventListener("click",function(){
    if(count<=0){
        return alert("please negative not try")
    }
    countElement.innerText =  count-1
    count--
})
document.getElementById("reset").addEventListener("click",function(){
    countElement.innerText=0;
})