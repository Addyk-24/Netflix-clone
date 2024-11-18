console.log("ITZ JS TIME");

// let d =document.querySelector(".doubt1,.symbol,.q1,.symbol>img")
let c =document.querySelector(".symbol>img")
let a =document.querySelector(".symbol img:nth-child(2)")


c.addEventListener("click",()=>{

        document.querySelector(".info1").style.display = "block"
        c.style.display = "None"
        a.style.display="block"

    
})

a.addEventListener("click",()=>{

        document.querySelector(".info1").style.display = "None"
        c.style.display = "block"
        a.style.display="None"

})







// Trying to make efficient :

// let b = document.querySelectorAll(".info1")

// Array.from(b).forEach(e=>{

//         e.addEventListener("click",()=>{

//                 document.querySelector(".info1").style.display = "block"
//                 c.style.display = "None"
//                 a.style.display="block"
        
            
//         })


// })

// console.log(b)

 
