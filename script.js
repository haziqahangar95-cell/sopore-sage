function generateresponse(){
    const input = document.getElementById("userinput").ariaValueMax.trim();
    const responsebox = document.getElementById("responsebox");
    if(input) {
        responsebox.textcontent ="speak, and sopore shall echo your spirit.";
        return;
    }
    const responses =[
        "every bios reset is a reclaming of power. you are the architect of continuity.",
        "in the silence of code, your mastery speaks loudest."
    ];
    constrandomindex =math.floor(math.random() *responses.length);
    responsebox.textcontent = responses[randomindex];
}