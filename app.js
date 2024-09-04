//  
// let t1 = gsap.timeline()
// t1.to("#box1",{
//     x:1200,
//     duration:2,
//     delay:1,
//     rotate:360,
//    scale:0.5
// })
// t1.to("#box2",{
//     x:1200,
//     duration:2,   
//     rotate:360,
//    scale:0.5
// })
// t1.to("#box3",{
//     x:1200,
//     duration:2,
//     rotate:360,
//    scale:0.5
// })
let t1 = gsap.timeline()
t1.from("#nav h3",{
  y:-50,
  opacity:0,
  delay:0.4,
  duration:0.5,
  stagger:0.1

})
t1.from("#main h1",{
    x:-500,
    opacity:0,
    duration:0.5,
    stagger:0.2

})
t1.from("img",{
  x:100,
  rotate:45,
  opacity:0,
  duration:0.5,
  stagger:0.6

})