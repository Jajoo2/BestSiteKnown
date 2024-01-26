let deg = 52;
let speed = 0;
let target = 0;
let pressed = false;
function buttonClicked() {

    target = Math.random()*360
    deg = 0
    speed = 0

}
    setInterval(() => { if(pressed){
        speed = target*0.01+speed*0.99 + 1;
        if(deg < target) {
        document.body.style.background = `linear-gradient(`+ deg+speed +`deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)`
        } else {
            document.body.style.background = `linear-gradient(`+ deg-speed +`deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)`
        };
        document.body.style.backgroundAttachment = "fixed";
        document.body.style.backgroundRepeat = "no-repeat";
        }}, 1);

const button = document.querySelector('button');
button.addEventListener('click', buttonClicked);
button.addEventListener("pointerdown", (e)=>{pressed= true;});
button.addEventListener("pointerup", (e)=>{pressed= false;});