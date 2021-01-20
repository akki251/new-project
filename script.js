gsap.registerPlugin(ScrollTrigger);

document.querySelector(".worksAsset").addEventListener("mouseover",function() {
    
    // alert("HI");
    if(document.querySelector(".worksAsset").style.opacity === "0")
    {
        document.querySelector(".worksAsset").style.pointerevents = "0";
    }
    else{
  document.querySelector(".likes").classList.toggle("likesanime");
    }

})



var tl =gsap.timeline();
/// MODEL 
tl.fromTo(".model",1,{
    opacity : 0,
    xPercent :100,
    ease: "expo.out",

},
{
    opacity : 1,
    xPercent :0,
})
//LINE
tl.fromTo(".lineBig",.7,{
    opacity : 0,
    // xPercent :100,
    ease: "expo.out",
   scale : 0.7,
},
{
    scale : 1,
    opacity : 1,
    // xPercent :0,
})

//// HEADING 
tl.fromTo(".mainHeading",1,{
    opacity : 0,
    // xPercent :100,
    ease: "expo.out",
   scale : 0.7,
},
{
    scale : 1,
    opacity : 1,
    // xPercent :0,
})

//// SubHEADING 
tl.fromTo(".subHeading",.5,{
    opacity : 0,
    yPercent :-100,
    ease: "expo.out",
//    scale : 0.7,
},
{
    // scale : 1,
    opacity : 1,
    yPercent :0,
})

//// TIMELINE
tl.fromTo(".TimelLineAsset",.8,{
    opacity : 0,
    yPercent :50,
    ease: "expo.out",
//    scale : 0.7,
},
{
    // scale : 1,
    opacity : 1,
    yPercent :0,
})

//BUTTON

tl.fromTo(".button",.8,{
    opacity : 0,
    // yPercent :50,
    ease: "expo.out",
   scale : 0.7,
},
{
    scale : 1,
    opacity : 1,
    // yPercent :0,
})

//CROSS ASSet

tl.fromTo(".assetCross",.8,{
    opacity : 0,
    xPercent :50,
    ease: "expo.out",
//    scale : 0.7,
},
{
    // scale : 1,
    opacity : 1,
    xPercent :0,
})


//arrow ASSet

tl.fromTo(".asset",12,{
    opacity : .6,
    yPercent :50,
    ease: "expo.out",
//    scale : 0.7,
},
{
    // scale : 1,
    opacity : 1,
    yPercent :0,
},"-=4")

//LEFT NAv

tl.fromTo(".leftNav",1,{
    opacity : 0,
    xPercent :-50,
    ease: "expo.out",
//    scale : 0.7,
},
{
    // scale : 1,
    opacity : 1,
    xPercent :0,
},"-=7")

//UPPER  NAv

tl.fromTo(".upperNav",1,{
    // opacity : 0,
    xPercent :-100,
    ease: "expo.out",
//    scale : 0.7,
},
{
    // scale : 1,
    opacity : 1,
    xPercent :0,
},"-=6")

//LEFT HEADING  and BottomLine

tl.fromTo(".leftHeading, .bottomLine",1,{
    opacity : 0,
    xPercent :-200,
    ease: "expo.out",
//    scale : 0.7,
},
{
    // scale : 1,
    opacity : 1,
    xPercent :0,
},"-=6")

//workkasset

tl.fromTo(".worksAsset",1,{
    opacity : 0,
    // xPercent :-200,
    ease: "expo.out",
//    scale : 0.7,
},
{
    // scale : 1,
    opacity : 1,
    xPercent :0,
},"-=6")

//////////////////////////////PAGE 2

gsap.fromTo(".mainHeading2",{
    scrollTrigger :{
        trigger : ".mainHeading2",
        toggleActions: "restart none none none",

    },

    yPercent : 200,
    opacity : 0,
    duration  :1,
    ease: "expo.out",
},

    {
        scrollTrigger :{
            trigger : ".mainHeading2",
            toggleActions: "restart none none none",
    
        },
        yPercent : 0,
        opacity : 1,
        duration  :1,
        ease: "expo.out",
    },
    
    
)

/////////////////DESIGN HEADING

gsap.fromTo(".mainHeading3",{
    scrollTrigger :{
        trigger : ".mainHeading3",
        scrub : true,
        toggleActions: "restart none none none",
    },
    yPercent : 200,
    opacity : 0,
    duration  :1,
    ease: "expo.out",
},

    {
        scrollTrigger :{
            trigger : ".mainHeading3",
            
            toggleActions: "restart none none none",
        },
        yPercent : 0,
        opacity : 1,
        duration  :1,
        ease: "expo.out",
    },"+=1")

/////////////////BOXES ANIMATION

