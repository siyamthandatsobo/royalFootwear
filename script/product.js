let main = document.querySelector("section");
let purchased = [];
let items = JSON.parse(localStorage.getItem("items"));

// Display items retrieved from local storage
main.innerHTML = items
  .map(function (item, index) {
    return `    
        <div class="product">
            <img src="${item.url}" alt="shoes">
            <h2>${item.name}</h2>
            <figure>
                <figcaption>${item.description}</figcaption>
            </figure>
            <p class="price">${item.price}</p>
            <button data-add value='${index}' class="add-to-cart">add to cart</button>
        </div>`;
  })
  .join("");

// Function to add selected item to the cart
function add(index) {
  if (!purchased.includes(items[index])) {
    purchased.push(items[index]);
  }
  localStorage.setItem("purchased", JSON.stringify(purchased));
}

// Event listener for adding items to the cart
main.addEventListener("click", function (event) {
  if (event.target.hasAttribute("data-add")) {
    add(event.target.value);
  }
});

// Search function
let input = document.querySelector("[data-input]");
let search = document.querySelector("[data-search]");

function searchdata(event) {
  event.preventDefault();
  let filteredItems = items.filter((item) => item.name.includes(input.value));

  if (filteredItems.length === 0) {
    alert("Item not available");
  } else {
    main.innerHTML = filteredItems
      .map(function (item, index) {
        return `    
            <div class="product">
                <img src="${item.url}" alt="shoes">
                <h2>${item.name}</h2>
                <figure>
                    <figcaption>${item.description}</figcaption>
                </figure>
                <p class="price">R${item.price}</p>
                <button data-add value='${index}' class="add-to-cart">add to cart</button>
            </div>`;
      })
      .join("");
  }
}

search.addEventListener("click", searchdata);

try {
  input.toUpperCase();
}
catch(err) {
  document.getElementById("errorHandle").innerHTML = err.name;
}





// Function to sort items by price
function sortList() {
  if (items) {
    items.sort((a, b) => {
      const priceA = a.price;
      const priceB = b.price;
      if (priceA < priceB) return -1;
      if (priceA > priceB) return 1;
      return 0;
    });

    main.innerHTML = items
      .map(function (item, index) {
        return `
            <div class="product">
                <img src="${item.url}" alt="shoes">
                <h2>${item.name}</h2>
                <figure>
                    <figcaption>${item.description}</figcaption>
                </figure>
                <p class="price">R${item.price}</p>
                <button data-add value='${index}' class="add-to-cart">add to cart</button>
            </div>`;
      })
      .join("");
  }
}

// Event listener for sorting by price
let sortbtn = document.querySelector("#sortByPrice");
sortbtn.addEventListener("click", sortList);

// Display loading spinner if the items array is empty, otherwise display the products
if (items.length == 0) {
  main.innerHTML = `<div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-grow" style="width: 3rem; height: 3rem;" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>`;
} else {
  // Display products if the array length is not empty
  main.innerHTML = items
    .map(function (item, index) {
      return `
        <div class="product">
            <img src="${item.url}" alt="shoes">
            <h2>${item.name}</h2>
            <figure>
                <figcaption>${item.description}</figcaption>
            </figure>
            <p class="price">R${item.price}</p>
            <button data-add value='${index}' class="add-to-cart">add to cart</button>
        </div>`;
    })
    .join("");
}
