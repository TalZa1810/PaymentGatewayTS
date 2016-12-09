//GLOBAL VAR
var stepPointer = 0;
var yesIndex = 0;
var noIndex = 1;


function main() {
    // var formsData = JSON.parse(forms); //TODO: from server
    buildForm(stepPointer);
}

function buildForm(stepNumber) {

    var htmlForm;

    htmlForm = '<div stepNumber=' + stepNumber + "" + '>';
    htmlForm += buildFormTitle(gFormsData.forms[stepNumber].stepTitle);
    htmlForm += buildFormButtons(gFormsData.forms[stepNumber]);
    htmlForm += '</div>';

    document.getElementById('content').innerHTML = htmlForm;
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

    updateNextStep(button.stepNumber);

    var htmlStr = '<button class="' + classOption + '" onclick=" buildForm(' + stepPointer + ')">' + button.buttonDescription + '</button>';

    if (classOption == "regularBtn"){
        htmlStr+= '</br>';
    }

    return htmlStr;



    //return '<button class="' + classOption + '" onclick=" buildForm(' + stepPointer + ')">' + button.buttonDescription + '</button></br>';
}


//TODO: create map of objects- key- stepNumber and value- stepInfo: stepInfo : buttonDescription

function updateNextStep(currentStep) {
    stepPointer = currentStep;
}


