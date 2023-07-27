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
              <p class="currency">$</p>
              <p class="price">${element.price}</p>
        <div>
      </div>                      
    </div>
    <button class="add-to-basket-button">Add To Basket</button>  
    `;
    cardContainer.appendChild(div);
  });
}

function loadHeroImage(data) {
  let heroImageContainer = document.getElementById("hero-image");
  let div = document.createElement("div");
  div.innerHTML = `<img src="${data.image.url}">`;
  heroImageContainer.appendChild(div);
}

fetch('/data/camping-equipment.json')
  .then(res => res.json())
  .then((res) => {
    const data = res.data;
    console.log("Data:" + data);
    loadHeroImage(data);
  }).catch(function (err) {
    console.log("Error:" + err)
  });


fetch('/data/catalogue.json')
  .then(res => res.json())
  .then((res) => {
    const data = res.data.catalogue.filter(function (SpecialOffers) {
      return SpecialOffers.category == "Tools" || SpecialOffers.category == "Bag";
    });

    console.log("Data:" + data);
    appendData(data);
  }).catch(function (err) {
    console.log("Error:" + err)
  });