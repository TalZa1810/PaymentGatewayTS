//GLOBAL VAR
let stepIDPointer = data.troubleshootingCategory;

function main() {
    addParentFormAttribute(stepIDPointer, null);
    buildForm(stepIDPointer);
}

function buildForm(stepID) {
    let htmlForm;
    let backBtn;

    htmlForm = `<div class="form panel panel-default" id= ${stepID.stepId} >`;

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

    htmlForm += `</div>`;


    $('#content').html(htmlForm);

    $('.regular-btn').off('click', handleClick).on('click', handleClick);


    if (backBtn) {
        $('#back').off('click', handleClick).html(backBtn).on('click', handleClick);
    }
}

function buildFormTitle(stepTitle) {
    return `<div class="panel-heading"> <h4 class="panel-title form-title">${stepTitle}</h4></div>`
}

function buildFormButtons(stepId) {
    let htmlStr = `<div class="form-buttons">`;

    stepId.buttonsArray.forEach(function (button) {
        htmlStr += buildButton(button, "regular-btn btn btn-default btn-lg");
    });

    htmlStr += `</div>`;

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
    return `<button type="button" class="backBtn btn btn-info btn-lg" id=${currentNode.parent}> Back </button>`;
}

function redirectToFAQURL() {
    let faqTitle = stepIDPointer.faqTitle;
    let faqURL = stepIDPointer.faqURL;

    return `<p>Please paste the content of the <b>${faqTitle}</b> <a href=${faqURL} target="_blank" > <b> article </b> </a> </p>`;
}

function addInstructions() {
    return `<h5>${stepIDPointer.instructions}</h5>`
}

function csInternalURL() {
    let csInternalURL = stepIDPointer.csInternalURL;
    return `<p> Click <a href= ${csInternalURL}  target="_blank" ><b>here</b></a> for further information.</p>`;
}


