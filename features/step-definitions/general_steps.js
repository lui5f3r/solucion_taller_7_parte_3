var {Given} = require('cucumber');
var {When} = require('cucumber');
var {Then} = require('cucumber');
var {expect} = require('chai');


Given('I go to habitica home screen', () => {
  browser.url('/');
});

Given('I am a user logged in habitica website' , () => {
  if($('a=Tasks').isDisplayed()){
    $('a=Tasks').click();
    browser.pause(5000);
  }
  else{
    browser.url('/');
    $('a=Login').waitForExist(20000);
    $('a=Login').waitForDisplayed(20000);
    $('a=Login').click();
    var userInput = $('#usernameInput');
    userInput.click();
    userInput.keys('pa_test');

    var passwordInput = $('#passwordInput');
    passwordInput.click();
    passwordInput.keys('fake@email.com')

    $('button[type="submit"').click();
    $('a=Tasks').waitForExist(20000)
  }
});

When('I go to tasks side', () => {
  $('a=Tasks').click();
  browser.pause(3000);
});

 When('I save the changes', () => {
  $('div=Save').click();
 });

  When('I delete the ticket', () => {
  $('.delete-text').click();
  browser.pause(1000);
 });

  Then('I expect to see ticket alert with {string}', (message) => {
    if (browser.isAlertOpen()){
      var alertText = browser.getAlertText();
      expect(alertText).to.include(message);
      browser.acceptAlert();
      browser.pause(2000);
    }
  });