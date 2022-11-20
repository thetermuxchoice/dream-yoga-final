let blobColor

window.addEventListener("scroll", () => {
   const anim = document.querySelectorAll("#section-anim");
   const bg = document.querySelector(".panel");
   const bgPosOne = anim[0].getBoundingClientRect().top;
   const bgPosTwo = anim[1].getBoundingClientRect().top;
   const bgPosTree = anim[2].getBoundingClientRect().top;
   if (bgPosOne < 500) {
      blobColor = 0x5c1322
   }
   if (bgPosTwo < 500) {
      blobColor = 0x000000
   }
   if (bgPosTree < 500) {
      blobColor = 0xffffff
   }
 });


 var radius = 8;
 TweenMax.staggerFromTo('.blob', 4 ,{
   cycle: {
     attr:function(i) {
       var r = i*90;
       return {
         transform:'rotate('+r+') translate('+radius+',0.1) rotate('+(-r)+')'
       }      
     }
   }  
 },{
   cycle: {
     attr:function(i) {
       var r = i*90+360;
       return {
         transform:'rotate('+r+') translate('+radius+',0.1) rotate('+(-r)+')'
       }      
     }
   },
   ease:Linear.easeNone,
   repeat:-1
 });
