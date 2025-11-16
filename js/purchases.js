let storedCard = JSON.parse(sessionStorage.getItem('numberCard'));
let numbersCards=document.getElementById("numbersCards");
let purchasesContant=document.getElementById("purchasesContant");
let totalPrice=0;
numbersCards.innerText=storedCard.length

for (let element of storedCard) {    
    fetch(`https://fakestoreapi.com/products/${element}`)
        .then(response => response.json())
        .then(product => {
            totalPrice += product.price
            let{description,image,title,price}=product
            purchasesContant.insertAdjacentHTML('beforeend',`

                                <div class="col-10">
                <div class="d-flex justify-content-between border border-3 border-light p-5">
                    <div>
                        <img src="${image}" class="w-100" alt="${title}">
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
                            <i class="fa-regular fa-trash-can"></i>
                        </h4>
                    </div>
                </div>
            </div>
                `)

                purchasesContant.insertAdjacentHTML('beforeend',`
                                <div class="col-2 position-relative">
                <div class="text-white text-center position-fixed check ">
                    <h2>The check</h2>
                    <h3 class="my-5">Total</h3>
                    <h4 class="text-success my-5 fs-1">${totalPrice}</h4>
                    <h5 >
                        <span class="btn btn-warning my-3">Cash payment</span>
                        <span class="btn btn-success">Cash on delivery</span>
                    </h5>
                </div>

            </div>              
                    
                    `)

        });

}



