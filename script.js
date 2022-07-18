const string = "404: Page Not Found";
const home_string = "Home";
let i = 0;
let j = 0;
let speed = 50;
let txt = "";
let txt2 = ""

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const type = () => {
    if(i < string.length){
        txt += string.charAt(i);
        $("#404_text").text(txt);
        i++
        setTimeout(type, speed)
    }
}
const type2 = () => {
    if(j < home_string.length){
        txt2 += home_string.charAt(j);
        $("#home").text(txt2);
        j++
        setTimeout(type2, speed)
    }
}
$(async function(){
    type()
    await sleep(2500)
    $("#bar2").css("display", "inline");
    type2()
});
