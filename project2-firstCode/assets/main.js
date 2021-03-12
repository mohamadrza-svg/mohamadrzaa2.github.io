document
  .querySelector(".Number-Box")
  .addEventListener("click", function (EventAction) {
    if (isNaN(EventAction.target.innerText)) {
      OperatorSelect(EventAction);
    } else {
      NumberSelect(EventAction);
    }
  });

let ResultValue1 = [];
let ResultValue2 = [];
let ResultOutput;

let ResultNumber = document.querySelector(".Result-Number");

function NumberSelect(EventAction) {
  console.log("number clicked");

  if (ResultValue1.length === 0) {
    if (EventAction.target.innerText === "0") {
      EventAction.preventDefault();
    } else {
      ResultValue1.push(parseInt(EventAction.target.innerText));
      ResultNumber.innerText = ResultValue1.join("");
      ResultOutput = parseInt(ResultValue1.join(""));
      console.log(ResultOutput);
    }
  } else {
    ResultValue1.push(parseInt(EventAction.target.innerText));
    ResultNumber.innerText = ResultValue1.join("");
    ResultOutput = parseInt(ResultValue1.join(""));
    console.log(ResultOutput);
  }
}

function OperatorSelect(EventAction) {
  console.log("NaN Clicked");
  let OperatorSignSelect = EventAction.target.innerText;
  switch (OperatorSignSelect) {
    case "C":
      ResultValue1 = [];
      ResultValue2 = [];
      ResultNumber.innerText = "0";
      break;
    case "←":
      if (ResultNumber.innerText === "0") {
      } else {
        if (ResultValue1.length === 1) {
          ResultNumber.innerText = "0";
          ResultValue1 = [];
        } else {
          ResultValue1 = ResultValue1.slice(0, -1);
          ResultNumber.innerText = ResultNumber.innerText.slice(0, -1);
        }
      }
      break;
    case "+":
      Math_Sum();
      break;
    case "-":
      Math_Minus();
      break;
    case "×":
      Math_Multiplication();
      break;
    case "÷":
      Math_Division();
      break;
    case "=":
      console.log("Equal Clicked");
  }
}

// function Math_GetNumber() {
//   if (ResultNumber.innerText === "0") {
//     ResultValue1 = [0];
//     ResultOutput = parseInt(ResultValue1.join(""));
//     ResultValue1 = [];
//     ResultNumber.innerText = "0";
//     console.log(ResultOutput);
//   } else {
//     ResultOutput = parseInt(ResultValue1.join(""));
//     ResultValue1 = [];
//     ResultNumber.innerText = "0";
//     console.log(ResultOutput);
//   }
// }

function Math_Sum() {
  // Math_GetNumber();
  console.log("+ Clicked");
}

function Math_Minus() {
  // Math_GetNumber();
  console.log("- Clicked");
}

function Math_Multiplication() {
  // Math_GetNumber();
  console.log("× Clicked");
}

function Math_Division() {
  // Math_GetNumber();
  console.log("÷ Clicked");
}
