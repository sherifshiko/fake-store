let homeContent = document.getElementById("homeContent");
let selectedCard = [];

fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(products => {
    let htmlCollection = ``;
    for (let product of products) {
      let { image, title, id, price, description } = product
      htmlCollection += `
                        <div class="col-md-3">
                <div>
                    <img src="${image}" alt="${title}" class="image-card">
                </div>
                <div  class="bg-white text-center rounded-3">
                    <h5>
                        ${title.slice(0, 30)}
                    </h5>
                    <p>
                        ${description.slice(0, 50)}
                    </p>
                    <h6 class="text-success">
                        ${price} $
                    </h6>
                    <div class="d-flex justify-content-between p-1">
                        <a href="" class="text-decoration-none btn btn-primary">View product</a>
                        <button href="#" data-id=${id} class="text-decoration-none btn btn-warning addBtns">add product to card</button>
                    </div>
                </div>
            </div>
        
        `
      homeContent.innerHTML = htmlCollection
      let addBtns = document.querySelectorAll(".addBtns");
      for (let addBtn of addBtns) {
        addBtn.addEventListener('click', (e) => {
          let productId = e.target.dataset.id
          selectedCard.push(productId)
          sessionStorage.setItem('numberCard', JSON.stringify(selectedCard))
          console.log(selectedCard.length);
          
          let numbersCards = document.getElementById("numbersCards");
          numbersCards.innerText = selectedCard.length


        })
      }
    }


  });
