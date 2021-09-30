var rule =CSSRulePlugin.getRule("h1:after")

gsap.from('.anim', {opacity:0,duration:1 , y:-50, stagger:0.6})
gsap.to(rule, {cssRule:{scaleY:0},duration:1,delay:2})
gsap.from('#center', {opacity:0,duration:1,delay:1 , y:50})
gsap.from('#right', {opacity:0,duration:2 ,delay:2, x:600})