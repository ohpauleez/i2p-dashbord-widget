// This file was generated by Dashcode from Apple Inc.
// DO NOT EDIT - This file is maintained automatically by Dashcode.
function setupParts() {
    if (setupParts.called) return;
    setupParts.called = true;
    CreateButton('main_button', { text: 'Start', onclick: 'launchI2P', rightImageWidth: 5, leftImageWidth: 5 });
    CreateText('text', { text: 'I2P' });
}
window.addEventListener('load', setupParts, false);
