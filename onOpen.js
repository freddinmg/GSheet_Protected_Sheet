//Just here to give you a quick way to make your sheet. You can still run the functions themselves from the script menu.
function onOpen() {
ui.createMenu('Quick Page Templates')
      .addItem('Create sheet with full editing protection', 'setRegularWarning')
      .addItem('Create edit-protected sheet with warning cell', 'setCustomWarning')
      .addItem('Convert sheet to custom warnings','changeToCustomWarning')
      .addToUi();
}
