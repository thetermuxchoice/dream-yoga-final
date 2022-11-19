window.addEventListener("scroll", ()=>{
   const anim = document.querySelectorAll("#section-anim")
   const bg = document.querySelector(".panel")
   const bgPosOne = anim[0].getBoundingClientRect().top
   const bgPosTwo = anim[1].getBoundingClientRect().top
   const bgPosTree = anim[2].getBoundingClientRect().top
   if (bgPosOne < 500) {
      bg.classList.remove("bg-color-2")
      bg.classList.remove("bg-color-3")
      bg.classList.add("bg-color-1")
   } 
   if (bgPosTwo < 500) {
      bg.classList.remove("bg-color-1")
      bg.classList.remove("bg-color-3")
      bg.classList.add("bg-color-2")
   } 
   if (bgPosTree < 500) {
      bg.classList.remove("bg-color-2")
      bg.classList.add("bg-color-3")
   } 
})
