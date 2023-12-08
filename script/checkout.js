// Retrieve purchased items from local storage
let purchased = JSON.parse(localStorage.getItem("purchased"));
let table = document.querySelector(".main");

// Display purchased items in a table
table.innerHTML = purchased
  .map((item, index) => {
    return `
        <tr>
            <td>${index + 1}</td>
            <td>${item.name}</td>
            <td>${item.description}</td>
            <td><input type="number" id="quantity" name="quantity"></input></td>
            <td class="item-price">${item.price}</td>
            <td><button class='delete' value='${index}'>Delete</button></td>
        </tr>
    `;
  })
  .join("");

// Retrieve quantity inputs
var quantityInputs = document.querySelectorAll("#quantity");

// Function to add items to cart
function addToCart(items) {
  purchased.push(items[index]);
  localStorage.setItem("items", JSON.stringify(items));
}

// Function to update local storage with favorite items
function favourite() {
  localStorage.setItem("purchased", JSON.stringify(purchased));
  purchased = JSON.parse(localStorage.getItem("purchased"));
}

// Function to remove item from purchased and update display
function remove(position) {
  purchased.splice(position, 1);
  favourite();
  // Update the displayed table after removing an item
  table.innerHTML = purchased
    .map((item, index) => {
      return `
        <tr>
            <td>${index + 1}</td>
            <td>${item.name}</td>
            <td>${item.description}</td>
            <td><input type="number" id="quantity" name="quantity"></input></td>
            <td>${item.price}</td>
            <td><button class='delete' value='${index}'>Delete</button></td>
        </tr>
    `;
    })
    .join("");
}

// Initialize favorite items
favourite();

let deletebutton = document.querySelector(".delete");
table.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete")) {
    remove(event.target.value);
  }
});

// Function to calculate total amount
let totalAmount = document.getElementById("#total");
function calculateTotal() {
  let totalPrice = purchased.reduce((selectedItems, reduceItems) => {
    return selectedItems + reduceItems.price;
  }, 0);
  totalAmount = document.write(totalPrice);
}

// Calculate total amount
calculateTotal();

// Event listener for quantity input changes
quantityInputs.forEach(function (input, index) {
  input.addEventListener("input", function () {
    let itemPrice = document.querySelectorAll(".item-price");
    const amount = itemPrice[index].innerHTML;
    const initialPrice = Number(itemPrice[index].innerHTML);
    const inputPrice = Number(input.value);
    let quantity = initialPrice * inputPrice;

    if (!input.value) {
      itemPrice[index].innerHTML = amount;
    } else {
      itemPrice[index].innerHTML = quantity;
    }
  });
});
let message=document.getElementById('purChaseP');
message.addEventListener('click',function(){
    alert('Thanks for Support')
})


if (purchased.length == 0) {
    table.innerHTML = `<div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    <div class="spinner-grow" style="width: 3rem; height: 3rem;" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>`;
  } else {
    // Display products if the array length is not empty
    table.innerHTML = purchased
    .map((item, index) => {
      return `
        <tr>
            <td>${index + 1}</td>
            <td>${item.name}</td>
            <td>${item.description}</td>
            <td><input type="number" id="quantity" name="quantity"></input></td>
            <td>${item.price}</td>
            <td><button class='delete' value='${index}'>Delete</button></td>
        </tr>
    `;
    })
    .join("");
}
  
  