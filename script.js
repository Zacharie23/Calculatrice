let historique = [];
import {addition, soustraction, multiplication, division} from "./calcul.js";

document.getElementById("calculer").addEventListener("click", function() {
  let a = parseFloat(document.getElementById("nombre1").value);
  let b = parseFloat(document.getElementById("nombre2").value);
  let operation = document.getElementById("operation").value;
  let resultat;

  if (isNaN(a) || isNaN(b)) {
    resultat = "Entrez deux nombres valides.";
  } 
  else {
    if (operation === "addition") {
      resultat = addition(a, b);
    } 
    else if (operation === "soustraction") {
      resultat = soustraction(a, b);
    } 
    else if (operation === "multiplication") {
      resultat = multiplication(a, b);
    } 
    else if (operation === "division") {
      if (b === 0) {
        resultat = "Impossible de diviser par zéro.";
      } else {
        resultat = division(a, b);
      }
    }
  }

  const resultatElement = document.getElementById("resultat");
  resultatElement.textContent = "Résultat : " + resultat;

 
  if (typeof resultat === "number") {
    if (resultat > 0) {
      resultatElement.classList.add("positif");
      resultatElement.classList.remove("negatif");
    } else if (resultat < 0) {
      resultatElement.classList.add("negatif");
      resultatElement.classList.remove("positif");
    }
  }

  let texteOperation = a + " " + operation + " " + b + " = " + resultat;
  historique.push(texteOperation);

  let ligne = document.createElement("p");
  ligne.textContent = texteOperation;
  document.getElementById("historique").appendChild(ligne);
});
