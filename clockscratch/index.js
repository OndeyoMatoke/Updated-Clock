const element1 = document.getElementById("hours");
const element2 = document.getElementById("minutes");
const element3 = document.getElementById("seconds");
//const element4 = document.getElementById("ampm");



function clock() {
    let h = new Date().getHours();
    let m = new Date().getHours();
    let s = new Date().getSeconds();
    //let ampm = "AM"

    s = s < 10? "0" + s : s;
    m = m < 10? "0" + m : m;
    h = h < 10? "0" + h : h;

    element1.innerHTML = h;
    element2.innerHTML = m;
    element3.innerHTML = s;
    //element4, (innerHTML = "AM")

    

    
    setTimeout(()=>{
        clock();
    }, 1000)
}
clock();