let storedCard = JSON.parse(sessionStorage.getItem('numberCard'));
let numbersCards = document.getElementById("numbersCards");
let purchasesContant = document.getElementById("purchasesContant");
let totalPrice = 0;
let index = -1;
numbersCards.innerText = storedCard.length


function creatCards() {
    let htmlCollection = ``;
    for (let product of storedCard) {
        totalPrice += product.price
        let { description, image, title, price, id } = product
        htmlCollection += `
                <div class="col-3">
                <div class="d-flex flex-column justify-content-between text-center border border-3 border-light p-5">
                    <div>
                        <img src="${image}" class="w-50" alt="${title}">
                    </div>
                    <div class="text-white text-center">
                        <h2>
                            ${title}
                        </h2>
                        <p class="my-5">
                            ${description}
                        </p>
                        <h3 class="fs-1 my-5 text-success">
                            ${price}$
                        </h3>
                        <h4 class="text-danger">
                            <button class="btn btn-danger" onclick="dleteCardFromList(${id})"><i class="fa-regular fa-trash-can"></i></button>
                        </h4>
                    </div>
                </div>
         </div>
        
        `
        purchasesContant.innerHTML = htmlCollection

    }

}
creatCards()


purchasesContant.insertAdjacentHTML('beforeend', `
                                <div class="col-2 position-relative">
                <div class=" text-center position-fixed check ">
                    <h2>The check</h2>
                    <h3 class="my-5">Total</h3>
                    <h4 class="text-info my-5 fs-1">${totalPrice} $</h4>
                    <h5 >
                        <span class="btn btn-warning my-3">Cash payment</span>
                        <span class="btn btn-success">Cash on delivery</span>
                    </h5>
                </div>

            </div>              
                    
                    `)






function dleteCardFromList(id) {
    console.log(storedCard);

    storedCard.splice(id-1, 1);
    console.log(storedCard);
    
    creatCards();

}







