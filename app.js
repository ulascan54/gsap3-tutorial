var rule =CSSRulePlugin.getRule("h1:after")

// gsap.from('.anim', {opacity:0,duration:1 , y:-50, stagger:0.6})
// gsap.to(rule, {cssRule:{scaleY:0},duration:1,delay:2})
// gsap.from('#center', {opacity:0,duration:1,delay:1 , y:50})
// gsap.from('#right', {opacity:0,duration:2 ,delay:2, x:600})

var timeline = gsap.timeline({default:{duration:1}})

timeline.from('.anim',{opacity:0,y:-50, stagger:0.6})
.to(rule, {cssRule:{scaleY:0},duration:1.9},"-=2.2")
.from('#right', {opacity:0,  x:600}, "-=1.5")
.from('#center', {opacity:0 , y:50})

var timeline2 = gsap.timeline({default:{duration:1}})



document.querySelectorAll('button')[0].addEventListener('click',()=>{
    timeline.reversed() ?  timeline.play() : timeline.reverse()
    setTimeout(() => {
        let a =document.querySelector('.a')
            a.classList.remove('flex')
            a.classList.add('hidden')
        let b =document.querySelector('.b')
            b.classList.add('flex')
            b.classList.remove('hidden')
        timeline2.from('.anim-2',{opacity:0,y:-50, stagger:0.6})
        .to(rule, {cssRule:{scaleY:0},duration:1.9},"-=2.2")
        .from('#a-right', {opacity:0,  x:600}, "-=1.5")
        .from('#a-center', {opacity:0 , y:50})
        a.classList.add('b')
        a.classList.remove('a')
        b.classList.add('a')
        b.classList.remove('b')
    }, 3000); 
})

document.querySelectorAll('button')[1].addEventListener('click',()=>{
    timeline2.reversed() ?  timeline2.play() : timeline2.reverse()
    setTimeout(() => {
        let a =document.querySelector('.a')
            a.classList.remove('flex')
            a.classList.add('hidden')
        let b =document.querySelector('.b')
            b.classList.add('flex')
            b.classList.remove('hidden')
            timeline.from('.anim',{opacity:0,y:-50, stagger:0.6})
            .to(rule, {cssRule:{scaleY:0},duration:1.9},"-=2.2")
            .from('#right', {opacity:0,  x:600}, "-=1.5")
            .from('#center', {opacity:0 , y:50})
        a.classList.add('b')
        a.classList.remove('a')
        b.classList.add('a')
        b.classList.remove('b')
    }, 3000); 
})


