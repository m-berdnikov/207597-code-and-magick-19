'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var SHADOW_GAP = 10;

var FULL_BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_GAP = 50;

var barX = CLOUD_X + BAR_GAP;
var barY = 230;
var maxBarWidth = FULL_BAR_HEIGHT - BAR_GAP;

var TEXT_GAP = 5;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

var getBlueColor = function () {
  return 'hsl(239, ' + Math.floor(Math.random() * 100) + '%, 50%)';
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + SHADOW_GAP, CLOUD_Y + SHADOW_GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#ffffff');
  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + (BAR_GAP >> 1), CLOUD_Y + (BAR_GAP >> 1) + (TEXT_GAP << 1));
  ctx.fillText('Список результатов:', CLOUD_X + (BAR_GAP >> 1), CLOUD_Y + BAR_GAP + (TEXT_GAP << 1));

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = '#000000';
    ctx.fillText(Math.floor(times [i]), barX + (BAR_WIDTH + BAR_GAP) * i, barY - TEXT_GAP * 2 - maxBarWidth * times[i] / maxTime);
    if (names [i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = getBlueColor();
    }
    ctx.fillRect(barX + (BAR_WIDTH + BAR_GAP) * i, barY - (maxBarWidth * times[i] / maxTime), BAR_WIDTH, maxBarWidth * times[i] / maxTime);
    ctx.fillStyle = '#000000';
    ctx.fillText(names [i], barX + (BAR_WIDTH + BAR_GAP) * i, barY + BAR_GAP / 2);
  }
};
