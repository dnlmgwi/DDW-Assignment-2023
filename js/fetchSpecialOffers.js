function appendData(data) {
  let cardContainer = document.getElementById("product-list");
  data.forEach(element => {
    let div = document.createElement("div");
    div.innerHTML = `
    <div id="${element.id}" class="card">
      <div class="product-box">
        <img src="${element.imageUrl}">
      </div>
      <div class="card-text">
        <p class="product-name">${element.productName}</p>
      </div>
      <div class="price-tag">
        <div class="price-text">
              <p class="currency">MK</p>
              <p class="price">${element.price}</p>
        <div>
      </div>                     
    </div>
    <button id="${element.id}" class="add-to-basket-button">Add To Basket</button>  
    `;
    cardContainer.appendChild(div);
  });
}



fetch('/data/catalogue.json')
  .then(res => res.json())
  .then((res) => {
    const data = res.data.catalogue.filter(function (SpecialOffers) {
      return SpecialOffers.category == "Chair" || SpecialOffers.category == "Cooker" || SpecialOffers.category == "Tent";
    });

    console.log("Data:" + data);
    appendData(data);
  }).catch(function (err) {
    console.log("Error:" + err)
  });