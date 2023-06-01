// Create a Pixi.js application
const app = new PIXI.Application({ width: 400, height: 200 });
document.body.appendChild(app.view);

// Create an array to store binary digits
const binaryDigits = [0, 0, 0, 0, 0, 0, 0, 0];

// Create a function to update the decimal representation
function updateDecimal() {
  const decimal = parseInt(binaryDigits.join(''), 2);
  document.getElementById('decimal').textContent = `Decimal: ${decimal}`;
}

// Create eight clickable zeroes
for (let i = 0; i < 8; i++) {
  const digit = new PIXI.Text('0', { fontSize: 32 });
  digit.x = 40 * i + 20;
  digit.y = 100;
  digit.interactive = true;
  digit.buttonMode = true;
  digit.on('pointerdown', () => {
    binaryDigits[i] = binaryDigits[i] === 0 ? 1 : 0;
    digit.text = binaryDigits[i].toString();
    updateDecimal();
  });
  app.stage.addChild(digit);
}

// Create a text element to display the decimal representation
const decimalText = new PIXI.Text('Decimal: 0', { fontSize: 24 });
decimalText.x = 40;
decimalText.y = 150;
app.stage.addChild(decimalText);
