

// const items = document.getElementsByClassName("item")
// // console.log(items)
// for (const item of items) {
//     item.addEventListener("click", function (event) {
//         event.target.parentNode.removeChild(event.target)
//     })
// }
document.getElementById("main_container").addEventListener("click",function(event){
    event.target.parentNode.removeChild(event.target)
    console.log(event.target.parentNode)
})


document.getElementById("add_item").addEventListener("click", function () {
    const newDiv = document.createElement("div")
    newDiv.innerText = "hello new item"
    const mainContainer = document.getElementById("main_container")
    console.log(mainContainer)
    mainContainer.appendChild(newDiv)

})
