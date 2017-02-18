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
         /*if (gFormsData.forms[stepNumber].formTitle == "Submit ticket"){

         htmlForm += displayUserPath();
         }


        if (data.stepId.faqURL != undefined){
            htmlForm += displayUserPath();
        }
        else {
            htmlForm += redirectToFAQURL();
        }*/
    }

    if (stepIDPointer != data.paymentGateway ){
        backBtn = buildBackButton(stepID);
    }

    htmlForm += '</div>';

    document.getElementById('content').innerHTML = htmlForm;
    document.getElementById('back').innerHTML = backBtn;

    // $('#content .regularBtn,.yesBtn,.noBtn').on("click", handleClick);
    $('#content').on("click", handleClick);
    $('#back').on("click", handleBackClick);
}


function buildFormTitle(stepTitle) {

    var htmlStr = '<h4>' + stepTitle + '</h4>';
    return htmlStr;
}

function buildFormButtons(stepId) {

    var htmlStr;

    //htmlStr = '<div class="' + stepId.buttonsTitle + '">';
    htmlStr = '<div>';

    stepId.buttonsArray.forEach(function (button) {

            //htmlStr += buildButton(button, "regularBtn");
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

    //storeUserSelection(buttonClickedDescription, originFormTitle);
    buildForm(stepIDPointer);
}

function handleBackClick(event) {

    var elmID = $( ".form" ).attr("id");
    var parentID = data[elmID].parent;

    updateNextStep(parentID);
    //
    // var buttonClickedDescription = event.target.innerHTML;

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


function storeUserSelection(userChoice, originFormTitle) {

    var choiceSelected = new infoUserPath(userChoice, originFormTitle);
    userPath.push(choiceSelected);
}

*/