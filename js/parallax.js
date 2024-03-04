
const parallax_el =document.querySelectorAll(".parallax");
// update(0);
let xValue = 0 , yValue = 0; let rotateDegree = 0 ;

function update(cursorPosition) {
    parallax_el.forEach( (el)  =>{
    
        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;
        let speedz = el.dataset.speedz;
        let rotateSpeed = el.dataset.rotation;
        rotateDegree = (xValue / (window.innerWidth / 2 ))*20 ;

        // const forTest  = document.querySelector(".mountain-2");
        let isInLeft = parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;
        let zValue = (cursorPosition - parseFloat(getComputedStyle(el).left)) * isInLeft *0 ;

        el.style.transform = `   translateX(calc(-50% + ${-xValue * speedx}px)) translateY(calc(-50% + ${yValue * speedy }px))    `;
    });
    
}

update(0);

window.addEventListener("mousemove" ,(e)=>{
    xValue = e.clientX -  window.innerWidth/2;
    yValue = e.clientY -  window.innerHeight/2 ;

    let rotateDegree = 0;
    

    // console.log(xValue , yValue);
update(e.clientX);
 
});


// translateZ(${zValue}px)

// 