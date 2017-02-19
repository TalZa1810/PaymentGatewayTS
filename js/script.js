//GLOBAL VAR
var stepIDPointer = data.paymentGateway;

//var userPath = [];

function main() {
    addParentFormAttribute(stepIDPointer , null);
    buildForm(stepIDPointer);
}

function buildForm(stepID) {

    var htmlForm;
    var backBtn;

    htmlForm = '<div class=form id=' + stepID.stepId + "" + '>';
    htmlForm += buildFormTitle(stepID.stepTitle);

    if (stepID.buttonsArray.length != 0)  {
        htmlForm += buildFormButtons(stepID);
    }
    else{
         /*
        }*/
    }

    if (stepIDPointer.stepId != data.paymentGateway.stepId ){
        backBtn = buildBackButton(stepID);
    }

    htmlForm += '</div>';

    document.getElementById('content').innerHTML = htmlForm;

    if (backBtn != undefined){
        document.getElementById('back').innerHTML = backBtn;
        $('#back').on("click", handleBackClick);
    }

    $('#content').on("click", handleClick);
}


function buildFormTitle(stepTitle) {

    var htmlStr = '<h4>' + stepTitle + '</h4>';
    return htmlStr;
}

function buildFormButtons(stepId) {

    var htmlStr;

    htmlStr = '<div>';

    stepId.buttonsArray.forEach(function (button) {
            htmlStr += buildButton(button, "btn btn-default btn-lg");
        });

    htmlStr += '</div>';

    return htmlStr;

}

function buildButton(button, classOption) {

    var htmlStr = '<button  type="button" class="'+classOption +'" id='+button.stepId+'>'+ button.buttonDescription +'</button>';

    if (classOption === "btn btn-default btn-lg") {
        htmlStr += '</br>';
    }

    return htmlStr;
}

function updateNextStep(currentStep) {

    stepIDPointer = data[currentStep];
}

function handleClick(buttonClicked) {

    var originFormId = $( ".form" ).attr("id");

    var originalFormTitle = data[originFormId].stepTitle;

    updateNextStep(event.target.id);

    var buttonClickedDescription = event.target.innerHTML;

    buildForm(stepIDPointer);
}

function handleBackClick(event) {

    var elmID = $( ".form" ).attr("id");
    var parentID = data[elmID].parent;

    updateNextStep(parentID);
    buildForm(stepIDPointer);
}

function addParentFormAttribute( currentNode ,parentNumber){

    currentNode["parent"] = parentNumber;

    if (currentNode.buttonsArray.length  !=  0){
        currentNode.buttonsArray.forEach(function (singleBtn) {
            addParentFormAttribute( data[singleBtn.stepId]  , currentNode.stepId); //passing parentID and not currentNoda
        });
    }
}

function buildBackButton( currentNode ) {

    var htmlStr = '<button  type="button" class="backBtn btn btn-default btn-lg" id=' + currentNode.stepId +'> Back </button>';

    return htmlStr;
}

/*
 function redirectToFAQURL(){

 var faqTitle = data.stepId[event.target.id].faqTitle;
 var faqURL= data.stepId[event.target.id].faqURL;

 return '<p>Click <a href="'+ faqURL +'"><b>here</b></a> to learn more about  <b>'+ faqTitle + '</b>.</p>';
 }

 */