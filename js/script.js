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

        if (stepID.note){
            htmlForm+= note();
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
        $('#back').html(backBtn);
        $('.backBtn').off('click', handleClick).on('click', handleClick);
    }
}

function buildFormTitle(stepTitle) {
    return  `<div class="panel-heading"> <h4 class="panel-title form-title">${stepTitle}</h4></div>`;
}

function buildFormButtons(stepId) {
    let screenshot = stepIDPointer.exampleScreenshot;

    let htmlStr = "";

    if(screenshot){
        htmlStr +=  `<div class="exampleSS"><p><a href= ${screenshot} target="_blank" ><b>Screenshot to clarify</b></a></p></div>`;
    }

    htmlStr += `<div class="form-content">`;

    stepId.buttonsArray.forEach(function (button) {
        htmlStr += buildButton(button);
    });

    htmlStr += `</div>`;

    return htmlStr;
}

function buildButton(button) {
    return `<button type="button" class="regular-btn btn btn-default btn-lg" id=${button.stepId}> ${button.buttonDescription}</button> </br>`;
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

    return `<div class="form-content"><p class="content">Please paste the content of the <b>${faqTitle}</b> <a href=${faqURL} target="_blank" > <b> article </b> </a> </p></div>`;
}

function addInstructions() {
    return `<div class="form-text"><h5 class="content">${stepIDPointer.instructions}</h5></div>`
}

function csInternalURL() {
    let csInternalURL = stepIDPointer.csInternalURL;
    return `<div class="form-text"><p> Click <a href= ${csInternalURL} target="_blank" ><b>here</b></a> for further information.</p></div>`;
}

function note() {
    let note = stepIDPointer.note;
    return `<div class="alert alert-info note" role="alert"><p> <b>Note:<u></u></b> ${note} </p></div>`
}