gsap.fromTo(".text1",{
    scrollTrigger :{
        trigger : ".text1",
        
        start : "20px center",
        // toggleActions: "restart reset reverse none",

        // markers : true,
    },
//    y: 20,
    opacity : 0,
    duration  :1,
    ease: "expo.out",
    duration: 1,
    y: 50,
    x:30,
    delay : 0.4,
},

    {
        scrollTrigger :{
            trigger : ".text1",
            // toggleActions: "restart reset reverse none",
        },
        y:0,
        opacity : 1,
        duration  :1,
        ease: "expo.out",
        duration: 1,
        delay : 0.4,
    },"-=4")



    ///////////BOX2 

    gsap.fromTo(".text2",{
        scrollTrigger :{
            trigger : ".text2",
            // toggleActions: "restart reset reverse none",
        },
  
        opacity : 0,
        duration  :1,
        ease: "expo.out",
        duration: 1,
        y: 50,
        x:-65,
        delay  : .6,
    },
    
        {
            scrollTrigger :{
                trigger : ".text2",
                // toggleActions: "restart reset reverse none",
            },
            y:0,
            opacity : 1,
            duration  :1,
            ease: "expo.out",
            duration: 1,
            delay  :.6,
        },"+=3")
    
    

    ///////////BOX 3

    gsap.fromTo(".text3",{
        scrollTrigger :{
            trigger : ".text3",
            // toggleActions: "restart reset reverse none",
        },
  
        opacity : 0,
        duration  :1,
        ease: "expo.out",
        duration: 1,
        y: 50,
        x:-75,
        delay  :1,
    },
    
        {
            scrollTrigger :{
                trigger : ".text3",
                // toggleActions: "restart reset reverse none",
            },
            y:0,
            opacity : 1,
            duration  :1,
            ease: "expo.out",
            duration: 1,
            delay  :1,
        },"+=1")
    
    

           ///////////ELEMS

    gsap.fromTo(".elem",{
        scrollTrigger :{
            trigger : ".elem",
            // toggleActions: "restart reset reverse none",
        },
  
        opacity : 0,
        duration  :1,
        ease: "expo.out",
        duration: 1,
        // y: 50,
        x:0,
        delay  :1,
    },
    
        {
            scrollTrigger :{
                trigger : ".elem",
                // toggleActions: "restart reset reverse none",
            },
            x:75,
            opacity : .5,
            duration  :1,
            ease: "expo.out",
            duration: 1,
            delay  :1,
        },"+=1")
    
        gsap.fromTo(".elem",{
            scrollTrigger :{
                trigger : ".elem",
                // toggleActions: "restart reset reverse none",
            },
      
            opacity : 0,
            duration  :1,
            ease: "expo.out",
            duration: 1,
            // y: 50,
            x:0,
            delay  :1,
        },
        
            {
                scrollTrigger :{
                    trigger : ".testimonials",
                    // toggleActions: "restart reset reverse none",
                },
                x:-75,
                opacity : .7,
                duration  :1,
                ease: "expo.out",
                duration: 1,
                delay  :1,
            },"+=1")
        
          
            function scoreAnime(){
                var scoreBoxes = document.querySelector(".scoreBoxes");
    var elemHeight = scoreBoxes.getBoundingClientRect().top
    var windowHeight = window.innerHeight /2 ;
   
    var clientsNumber = document.querySelector(".first h4");
 
    
    if( elemHeight < windowHeight){
           var value = 0;
setInterval(() => {
    if(value === 126)
    {
    }
    else
    {
        clientsNumber.innerHTML = value++;
    }
}, 10);
    }
}
window.addEventListener("scroll",scoreAnime);


///////////////////////// second score



function scoreAnime2(){
    var scoreBoxes = document.querySelector(".scoreBoxes");
var elemHeight = scoreBoxes.getBoundingClientRect().top
var windowHeight = window.innerHeight /2 ;

var clientsNumber2 = document.querySelector(".second1");


if( elemHeight < windowHeight){

    let value1 = 0;

    setInterval(() => {
    
    if(value1 === 251)
    {
    
    }
    else
    {
    clientsNumber2.innerHTML = value1++;
    }
    
    
    }, 10);
}
}

window.addEventListener("scroll",scoreAnime2);

     
///////////////////////// third score


var count = 0;
if(count >= 1)
{
      console.log("BAND ");
}
else



{
   




function scoreAnime3(){
    var scoreBoxes = document.querySelector(".scoreBoxes");
var elemHeight = scoreBoxes.getBoundingClientRect().top
var windowHeight = window.innerHeight /2 ;

var clientsNumber3 = document.querySelector(".third1");


if( elemHeight < windowHeight){


    let value2 = 0;

    setInterval(() => {
    
    if(value2 === 16)
    {
    }
    else
    {
    clientsNumber3.innerHTML = value2++;
    }
    
    
    }, 100);
    count++;

}

}


window.addEventListener("scroll",scoreAnime3);



}









     
//////TESTIMONIAL ANIMATION
gsap.fromTo(".testimonials",{
    scrollTrigger :{
        trigger : ".testimonials",
        toggleActions: "restart none none none",
    },
    opacity : 0,
    duration  :1,
    ease: "expo.out",
    x :50,
},

    {
        scrollTrigger :{
            trigger : ".testimonials",
            toggleActions: "restart none none none",
        },
        x:0,
        opacity : 1,
        duration  :1,
        ease: "expo.out",
    },"-=1")
