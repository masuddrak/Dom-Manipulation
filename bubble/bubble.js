
document.getElementById("item1").addEventListener("click",function(event){
    console.log("click 1")
event.stopImmediatePropagation()
})
document.getElementById("item1").addEventListener("click",function(event){
    console.log("click 555")
})
document.getElementById("ui_container").addEventListener("click",function(){
    console.log("ui_container click")
})
document.getElementById("section_container").addEventListener("click",function(){
    console.log("section_container click")
})
