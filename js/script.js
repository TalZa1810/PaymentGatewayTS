//GLOBAL VAR
var stepPointer = 0;
var yesIndex = 0;
var noIndex = 1;

var userPath = [];

function main() {
    buildForm(stepPointer);
}

function buildForm(stepNumber, title, userChoice) {

    var htmlForm;

    htmlForm = '<div class=form stepNumber=' + stepNumber + "" + '>';    
    htmlForm += buildFormTitle(gFormsData.forms[stepNumber].stepTitle);

    if (gFormsData.forms[stepNumber].buttonsArray.length != 0)
    {
            htmlForm += buildFormButtons(gFormsData.forms[stepNumber]);
    }
    else{

        /*
           if (gFormsData.forms[stepNumber].formTitle == "Submit ticket"){

            htmlForm += displayUserPath();
        }     
        */

        if (gFormsData.forms[stepNumber].ticketOrFAQ === "ticket"){
            htmlForm += displayUserPath();
        }
        else if (gFormsData.forms[stepNumber].ticketOrFAQ === "FAQ"){
   
            htmlForm += redirectToFAQURL();
        }    
    }

    htmlForm += '</div>';

    document.getElementById('content').innerHTML = htmlForm;
    $('#content .regularBtn,.yesBtn,.noBtn').on("click", handleClick);
}

function redirectToFAQURL(){

    var faqTitle = gFormsData.forms[event.target.id].faqTitle;
    var faqURL= gFormsData.forms[event.target.id].faqURL;

    return '<p>Click <a href="'+ faqURL +'"><b>here</b></a> to learn more about  <b>'+ faqTitle + '</b>.</p>';
}

function displayUserPath(){

    var htmlStr ='';

      userPath.forEach(function (infoUserPath) {

            htmlStr += displayUserChoice(infoUserPath);
        });

      return htmlStr;  
}

function displayUserChoice(infoUserPath){

    return '<p>' + infoUserPath.formTitle +'  '+ infoUserPath.userChoice + '</p><br>';
}

function buildFormTitle(stepTitle) {

    var htmlStr = '<h2>' + stepTitle + '</h2>';
    return htmlStr;
}

function buildFormButtons(step) {

    var htmlStr;

    if (step.isYesNo == "false") {
        //block elements
        htmlStr = '<div class="' + step.buttonsTitle + '">';

        step.buttonsArray.forEach(function (button) {

            htmlStr += buildButton(button, "regularBtn");
        });

        htmlStr += '</div';
    }
    else {
        //inline elements
        htmlStr = '<span class="' + step.buttonsTitle + '">';
        htmlStr += buildButton(step.buttonsArray[yesIndex], "yesBtn");
        htmlStr += buildButton(step.buttonsArray[noIndex], "noBtn");
        htmlStr += '</span';
    }

    return htmlStr;
}

function buildButton(button, classOption) {

    var htmlStr = '<button class="' + classOption+'" id='+button.stepNumber+'>'+ button.buttonDescription +'</button>';

    if (classOption == "regularBtn") {
        htmlStr += '</br>';
    }

    return htmlStr;
}

function updateNextStep(currentStep) {
    stepPointer = currentStep;
}

function handleClick(buttonClicked) {

    var originFormNumber = $( ".form" ).attr("stepNumber");
    
    var originFormTitle = gFormsData.forms[originFormNumber].formTitle;

    updateNextStep(event.target.id);

    var buttonClickedDescription = event.target.innerHTML;

    storeUserSelection(buttonClickedDescription, originFormTitle);
    buildForm(stepPointer);
}


function storeUserSelection(userChoice, originFormTitle) {

    var choiceSelected = new infoUserPath(userChoice, originFormTitle);
    userPath.push(choiceSelected);
}

function infoUserPath(userChoice, originFormTitle) {

    this.formTitle = originFormTitle;
    this.userChoice = userChoice;

    this.getFormTitle = function () {
        return this.formTitle;
    };

    this.getUserChoice = function () {
        return this.userChoice;
    };

    return true;
}