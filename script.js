// { /*<span id="temp" class="fa"></span>*/}
const tempLoad = () => {
    let th = document.querySelector("#thermo");
    th.innerHTML = "&#xf2cb"; //using unicode for empty thermometer

    setTimeout(() => {
        th.innerHTML = "&#xf2ca";
        th.style.color="#f8b627";
    },1000) //after 1 sec, temp. should raise

    setTimeout(() => {
        th.innerHTML = "&#xf2c9";
    },2000)

    setTimeout(() => {
        th.innerHTML = "&#xf2c8";
    },3000)

    setTimeout(() => {
        th.innerHTML = "&#xf2c7";
        th.style.color="red";
    },4000)
}


tempLoad();
setInterval(tempLoad,5000);