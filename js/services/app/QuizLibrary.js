const InitializeQuizzes = () => {

    quiz_Data = [];

    quiz_Data.push(new Quiz(0, "Food Quiz", "foodquiz", 
    [
        new QuizContent(0, "Vilken ingrediens ingår INTE i en béarnaisesås?", 
        [
            new QuizAlternative("Smör", false),
            new QuizAlternative("Dragon", false),
            new QuizAlternative("Mjölk", true),
            new QuizAlternative("Vinäger", false)
        ]),
        new QuizContent(1, "Vad betyder 'salamander' inom kökstermer?", 
        [
            new QuizAlternative("En typ av elvisp", false),
            new QuizAlternative("En ödla", false),
            new QuizAlternative("En tillagningsmetod", false),
            new QuizAlternative("En gratineringsugn", true)
        ]),
        new QuizContent(2, "Vad innebär det att 'byxa' en fisk?",
        [
            new QuizAlternative("Att trä på ett par byxor", false),
            new QuizAlternative("Att skära bort resterande av fiskens ryggben", true),
            new QuizAlternative("Att ta bort fisken fjäll", false),
            new QuizAlternative("Att rensa fisken", false),
        ]),
        new QuizContent(3, "Vad är ett cestjärn?",
        [
            new QuizAlternative("En stekpanna gjort i speciellt material", false),
            new QuizAlternative("En krydda från frukten cest", false),
            new QuizAlternative("Ett rivjärn för citrusfrukter", true),
            new QuizAlternative("En typ av brännvin", false)
        ]),
        new QuizContent(4, "Vad är brunoise?",
        [
            new QuizAlternative("Finskurna kuber av grönsaker", true),
            new QuizAlternative("Brunsås", false),
            new QuizAlternative("En fransk köttgryta", false),
            new QuizAlternative("Ett verktyg för att vässa knivar", false),
        ]),
    ]));

 // -----------------------------------------------------------------------------------------------------------
    
    quiz_Data.push(new Quiz(1, "Climbing Quiz", "climbingquiz", 
    [
        new QuizContent(0, "I hur många antal olympiska spel har klättring varit med som olympisk sport?", 
        [
            new QuizAlternative("Tre", false),
            new QuizAlternative("Ett", true),
            new QuizAlternative("Fem", false),
            new QuizAlternative("Noll", false)
        ]),
        new QuizContent(1, "Vad heter atleten som tog guld i alla världscups-tävlingar under en säsong?",
        [
            new QuizAlternative("Akiyo Noguchi", false),
            new QuizAlternative("Adam Ondra", false),
            new QuizAlternative("Janja garnbret", true),
            new QuizAlternative("Michael Jordan", false)
        ]),
        new QuizContent(2, "Vad för slags material har sulorna på en traditionell klättersko?",
        [
            new QuizAlternative("Gummi", true),
            new QuizAlternative("Kork", false),
            new QuizAlternative("Järndobbar", false),
            new QuizAlternative("Läder", false),
        ]),
        new QuizContent(3, "Vad kallas det när man tar sig till toppen av en rutt på första försöket?",
        [
            new QuizAlternative("Ace", false),
            new QuizAlternative("Flash", true),
            new QuizAlternative("Hole in one", false),
            new QuizAlternative("Topper", false)
        ]),
        new QuizContent(4, "Vad gör man om man 'matchar' ett grepp?",
        [
            new QuizAlternative("Att man själv ser ut som greppet", false),
            new QuizAlternative("Tar tag i ett grepp liknande det förra", false),
            new QuizAlternative("Att man formar handen efter greppet", false),
            new QuizAlternative("Att man använder bägge händer på samma grepp", true),
        ]),
    ]));

 // -----------------------------------------------------------------------------------------------------------
    
    quiz_Data.push(new Quiz(2, "Beer Quiz", "beerquiz", 
    [
        new QuizContent(0, "Hur hög alkoholhalt har världens starkaste öl?",
        [
            new QuizAlternative("40 %", false),
            new QuizAlternative("22 %", false),
            new QuizAlternative("37.5 %", false),
            new QuizAlternative("67.5 %", true)
        ]),
        new QuizContent(1, "Vilken är den mest sålda ölen i Sverige?",
        [
            new QuizAlternative("Sofiero", false),
            new QuizAlternative("Norrlands Guld", true),
            new QuizAlternative("Falcon", false),
            new QuizAlternative("Mariestads", false)
        ]),
        new QuizContent(2, "Varför heter lageröl just lager?",
        [
            new QuizAlternative("För att den först producerades i lagermiljö", false),
            new QuizAlternative("För att den tålde lagring bättre", true),
            new QuizAlternative("För att den innehåller sockerlag", false),
            new QuizAlternative("För att den till visso lagar ens humör", false),
        ]),
        new QuizContent(3, "Vilket land dricker mest öl per capita?",
        [
            new QuizAlternative("Finland", false),
            new QuizAlternative("Tyskland", false),
            new QuizAlternative("Tjeckien", true),
            new QuizAlternative("Sverige", false)
        ]),
        new QuizContent(4, "Hur mycket öl innehåller en brittisk 'Pint'?",
        [
            new QuizAlternative("5.68 dl", true),
            new QuizAlternative("4.73 dl", false),
            new QuizAlternative("8.45 dl", false),
            new QuizAlternative("2.95 dl", false),
        ]),
    ]));
 
 // -----------------------------------------------------------------------------------------------------------
    
    quiz_Data.push(new Quiz(3, "Fredrik Quiz", "fredrikquiz", 
    [
        new QuizContent(0, "Vad betyder namnet Fredrik?", 
        [
            new QuizAlternative("Den 'ärade'", false),
            new QuizAlternative("Härskare, mäktig", true),
            new QuizAlternative("Den 'lagerkrönte'", false),
            new QuizAlternative("Ljus, glänsande", false)
        ]),
        new QuizContent(1, "Hur snällt är det av Fredrik att rätta alla tentor innan julafton?",
        [
            new QuizAlternative("Ganska så hyggligt", false),
            new QuizAlternative("Schysst!", false),
            new QuizAlternative("Jättesnällt", true),
            new QuizAlternative("Meget dejligt", false)
        ]),
        new QuizContent(2, "Fredrik har ett tålamod av _______",
        [
            new QuizAlternative("Granit", false),
            new QuizAlternative("Well-papp", false),
            new QuizAlternative("Gröt", false),
            new QuizAlternative("Stål", true),
        ]),
        new QuizContent(3, "Vad blir namnet Fredrik baklänges?",
        [
            new QuizAlternative("kriderf", false),
            new QuizAlternative("kirdref", false),
            new QuizAlternative("kirderf", true),
            new QuizAlternative("kidrerf", false)
        ]),
        new QuizContent(4, "Vem är Fredriks favoritmusiker/grupp?",
        [
            new QuizAlternative("Bob hund", true),
            new QuizAlternative("Depeche Mode", false),
            new QuizAlternative("Lasse Berghagen", false),
            new QuizAlternative("Kraftwerk", false),
        ]),
    ]));

    // -----------------------------------------------------------------------------------------------------------
    
    // lagrar "quiz-Data" arrayen lokalt med JSON
    localStorage.setItem("Quiz", JSON.stringify(quiz_Data));
}