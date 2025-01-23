//Currently, getActiveSheet() doesn't work right; it just names the spreadsheet previous to the new one.

//Needed just in case; I'm working on making a dialog open that'll pop up every time you want a new sheet, but a menu is the best I can do so far.
function makeRegularSheet() {
  var newSheetName = "Sheet"+allSheetNum1;
  console.log(counter1(count1));
  var newSheet = SS.insertSheet();
  newSheet.setName(newSheetName);  
}

function setRegularWarning() {
  var newSheetName = protected1+allSheetNum2;
  var newSheetName = protected1+allSheetNum2;
  var newSheet = SS.insertSheet();
  console.log(counter1(count2));
  newSheet.setName(newSheetName);
  SS.getSheetByName(newSheetName).protect();
}

//This one was created for making an "IMPORTRANGE" formula that starts at A1. This is just so you don't accidentally delete the "IMPORTRANGE" formula when being careless.
function setCustomWarning() {
  var newSheetName = protected2+allSheetNum3; 
  var newSheetName = protected2+allSheetNum3;
  var newSheet = SS.insertSheet();
  console.log(counter1(count3));
  newSheet.setName(newSheetName);
  SS.getSheetByName(newSheetName).protect();
  var warnedRange = SS.getSheetByName(newSheetName).getRange("A1");
  warnedRange.protect().setWarningOnly(true);
}

//Nothing's stopping you from making a template yourself!
