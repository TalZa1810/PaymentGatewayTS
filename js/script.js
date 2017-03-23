//GLOBAL VAR
let stepIDPointer = data.troubleshootingCategory;

function main() {
    addParentFormAttribute(stepIDPointer, null);
    buildForm(stepIDPointer);
}

function buildForm(stepID) {
    let htmlForm;
    let backBtn;

    htmlForm = `<div class=form id= ${stepID.stepId} >`;
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

    $('#content').html(htmlForm).on('click', handleClick);

    if (backBtn) {
        $('#back').html(backBtn).on('click', handleClick);
    }
}

function buildFormTitle(stepTitle) {
    return `<h4>${stepTitle}</h4>`
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
    return `<button type="button" class="${classOption}" id=${button.stepId}> ${button.buttonDescription}</button> </br>`;
}

function updateNextStep(currentStep) {
    stepIDPointer = data[currentStep];
}

function handleClick(e) {
    e.preventDefault();
    updateNextStep(event.target.id);
    buildForm(stepIDPointer);
    return false;
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
    return `<button type="button" class="backBtn btn btn-default btn-lg" id=${currentNode.parent}> Back </button>`;
}

function redirectToFAQURL() {
    let faqTitle = stepIDPointer.faqTitle;
    let faqURL = stepIDPointer.faqURL;

    return `<p> Please link to ticket to the <a href=${faqURL}><b>article</b></a> of <b>${faqTitle}</b>.</p>`;
}

function addInstructions() {
    return `<h4>${stepIDPointer.instructions}</h4>`
}

function csInternalURL() {
    let csInternalURL = stepIDPointer.csInternalURL;
    return `<p> Click <a href= ${csInternalURL} ><b>here</b></a> for further information.</p>`;
}


