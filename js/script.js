

//GLOBAL VAR
var stepPointer = 0;

//map: key - stepNumber and value - stepInfo 
var userPath = Map(); 


function main() {
    // var formsData = JSON.parse(forms); //TODO: from server
    buildForm(stepPointer);
}



function buildForm(stepNumber) {

    var htmlForm;

    htmlForm = '<div stepNumber=' + stepNumber + "" + '>';
    htmlForm += buildFormTitle (gFormsData.forms[stepNumber].stepTitle);
    htmlForm += buildFormButtons (gFormsData.forms[stepNumber].buttonsArray, stepNumber);
    htmlForm += '</div>';

    document.getElementById('content').innerHTML = htmlForm;
}

function buildFormTitle(stepTitle){

    var htmlStr = '<h2>' + stepTitle + '</h2>';
    return htmlStr;
}

function buildFormButtons(buttonsArray, stepNumber){      

     var htmlStr = '<div class=stepButtons>';

     buttonsArray.forEach(function (button){
         htmlStr+= buildButton(button);
     });

     htmlStr += '</div';

     return htmlStr;
}

function buildButton( button ){

    //userPath.set(button.stepNumber, new stepInfo(button.) )    

    updateNextStep (button.stepNumber);

    return'<button onclick=\" buildForm(' + stepPointer + ')\">' + button.buttonDescription + '</button></br>';
}

//TODO: create map of objects- key- stepNumber and value- stepInfo: stepInfo : buttonDescription

function updateNextStep (currentStep){
    stepPointer = currentStep;
}

function updateUserChoice(){
    userPath
}

function setNewStep(){

}

function stepInfo(buttonsTitle, chosenButtonDescription) {
    this.issueTitle = buttonsTitle;
    this.userChoice= chosenButtonDescription;
}

/*sayings.set("dog", "woof");
sayings.set("cat", "meow");
sayings.set("elephant", "toot");
sayings.size; // 3
sayings.get("fox"); // undefined
sayings.has("bird"); // false
sayings.delete("dog");
sayings.has("dog"); // false

for (var [key, value] of sayings) {
  console.log(key + " goes " + value);
}
// "cat goes meow"
// "elephant goes toot"

sayings.clear();
sayings.size; // 0
 */