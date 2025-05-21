// Görüntü elemanı ve değişkenleri tanımla
const display = document.getElementById("display");
let currentOperand = "";
let previousOperand = "";
let operation = undefined;

// Sayı ve nokta ekleme
function appendNumber(number) {
  if (number === '.' && currentOperand.includes('.')) return;
  currentOperand = currentOperand.toString() + number.toString();
  updateDisplay();
}

// İşlem seçimi
function chooseOperation(op) {
  if (currentOperand === "") return;
  if (previousOperand !== "") {
    compute();
  }
  operation = op;
  previousOperand = currentOperand;
  currentOperand = "";
}

// Hesaplama işlemi
function compute() {
  let computation;
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(current)) return;
  
  switch (operation) {
    case '+':
      computation = prev + current;
      break;
    case '-':
      computation = prev - current;
      break;
    case '*':
      computation = prev * current;
      break;
    case '/':
      if (current === 0) {  // Sıfıra bölme hatası kontrolü
        computation = "Error";
      } else {
        computation = prev / current;
      }
      break;
    default:
      return;
  }
  
  currentOperand = computation.toString();
  operation = undefined;
  previousOperand = "";
  updateDisplay();
}

// Ekranı temizleme
function clearDisplay() {
  currentOperand = "";
  previousOperand = "";
  operation = undefined;
  updateDisplay();
}

// Ekranı güncelleme
function updateDisplay() {
  display.value = currentOperand || "0";
}
