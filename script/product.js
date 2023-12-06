let main =document.querySelector('section')
let purchased =[]
let items =JSON.parse(localStorage.getItem(('items')))
//Display items that i got from local storage 
main.innerHTML=items.map(function(item,index){
  
       return `    
        <div class="product">
                <img src="${item.url}" alt="shoes">
                <h2>${item.name}</h2>
                <figure>
                  <figcaption>${item.description}</figcaption>
                </figure>
                <p class="price">${item.price}</p>
                <button data-add value='${index}' class="add-to-cart">add to cart</button>
                
            </div>`
        }).join('')


function add(index){
    purchased.push(items[index])
    localStorage.setItem('purchased',JSON.stringify(purchased))
}

main.addEventListener('click',function(){
    if(event.target.hasAttribute('data-add')){
        //alert('button pressed')
        add(event.target.value)
    }
})
//search
// Search function targets button and input and if item not found it will display a message
// Search function
let input = document.querySelector('[data-input]');
let search = document.querySelector('[data-search]');

function searchdata(event) { 
    event.preventDefault()
    let filteredItems = items.filter(item =>
        item.name.includes(input.value));

    if (filteredItems.length === 0) {
        alert('Item not available');
    } else {
        main.innerHTML = filteredItems.map(function(item, index) {
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
        }).join('');
    }
} 

search.addEventListener('click', searchdata);
//sort by price
function sortList() {
    if (items) {
        items.sort((a, b) => {
            const nameA = a.price;
            const nameB = b.price;
            if (nameA < nameB) return -1;
            if (nameA > nameB) return 1;
            return 0;
        });

        main.innerHTML = items.map(function(item, index) {
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
        }).join('');
    }
}

let sortbtn = document.querySelector('#sortByPrice');
sortbtn.addEventListener('click', sortList);

if(items.length==0){
    main.innerHTML=`<div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-grow" style="width: 3rem; height: 3rem;" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>`
}else{
    main.innerHTML = items.map(function(item, index) {
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
    }).join('');
}
