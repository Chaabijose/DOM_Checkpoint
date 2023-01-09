var buttonsPlus = Array.from(document.getElementsByClassName("add"));
// console.log(buttonsPlus);

for (let btnPlus of buttonsPlus) {
  btnPlus.addEventListener("click", function () {
    btnPlus.nextElementSibling.innerHTML++;
    somme();
  });
}

var buttonsMinus = Array.from(document.getElementsByClassName("minus"));

for (let i = 0; i < buttonsPlus.length; i++) {
  buttonsMinus[i].addEventListener("click", function () {
    if (buttonsMinus[i].previousElementSibling.innerText > 0)
      buttonsMinus[i].previousElementSibling.innerText--;
    somme();
  });
}

let buttonremove = Array.from(document.getElementsByClassName("fa-trash-alt"));
for (let rmv of buttonremove) {
  rmv.addEventListener("click", function () {
    rmv.parentNode.remove();
    somme();
  });
}

function somme() {
  let quantity = Array.from(document.getElementsByClassName("qte"));
  let prices = Array.from(document.getElementsByClassName("price"));
  let sum = 0;

  for (let i = 0; i < prices.length; i++) {
    sum += quantity[i].innerHTML * prices[i].innerHTML;
  }
  return (document.getElementById("totalp").innerHTML =
    "Shooping Bag Total : $" + sum);
}

let hearts = Array.from(document.getElementsByClassName("fa-heart"));
for (let i = 0; i < hearts.length; i++) {
  hearts[i].addEventListener("click", function () {
    if (hearts[i].style.color == "red") {
      hearts[i].style.color = "gray";
    } else {
      hearts[i].style.color = "red";
    }
  });
}
