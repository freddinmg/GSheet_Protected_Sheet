/* @OnlyCurrentDoc */
var SS = SpreadsheetApp.getActiveSpreadsheet();
var ss = SS.getSheets()[0];
var sheet = SS.getSheetByName("Sheet1");
var ui = SpreadsheetApp.getUi();
var allSheetNum1 = SS.getSheets().length;
var allSheetNum2 = SS.getSheets().length;
var allSheetNum3 = SS.getSheets().length;
let count1 = 0; 
let count2 = 0;
let count3 = 0;
let protected1 = "ProtectedSheetA";
let protected2 = "ProtectedSheetB";

//Helper functions:
//------------------------

function getAllSheetNames(){
  return SpreadsheetApp.getActiveSpreadsheet().getSheets().map(x => x.getName());
}

var sheetNames = getAllSheetNames();

function parseNumbersFromArray(arr1) {
  const result = [];

  for (const item of arr1) {
    if (typeof item === 'string') {
      const matches = item.match(/-?\d+(\.\d+)?/g); 
      if (matches) {
        result.push(...matches.map(Number));
      }
    } else if (typeof item === 'number') {
      result.push(item);
    }
  }
  return result;
}


function createCounter(count) { 
  count; 
  return function increment() { 
    ++count; 
    return count; 
  } 
}

let counter1 = createCounter(count1);
let counter2 = createCounter(count2);
let counter3 = createCounter(count3);
