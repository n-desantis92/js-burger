var calcolatore = document.getElementById('calculate');
var burger = document.getElementById('input-burger-name');
var ingredienti = document.getElementsByClassName('add-ingredient');
var coupons = ["a","b","c","vip"];
var coupon = document.getElementById('coupon');
var totale = document.getElementById('total');
// evento al click del bottone
calcolatore.addEventListener("click",
  function () {
    // controllo se viene inserito il nome del burger
    if (burger.value != "") {
      console.log(burger);
      // controllo gli ingredienti
      var somma = 50;
      for (var i = 0; i < ingredienti.length; i++) {
        // se la checkbox è spuntata allora verrà sommata
        console.log(ingredienti[i].checked);
        if (ingredienti[i].checked == true) {
          // trasformo il value da stringa ad intero e lo sommo
          somma += parseInt(ingredienti[i].value);
        }
      }
      // ora applico lo sconto
      if (coupons.includes(coupon.value)) {
        somma -= somma * 0.2;
      }
      totale.innerHTML = somma.toFixed(2) + "€";
    } else {
      alert("inserisci il panino");
    }
  }

);
