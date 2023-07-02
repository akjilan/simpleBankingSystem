//for gettting data from input field:
function getInputFieldValueById (inputid){
    let inputField = document.getElementById(inputid);
    let inputFieldString = inputField.value;
    if(inputFieldString==''){
        alert('please give a number . its empty .');
        return false;
    }
    else{
        let inputFieldValue = parseFloat(inputFieldString);
        inputField.value = '';
        return inputFieldValue;
    }

}
//for gettting data from text:
function getTextValueById (textId){
    let textString = document.getElementById(textId).innerText;
    let textNumber = parseFloat(textString);
    return textNumber;
}
//setting addition in text
function setUpdatedValue (sourceID,addingValue){
    let textString = document.getElementById(sourceID);
    textString.innerText = addingValue;    
}


