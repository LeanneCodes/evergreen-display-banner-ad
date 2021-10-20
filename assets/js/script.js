var imageOne = document.getElementById("bg1");
var imageTwo = document.getElementById("bg2");
var textOne = document.getElementById("text1");
var textTwo = document.getElementById("text2");
var textThree = document.getElementById("text3");
var textFour = document.getElementById("text4");
var textFive = document.getElementById("text5");
var webLink = document.getElementById("cta");
var bounceX = document.getElementById("bounce");
var tl = new TimelineMax({repeat: 0});

tl.from(imageOne, {
    opacity: 1,
});

tl.from(textOne, 1, {
    x: 0,
    ease: Sine.easeOut,
});

tl.to(textOne, 1, {
    x: -200,
    ease: Sine.easeIn,
    opacity: 0.3,
});

tl.from(textTwo, 1, {
    x: -200,
    ease: Sine.easeOut,
});

tl.to(textTwo, 1, {
    x: 0,
    ease: Sine.easeIn,
});

tl.to(textTwo, 1, {
    x: -200,
    ease: Sine.easeOut,
    opacity: 0.3,
});

tl.from(textThree, 1, {
    x: -200,
    ease: Sine.easeOut,
});

tl.to(textThree, 1, {
    x: 0,
    ease: Sine.easeIn,
});

tl.to(textThree, 1, {
    x: -200,
    ease: Sine.easeOut,
    opacity: 0.3,
});

tl.to(imageOne, {
    opacity: 0,
    onComplete: function() {
        gsap.set(this.targets()[0],
        {display: 'none'})
    }
});

tl.to(imageTwo, {
    display: 'block',
    opacity: 1,
})

tl.from(textFour, 1, {
    x: -200,
    ease: Sine.easeOut,
});

tl.to(textFour, 1, {
    x: 0,
    ease: Sine.easeIn,
});

tl.to(textFour, 1, {
    x: -200,
    ease: Sine.easeOut,
    opacity: 0.3,
});

tl.from(textFive, 1, {
    x: -200,
    ease: Sine.easeOut,
});

tl.to(textFive, 1, {
    x: 0,
    ease: Sine.easeIn,
});

tl.from(webLink, 1, {
    x: -200,
    ease: Sine.easeOut,
    opacity: 0,
});

tl.to(webLink, 0.5, {
    x: 0,
    ease: Sine.easeIn,
});

tl.from(bounceX, {
    x: 0,
})

tl.to(bounceX, {
    x: 5,
    repeat: 2,
})

tl.to(bounceX, {
    x: 0,
})
