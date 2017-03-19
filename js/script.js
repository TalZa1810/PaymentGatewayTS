//GLOBAL VAR
var stepIDPointer = data.troubleshootingCategory;

function main() {
    addParentFormAttribute(stepIDPointer, null);
    buildForm(stepIDPointer);
}

function buildForm(stepID) {

    var htmlForm;
    var backBtn;

    htmlForm = '<div class=form id=' + stepID.stepId + '>';
    htmlForm += buildFormTitle(stepID.stepTitle);

    if (stepID.buttonsArray.length != 0) {
        htmlForm += buildFormButtons(stepID);
    }
    else {

        if (stepID.instructions) {
            htmlForm += addInstructions();
        }

        if (stepID.csInternalURL){
            htmlForm += csInternalURL();
        }

        if (stepID.faqURL) {
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

    $('#content').off('click', handleClick).html(htmlForm).on('click', handleClick);


    if (backBtn) {
        $('#back').off('click', handleClick).html(backBtn).on('click', handleClick);
    }
}

function buildFormTitle(stepTitle) {

    var htmlStr = '<h4>' + stepTitle + '</h4>';
    // `<h4>${stepTitle}</h4>`
    return htmlStr;
}

function buildFormButtons(stepId) {

    var htmlStr = '<div>';

    stepId.buttonsArray.forEach(function (button) {
        htmlStr += buildButton(button, "btn btn-default btn-lg");
    });

    htmlStr += '</div>';

    return htmlStr;
}

function buildButton(button, classOption) {

    var htmlStr = '<button type="button" class="' + classOption + '" id=' + button.stepId + '>' + button.buttonDescription + '</button> </br>';

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

    var htmlStr = '<button type="button" class="backBtn btn btn-default btn-lg" id=' + currentNode.parent + '> Back </button>';
    return htmlStr;
}

function redirectToFAQURL() {

    var faqTitle = stepIDPointer.faqTitle;
    var faqURL = stepIDPointer.faqURL;

    return '<p> Please link to ticket to the <a href="' + faqURL + '"><b>article</b></a> of <b>' + faqTitle + '</b>.</p>';
}

function addInstructions() {
    return '<p>' + stepIDPointer.instructions + '</p>';
}

function csInternalURL() {

    var csInternalURL = stepIDPointer.csInternalURL;

    return '<p> Click <a href="' + csInternalURL + '"><b>here</b></a> for further information.</p>';
}


