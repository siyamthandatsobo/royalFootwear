//constructor function
function Constructor(name, description, price, url) {
    //function to  create objects
    (this.description = description),
      (this.price = price),
      (this.name = name),
      (this.url = url);
  }
  
  let items = JSON.parse(localStorage.getItem("items")) || [];
  if (items.length === 0) {
    //second item created using constructor
    let item1 = new Constructor(
      "Another nike",
      "This is better than the fake",
      700,
      "https://i.postimg.cc/507x56XK/Product-2.jpg"
    );
    let item2 = new Constructor(
      "Awesome shoes",
      "This is better than the fake",
      500,
      "https://i.postimg.cc/prTPs7yB/product1.webp"
    );
    let item3 = new Constructor(
      "Amazing",
      "This is better than the fake",
      200,
      "https://i.postimg.cc/MTHLN8bX/Product-3.webp"
    );
    let item4 = new Constructor(
      "siya",
      "This is better than the fake",
      900,
      "https://i.postimg.cc/XJyvWtn7/product-4.jpg"
    );
    let item5 = new Constructor(
      "Another nike",
      "This is better than the fake",
      1500,
      "https://i.postimg.cc/sDL0Q8zR/product-5.webp"
    );
    let item6 = new Constructor(
      "Another nike",
      "This is better than the fake",
      3000,
      "https://i.postimg.cc/QMdSdGYD/product6.jpg"
    );
    //this an empty array where all products will be stored
    items.push(item1, item2, item3, item4, item5, item6); //pushing items into array,can add more items
    //blue items is the name of the array ,items you use to refer to it
    //sets the array from local
    localStorage.setItem("items", JSON.stringify(items));
  }
  //use queryselctor to select item
  //use mapmethod to write info
  let table = document.querySelector("table");
  
  function siya(list) {
    let products = list.map(function (item, index) {
      //use a parameter name you parsed to get value and dot notation
      console.log(item);
      console.log(index);
      return `
              <tr>
              <td>${index + 1}</td>
              <td class="item-name">${item.name}</td>
              <td>R ${item.price}</td>
              <td>${item.description}</td>
              <td><img src='${item.url}' width="400px" height="400px"></td>
              <td>
                <button class="edit-btn">
                  Edit
                </button>
              </td>
              <td><button class='delete' value='${index}'>Delete</button></td>
              </tr>
              `;
    });
    table.innerHTML = products.join("");
  }
  siya(items);
  
  function favourite() {
    localStorage.setItem("items", JSON.stringify(items)); //blue items is the name of the array ,items you use to refer to it
    //sets the array from local
    items = JSON.parse(localStorage.getItem("items"));
  }
  function remove(position) {
    items.splice(position, 1);
    favourite();
    siya();
  }
  
  let deletebutton = document.querySelector(".delete");
  table.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete")) {
      remove(event.target.value);
    }
  });
  
  // let input1=document.querySelector('[data-input1]').value;
  // let input2=document.querySelector('[data-input2]').value;
  // let input3=document.querySelector('[data-input3]').value;
  // let input4=document.querySelector('[data-input4]').value;
  // let newItem=new Constructor(input1,input2,input3,input4)
  // items.push(newItem)
  
  let newProductSave = document.querySelector("[data-saveProduct]");
  
  newProductSave.addEventListener("click", function () {
    let input1 = document.querySelector("[data-input1]").value;
    let input2 = document.querySelector("[data-input2]").value;
    let input3 = document.querySelector("[data-input3]").value;
    let input4 = document.querySelector("[data-input4]").value;
    let newItem = new Constructor(input1, input2, input3, input4);
    items.push(newItem);
    localStorage.setItem("items", JSON.stringify(items));
    // favourite()
    siya();
  });
  
  var editButtons = document.querySelectorAll(".edit-btn");
  
  editButtons.forEach(function (button, index) {
    button.addEventListener("click", function (e) {
      let itemName = document.querySelectorAll(".item-name");
      console.log(itemName[index].innerHTML);
      let newName = prompt("New Item name?");
      if (newName !== null) {
        var isConfirmed = window.confirm("Rename Product to " + newName + "?");
        if (isConfirmed) {
          itemName[index].innerHTML = newName;
        } else {
          console.log("Submission canceled");
        }
      }
    });
  });
  
  function compareByName(a, b) {
    const nameA = a.name.toUpperCase(); // ignore case
    const nameB = b.name.toUpperCase(); // ignore case
  
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  }
  
  const sortBtn = document.getElementById("sortByAlphabet");
  sortBtn.addEventListener("click", () => {
    const sorted = items.sort(compareByName);
    // console.log(sorted);
    siya(sorted);
  });
  