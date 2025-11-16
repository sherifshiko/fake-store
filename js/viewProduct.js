let productId=window.location.search.slice(3);
let viewProductContent=document.getElementById("viewProductContent");

fetch(`https://fakestoreapi.com/products/${productId}`)
  .then(response => response.json())
  .then(productData => {
    let{image,description,price,title}=productData

    viewProductContent.innerHTML=`
                        <div class="col-10 m-auto">
                <div>
                    <img src="${image}" class="w-100" alt="${title}">
                </div>
                <div  class="text-center text-white">
                    <h5 class="fs-1 text-warning">
                        ${title}
                    </h5>
                    <p>
                        ${description}
                    </p>
                    <h6 class="text-success fs-1">
                        ${price} $
                    </h6>
                </div>
            </div>
    
    `

  });
