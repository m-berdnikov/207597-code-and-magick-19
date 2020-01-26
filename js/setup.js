'use strict';

var setupBlock = document.querySelector('.setup');
var setupSimilarBlock = document.querySelector('.setup-similar');
var setupSimilarList = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content.querySelector('.setup-similar-item');

var WIZARD_FIRST_NAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SECOND_NAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var WIZARDS_NUMBER = 4;

var wizards = [];

var randomIndex = function (min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
};

var randomName = function () {
  var firstNameMaxIndex = WIZARD_FIRST_NAME.length;
  var secondNameMaxIndex = WIZARD_SECOND_NAME.length;
  return WIZARD_FIRST_NAME[randomIndex(0, firstNameMaxIndex - 1)] + ' ' + WIZARD_SECOND_NAME[randomIndex(0, secondNameMaxIndex - 1)];
};

var randomCoatColor = function () {
  var coatColorMaxIndex = COAT_COLOR.length;
  return COAT_COLOR[randomIndex(0, coatColorMaxIndex - 1)];
};

var randomEyesColor = function () {
  var eyesColorMaxIndex = EYES_COLOR.length;
  return EYES_COLOR[randomIndex(0, eyesColorMaxIndex - 1)];
};


var createWizardsArr = function (x) {
  for (var i = 0, arr = []; i < x; i++) {
    arr.push({
      name: randomName(),
      coatColor: randomCoatColor(),
      eyeColor: randomEyesColor()
    });
  }
  return arr;
};

wizards = createWizardsArr(WIZARDS_NUMBER);

setupBlock.classList.remove('hidden');
setupSimilarBlock.classList.remove('hidden');

for (var i = 0; i < WIZARDS_NUMBER; i++) {
  var wizardItem = similarWizardTemplate.cloneNode(true);
  var wizardName = wizardItem.querySelector('.setup-similar-label');
  var wizardCoatColor = wizardItem.querySelector('.wizard-coat');
  var wizardEyesColor = wizardItem.querySelector('.wizard-eyes');

  wizardName.textContent = wizards[i].name;
  wizardCoatColor.style.fill = wizards[i].coatColor;
  wizardEyesColor.style.fill = wizards[i].eyeColor;
  setupSimilarList.appendChild(wizardItem);
}


