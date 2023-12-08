// Constructor function to create product objects
function Constructor(name, description, price, url) {
    this.description = description;
    this.price = price;
    this.name = name;
    this.url = url;
  }
  
  // Retrieve items from localStorage or create default items if none exist
  let items = JSON.parse(localStorage.getItem("items")) || [];
  if (items.length === 0) {
    // Creating sample items using the Constructor function
    let item1 = new Constructor("Another nike", "This is better than the fake", 700, "https://i.postimg.cc/507x56XK/Product-2.jpg");
    let item2 = new Constructor("Awesome shoes", "This is better than the fake", 500, "https://i.postimg.cc/prTPs7yB/product1.webp");
    // ... (other sample items)
    
    // Pushing the sample items into the items array
    items.push(item1, item2, /* ... */, item6);
    
    // Saving items to localStorage
    localStorage.setItem("items", JSON.stringify(items));
  }
  
  // Selecting the table element
  let table = document.querySelector("table");
  
  // Function to render items into table rows
  function siya(list) {
    let products = list.map(function (item, index) {
      return `
        <tr>
          <td>${index + 1}</td>
          <td class="item-name">${item.name}</td>
          <td>R ${item.price}</td>
          <td>${item.description}</td>
          <td><img src='${item.url}' width="400px" height="400px"></td>
          <td><button class="edit-btn">Edit</button></td>
          <td><button class='delete' value='${index}'>Delete</button></td>
        </tr>`;
    });
    // Inserting the rendered products into the table
    table.innerHTML = products.join("");
  }
  // Display initial items in the table
  siya(items);
  
  // Function to update items in localStorage
  function favourite() {
    localStorage.setItem("items", JSON.stringify(items));
  }
  
  // Function to remove an item from the list
  function remove(position) {
    items.splice(position, 1);
    favourite();
    siya();
  }
  
  // Event listener to handle item deletion
  table.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete")) {
      remove(event.target.value);
    }
  });
  
  // Event listener to add a new product
  let newProductSave = document.querySelector("[data-saveProduct]");
  newProductSave.addEventListener("click", function () {
    let input1 = document.querySelector("[data-input1]").value;
    let input2 = document.querySelector("[data-input2]").value;
    let input3 = document.querySelector("[data-input3]").value;
    let input4 = document.querySelector("[data-input4]").value;
    let newItem = new Constructor(input1, input2, input3, input4);
    items.push(newItem);
    localStorage.setItem("items", JSON.stringify(items));
    siya();
  });
  
  // Event listener to handle editing of item names
  const editButtons = document.querySelectorAll(".edit-btn");
  editButtons.forEach(function (button, index) {
    button.addEventListener("click", function () {
      let itemName = document.querySelectorAll(".item-name");
      let newName = prompt("New Item name?");
      if (newName !== null) {
        const isConfirmed = window.confirm("Rename Product to " + newName + "?");
        if (isConfirmed) {
          itemName[index].innerHTML = newName;
        } else {
          console.log("Submission canceled");
        }
      }
    });
  });
  
  // Comparator function to sort items by name
  function compareByName(a, b) {
    const nameA = a.name.toUpperCase(); 
    const nameB = b.name.toUpperCase(); 
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  }
  
  // Event listener for sorting items alphabetically
  let sortBtn = document.getElementById("sortByAlphabet");
  sortBtn.addEventListener("click", function() {
    const sorted = items.sort(compareByName);
    siya(sorted);
  });
  