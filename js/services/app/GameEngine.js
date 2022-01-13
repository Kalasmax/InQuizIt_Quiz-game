//#region SCOPE elementvariabler & variabler
var game_Timer = document.querySelector("#game-counter"); //deklarerar elementvariabler för Start av spel
var game_Image = document.querySelector("#game-image");
var game_Alternative = Array.from(document.getElementsByClassName('game-alternative'));
var game_Alternative_Text = Array.from(document.getElementsByClassName('game-alternative-text'));

var answers_Data = []; // lagrar svar
var question_Index = 0; // rätt ordning av frågor
var timer_Start_Value = 9; // startvärde för timer
var timer_Counter; 
var progress_Bar_Index = 0;
//#endregion

//#region funktioner som hanterar spelet
function StartGame(Id)  // start av spel
{
    quiz_Shuffled = Quiz_Shuffler(quiz_Data[Id].Content);
    quiz_Id = Id;

    NextQuestion();
}

function NextQuestion() // byte av fråga (inkl. innehåll)
{
    if(answers_Data.length >= quiz_Shuffled.length)  
        ShowResult();
    else
    {
        clearInterval(timer_Counter); // återställer och startar om timer
        StartTimer(timer_Start_Value);

        menu_Header.innerText = quiz_Shuffled[question_Index].Question;  // visar fråga och tillhörande bild
        game_Image.style.backgroundImage = "url('/images/" + quiz_Data[quiz_Id].Image + "/" + quiz_Shuffled[question_Index].Order + ".png')";

        for(let i = 0; i < game_Alternative.length; i++) // lägger ut text i alternativ-knapparna
        {
            game_Alternative_Text[i].innerText = quiz_Shuffled[question_Index].Alternative[i].Value;
            game_Alternative[i].setAttribute('data-correct', quiz_Shuffled[question_Index].Alternative[i].Correct);
        }
    }

    question_Index++; // väljer nästa indexposition i frågorna
}

function ShowResult() // räknar ut och visar resultat
{
    clearInterval(timer_Counter); // återställer timer
    PanelToggler("#game-content", "none", "");
    
    var answers_Correct = 0; // variabler för att räkna antal rätt
    var questions_Total = 0;
    
    for(let i = 0; i < quiz_Shuffled.length; ++i) // räknar antal frågor och antal rätt
    {   
        questions_Total++;
        if(answers_Data[i] == "true")
        {
            answers_Correct++;
        }
    }
    
    var result = (answers_Correct / questions_Total) * 100; // räknar ut resultat och lagrar i procentform

    document.getElementById('result-text').innerText = "You got " + result + "% of the questions right!"; // skriver ut resultatet 

    ResultBar(result); // animerar "ResultatBar" baserat på antal rätt 

    // skapar ett objekt av Game med spelad frågeföljd, svar och antal rätt   
    var game_data = new Game(quiz_Shuffled, answers_Data, answers_Correct)

    // lagrar detta lokalt i JSON-format == (Ifall man skulle bygga vidare på applikationen. Ex. spara highscore etc)
    localStorage.setItem("Games", JSON.stringify(game_data));
}
//#endregion

//#region utilities för spel
function StartTimer(amount_Of_Time) // hanterar timer
{
    timer_Counter = setInterval(Timer, 1000);

    function Timer()
    {
        game_Timer.textContent = amount_Of_Time;
        amount_Of_Time--;
        if(game_Timer.textContent < 1)
        {
            if(answers_Data.length < quiz_Shuffled.length)
            {
                answers_Data.push(false);
                NextQuestion();
            }
            else
                ShowResult();
        }
    }
}

function Quiz_Shuffler(quiz_content) // blandar ordningen av frågor
{   
    let current_index = quiz_content.length, random_index;
    
    while (current_index != 0) // medan det finns element att blanda
    {
      random_index = Math.floor(Math.random() * current_index); // väljer ett kvarstående index
      current_index--;

      [quiz_content[current_index], quiz_content[random_index]] = // och växlar plats med nuvarande index
      [quiz_content[random_index], quiz_content[current_index]];
    }

    return quiz_content; // returnerar blandad array av frågor
}
//#endregion