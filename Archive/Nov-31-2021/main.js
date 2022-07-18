var click = 0;
var hclick = 0;
function clickcheck(){
    click = Number(click);
    click += 1;
    switch(click){
        case 10:
            alert('why did you click it 10 times?');
            break;
        case 20:
            alert('why are you still going?');
            break;
        case 30:
            alert('Jeez can\'t you stop?');
            break;
        case 40:
            document.getElementById("square").style.display = "none";
            alert('How do you like me now?!');
            break;
        case 60:
            if(hclick >= 40){
                alert('Oh dear...');
                break;
            };
            break;
        case 80:
            alert('the button is back isn\'t it?');
            break;
        case 100:
            alert('you have clicked the button a 100 times since I can\'t stop you go ahead and click anytimes you want');
            break;
        case 200:
            alert('200!');
            break;
        case 300:
            alert('300!');
            break;
        case 400:
            alert('400!');
            break;
        case 500:
            alert('500');
            break;
        case 600:
            alert('600!');
            break;
        case 700:
            alert('700!');
            break;
        case 800:
            alert('800!');
            break;
        case 900:
            alert('900!');
            break;
        case 1000:
            alert('1000! Look!')
            swapStyleSheet("Main.css")
            alert('the page is back to normal')
            alert('there ain\'t more clicks here and thanks for sticking around bye!')
            alert('also there ain\'t any pages here')
    };
};

function swapStyleSheet(sheet) {
    document.getElementById("pagestyle").setAttribute("href", sheet);  
};

function header_click(){
    if(click >= 40){
        hclick = Number(hclick);
        hclick += 1;
    };
    switch(hclick){
        case 10:
            alert('Seriously?');
            break;
        case 20:
            alert('Your clicking this now?');
            break;
        case 30:
            alert('you really like clicking things don\'t you?');
            break;
        case 40:
            swapStyleSheet("extra.css");
            alert('Look, What have you done to this page?');
            document.getElementById("square").style.display = "block";
    };
};