'use strict';

var WIZARD_FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var WIZARDS_NUMBERS = 4;

var wizards = [];

var setupBlock = document.querySelector('.setup');
var setupSimilarBlock = document.querySelector('.setup-similar');
var setupSimilarList = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content.querySelector('.setup-similar-item');

function getRandomIndex(min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}

function randomName() {
  var firstNameMaxIndex = WIZARD_FIRST_NAMES.length;
  var secondNameMaxIndex = WIZARD_SECOND_NAMES.length;
  return WIZARD_FIRST_NAMES[getRandomIndex(0, firstNameMaxIndex - 1)] + ' ' + WIZARD_SECOND_NAMES[getRandomIndex(0, secondNameMaxIndex - 1)];
}

function randomCoatColor() {
  var coatColorMaxIndex = COAT_COLORS.length;
  return COAT_COLORS[getRandomIndex(0, coatColorMaxIndex - 1)];
}

function randomEyesColor() {
  var eyesColorMaxIndex = EYES_COLORS.length;
  return EYES_COLORS[getRandomIndex(0, eyesColorMaxIndex - 1)];
}


function createWizards(x) {
  for (var i = 0, wizardsInfo = []; i < x; i++) {
    wizardsInfo.push({
      name: randomName(),
      coatColor: randomCoatColor(),
      eyeColor: randomEyesColor()
    });
  }
  return wizardsInfo;
}


function renderWizard(wizard) {
  var wizardItem = similarWizardTemplate.cloneNode(true);
  var wizardName = wizardItem.querySelector('.setup-similar-label');
  var wizardCoatColor = wizardItem.querySelector('.wizard-coat');
  var wizardEyesColor = wizardItem.querySelector('.wizard-eyes');

  wizardName.textContent = wizard.name;
  wizardCoatColor.style.fill = wizard.coatColor;
  wizardEyesColor.style.fill = wizard.eyeColor;

  return wizardItem;
}

wizards = createWizards(WIZARDS_NUMBERS);

setupBlock.classList.remove('hidden');
setupSimilarBlock.classList.remove('hidden');

var fragment = document.createDocumentFragment();

for (var i = 0; i < WIZARDS_NUMBERS; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

setupSimilarList.appendChild(fragment);


