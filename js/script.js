//GLOBAL VAR
let stepIDPointer = data.troubleshootingCategory;

function main() {
    addParentFormAttribute(stepIDPointer, null);
    buildForm(stepIDPointer);
}

function buildForm(stepID) {

    let htmlForm;
    let backBtn;

    htmlForm = '<div class=form id=' + stepID.stepId + '>';
    htmlForm += buildFormTitle(stepID.stepTitle);

    if (stepID.buttonsArray.length != 0) {
        htmlForm += buildFormButtons(stepID);
    }
    else {
        if (stepID.instructions != undefined) {
            htmlForm += addInstructions();
        }
        else {
            htmlForm += redirectToFAQURL();
        }
    }

    if (stepIDPointer.stepId != data.troubleshootingCategory.stepId) {
        backBtn = buildBackButton(stepID);
    }
    else {
        $('.backBtn ').remove();
    }

    htmlForm += '</div>';

    $('#content').off('click', handleClick);

    document.getElementById('content').innerHTML = htmlForm;

    $('#content').on("click", handleClick);

    if (backBtn !== undefined) {
        $('#back').off('click', handleClick);
        document.getElementById("back").innerHTML = backBtn;
        $('#back').on("click", handleClick);
    }
    //TODO add clean up here!!!!
    //$('SOME').off('click');
    //  $(selector).off(event,selector,function(eventObj),map)
}

function buildFormTitle(stepTitle) {

    let htmlStr = '<h4>' + stepTitle + '</h4>';
    // `<h4>${stepTitle}</h4>`
    return htmlStr;
}

function buildFormButtons(stepId) {

    let htmlStr = '<div>';

    stepId.buttonsArray.forEach(function (button) {
        htmlStr += buildButton(button, "btn btn-default btn-lg");
    });

    htmlStr += '</div>';

    return htmlStr;
}

function buildButton(button, classOption) {

    let htmlStr = '<button type="button" class="' + classOption + '" id=' + button.stepId + '>' + button.buttonDescription + '</button> </br>';

    return htmlStr;
}

function updateNextStep(currentStep) {

    stepIDPointer = data[currentStep];
}

function handleClick() {

    updateNextStep(event.target.id);
    buildForm(stepIDPointer);
}

function addParentFormAttribute(currentNode, parentNumber) {

    currentNode["parent"] = parentNumber;

    if (currentNode.buttonsArray.length != 0) {
        currentNode.buttonsArray.forEach(function (singleBtn) {
            addParentFormAttribute(data[singleBtn.stepId], currentNode.stepId); //passing parentID and not currentNode
        });
    }
}

function buildBackButton(currentNode) {

    let htmlStr = '<button type="button" class="backBtn btn btn-default btn-lg" id=' + currentNode.parent + '> Back </button>';
    return htmlStr;
}

function redirectToFAQURL() {

    let faqTitle = stepIDPointer.faqTitle;
    let faqURL = stepIDPointer.faqURL;

    return '<p> Please link to ticket to the <a href="' + faqURL + '"><b> article </b></a> of  <b>' + faqTitle + '</b>.</p>';
}

function addInstructions() {
    return '<p>' + stepIDPointer.instructions + '</p>';
}




