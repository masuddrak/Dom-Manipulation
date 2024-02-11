document.getElementById("change_hadin").addEventListener("click",function(){
    const main_headeing=document.getElementById("main_headeing")
    main_headeing.innerText="wow!"
})

document.getElementById("submit_btn").addEventListener("click",function(){
    const myIput=document.getElementById("my_input")
    const dealtText=document.getElementById("dealtText")
    dealtText.innerText=myIput.value
    myIput.value=""
    console.log(dealtText)
})