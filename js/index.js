window.onload = () => {

    //#region elementvariabler
    var input_txt = document.querySelector("#index-input-username");
    var enter_btn = document.querySelector("#index-enter-button");
    ////#endregion

    // Musklick på enterknapp för att komma till menyn
    enter_btn.addEventListener('click', () => {
        
        LogInManager(document.querySelector("#index-input-username").value);
    });            
    // Keypress enter ska göra samma sak
    input_txt.addEventListener('keypress', (e) => {

        if(e.keyCode === 13) 
        {     
            LogInManager(document.querySelector("#index-input-username").value);
        }
    });
}