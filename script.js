const img = [
    "Images/spartan.svg",
    "Images/castle.svg",
    "Images/da-vinci.svg",
    "Images/airplane.svg",
];
const dates = [
    "-3300 | 476",
    "476 | 1492",
    "1492 | 1792",
    "1792 | AJD"
]

ScrollTrigger.create({
    trigger: '.sections',
    // markers: true,
    pin: '.pin-element',
    start: 'top 40%',
    end: 'bottom 55%'
})

const sections = document.querySelectorAll('.section')

sections.forEach((section, index) => {
    // console.log(index)
    ScrollTrigger.create({
        trigger: section,
        start: 'top center',
        end: 'bottom center',
        // markers: true,
        onEnter: () => {
            gsap.set('.pin-element img', {
                attr: {src: img[index]}
            })
            gsap.set('.pin-element p', {
                innerText: dates[index]
            })
        },
        onEnterBack: () => {
            gsap.set('.pin-element img', {
                attr: {src: img[index]}
            })
            gsap.set('.pin-element p', {
                innerText: dates[index]
            })
        }
    })
});