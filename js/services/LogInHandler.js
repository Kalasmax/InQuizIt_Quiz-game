//#region elementvariabler
var input_txt = document.querySelector("#index-input-username");
var slider = document.getElementById('slider')
var error_Msg = document.querySelector("#error_msg");
//#endregion

const LogInManager = (username) => {
    if(username.length < 1)
    {
        Slider();
        error_Msg.textContent = "Oops! Your username is too short. Please and try again.";
    }  
    else if(username.length > 9)
    {
        Slider();
        error_Msg.textContent = "Oops! Your username is too long. Please and try again.";
    } 
    else
    Launcher(username);  
}

const Slider = () => { // visar en slider med errormeddelande i 5 sec + ändrar färger 

    slider.classList.toggle('closed');

    setTimeout(function() 
    {
        slider.classList.toggle('closed');
    }, (5000)); 

    input_txt.style.borderColor = "rgb(255, 51, 85)";
    input_txt.style.backgroundColor = "rgb(255, 232, 235)";
}

// launchar spelet
const Launcher = (username) => {

    let user = new User(username); //skapar en instans av User 
    localStorage.setItem("Current user", JSON.stringify(user)); //lagrar user som objekt lokalt för username och ev. highscore etc
    location.href = "menu.html"; //Byter html-sida
}