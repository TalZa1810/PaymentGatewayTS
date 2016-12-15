//GLOBAL VAR
var stepPointer = 0;
var yesIndex = 0;
var noIndex = 1;

var userPath = [];

function main() {
    // var formsData = JSON.parse(forms); //TODO: from server
    buildForm(stepPointer/*, "null", "null"*/);
}



/*

ctor
function userStepInfo(formNum, title, userChoice) {
    this.stepNum = formNum;
    this.formTitle = title;
    this.Choise = userChoice;

}

function updateChosenPath() {

    //updating user's choise path
    if (stepNum != 0) {//or different than last form step number
        formInfo = new userStepInfo(stepNum, title, userChoice);
        userPath.push(formInfo);
    }
} */



function buildForm(stepNumber, title, userChoice) {

    //debugger;

    var htmlForm;

    //adding class to the first line

    htmlForm = '<div class=form stepNumber=' + stepNumber + "" + '>';    
    htmlForm += buildFormTitle(gFormsData.forms[stepNumber].stepTitle);
    htmlForm += buildFormButtons(gFormsData.forms[stepNumber]);
    htmlForm += '</div>';

    document.getElementById('content').innerHTML = htmlForm;
    $('#content .regularBtn').on("click", handleClick);
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

    //updateNextStep(button.stepNumber);

    //var htmlStr = '<button class="' + classOption + '" onclick=" buildForm(' + stepPointer + ')">' + button.buttonDescription + '</button>';

    //var htmlStr = '<button class="' + classOption + '" onclick=" handleClick(' + stepPointer + ')">' + button.buttonDescription + '</button>';

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

    //var userChoice = gFormsData.forms[originFormNumber].buttonsArray[stepPointer].buttonDescription;

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


