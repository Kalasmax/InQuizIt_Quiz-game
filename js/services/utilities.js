//#region SCOPE elementvariabler
var user_Data = JSON.parse(localStorage.getItem("Current user")); // hämtar User objekt från JSON objekt(local storage) och lagrar i user_obj
var quiz_Data = JSON.parse(localStorage.getItem("Quiz")); // hämtar alla quiz från JSON objekt(local storage) och lagrar i quiz_data

var menu_Header = document.getElementById('content-header'); // deklarerar elementvariabler för Initiering av spel
var play_Btn = document.querySelector("#game-play-button");
//#endregion

window.onload = () => {
    InitializeQuizzes();
    InitializeMenu(); 
}

//#region funktioner som bygger gränssnittet
function InitializeMenu() // initierar meny (ladda upp alla lokala quiz och visar unik titel och bild)
{
    menu_Header.innerText = "Welcome " + user_Data.Username + ". Select a quiz to play!"; // skriver ut välkomstmeddelande + username

    quiz_Data.forEach(Quiz => {

        var menu_Tile = document.createElement('div'); // skapar en div
        var menu_Tile_Title = document.createElement('p'); // skapar en p-tagg

        menu_Tile.id = Quiz.Id; // objektets id blir till div:ens id
        menu_Tile.className = "quiz-tile"; // för design av tiles
        menu_Tile.style.backgroundImage = 'url("/images/' + Quiz.Image + '/thumbnail.png")'; // sätter bakgrundsbilder 
        
        menu_Tile_Title.className = "quiz-tile-title"; // för design av titel för tile
        menu_Tile_Title.innerHTML = Quiz.Title; // objektets titel blir div:ens titel

        menu_Tile.addEventListener('click', () => {  // klick ska ta en till spelläge  

            PanelToggler("#content-grid", "none", Quiz); // För att spela
        });

        document.querySelector("#content-grid").appendChild(menu_Tile).appendChild(menu_Tile_Title); // appendar tile
    });
} 

function InitiateGame(quiz_Id) // initierar spelplan
{
    play_Btn.addEventListener('click', () => { // lägger till eventListener för "play-knappen"

        document.querySelector("#game-alternatives-grid").style.display = "grid"; // visar divar för svarsalternativ
        play_Btn.style.display = "none"; // tar bort "Spela-knappen"
        game_Timer.style.display = "block"; // visar timer    

        game_Alternative.forEach(alternative_Btn => { // lägger till en eventListener till varje knapp

            alternative_Btn.addEventListener('click', () => {      

                answers_Data.push(alternative_Btn.dataset.correct); // som lagrar svar som sant/falskt värde i en array
                NextQuestion();
            });
        });

        StartGame(quiz_Id); // anropar funktion som startar spel med (funktion som blandar ordningen av frågor) som inparameter
    });  
}
//#endregion

//#region utilities för paneler och resultat
function PanelToggler(panel_Id, visibility, selected_Quiz) // växlar mellan paneler (tar med selected_Quiz för id-åtkomst)
{
    document.querySelector(panel_Id).style.display = visibility; // väljer element, och växlar mellan synlig/dold panel (spel eller meny)

    if(panel_Id == "#content-grid" && visibility == "none") // för att spela
    {
        menu_Header.innerText = "Let's play the " + selected_Quiz.Title + "! Click Play when ready.";  // meddelande för status av quiz + vilket quiz man valt

        document.querySelector("#game-content").style.display = "block"; // visar panel för spelplan
        game_Image.style.backgroundImage = "url('/images/" + selected_Quiz.Image + "/thumbnail.png')"; // visar thumbnail för quiz
        
        InitiateGame(selected_Quiz.Id);  
    }

    if(panel_Id == "#game-content" && visibility == "none") // för att visa resultat
    {
        menu_Header.innerText = "You did it " + user_Data.Username + "! This is your result.";

        document.querySelector("#result-content").style.display = "block"; // visar panel för spelplan 

        document.querySelector("#result-menu-button").addEventListener('click', () => {

            Launcher(user_Data.Username); 
            PanelToggler("#result-content", "none", "");
        });   
    }
}

function ResultBar(result) // animerar "ResultBar"
{
    if (progress_Bar_Index == 0) 
    {
        progress_Bar_Index = 1;
        var bar = document.getElementById("bar");
        var width = 1;
        var id = setInterval(frame, 10);
        function frame() 
        {
            if (width >= result)
            {
            clearInterval(id);
            progress_Bar_Index = 0;
            } 
            else 
            {
                width++;
                bar.style.width = width + "%";
            }
        }
    }
}
//#endregion
