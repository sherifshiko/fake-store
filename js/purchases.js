let storedCard = JSON.parse(sessionStorage.getItem('numberCard'));
let numbersCards=document.getElementById("numbersCards");
numbersCards.innerText=storedCard.length

for (let element of storedCard) {

    fetch(`https://fakestoreapi.com/products/${element}`)
        .then(response => response.json())
        .then(data => console.log(data));
}