let fields = document.querySelectorAll(".grid-item");
let restartBtn = document.getElementById("restart");

let winningPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [2, 5, 8],
  [6, 7, 8],
  [3, 4, 5],
  [1, 4, 7],
  [0, 4, 8],
  [2, 4, 6],
];

let xTurn = true;
let count = 0;


const disableButtons = () => {
  fields.forEach((field) =>
   (field.disabled = true));
};


const enableButtons = () => {
  fields.forEach((field) => {
    field.innerText = "";
    field.disabled = false;
  });
};


const winFunction = (letter) => {
  disableButtons();
  if (letter == "X") {
    alert('X Wins!');
    location.reload()

  } else {
    alert('O Wins!');
    location.reload()
  }
};


const drawFunction = () => {
  disableButtons();
  alert('It is a draw!');
  location.reload()
};


restartBtn.addEventListener("click", () => {
  count = 0;
  enableButtons();
});

const winChecker = () => {
  for (let i of winningPattern) {
    let [field1, field2, field3] = [
      fields[i[0]].innerText,
      fields[i[1]].innerText,
      fields[i[2]].innerText,
    ];


    if (field1 != "" && (field2 != "") & (field3 != "")) {
      if (field1 == field2 && field2 == field3) {

        winFunction(field1);
      }
    }
  }
};



fields.forEach((field) => {
  field.addEventListener("click", () => {

    if(field.innerText != "") {
      return;
    }

    if (xTurn) {
      xTurn = false;
      
      field.innerText = "X";
      field.disabled = true;
    } else {
      xTurn = true;

      field.innerText = "O";
      field.disabled = true;
    }

    count += 1;
    if (count == 9) {
      drawFunction();
    }

    winChecker();
  });
});