let main =document.querySelector('section')
let purchased =[]
let items =JSON.parse(localStorage.getItem(('items')))

main.innerHTML=items.map(function(item,index){
   /* return `
     <div>

     <h2>${item.name}</h2>
     </div>
    <p>${item.description}</p>
    <p>${item.price}</p>
    <button data-add value='${index}'>add to cart</button>
    `
}).join('')*/

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
// Search function
// Search function
let input = document.querySelector('[data-input]');
let search = document.querySelector('[data-search]');

function searchdata() { 
    let a = items.filter(item=>{
        return item.name == input.value
    })
    if (input.value === ""){
        alert("enter items to search")
    }
    return    `
    <div class="product">
    
    img src="${a.url}" alt="shoes">
                <h2>${a.name}</h2>
                <figure>
                  <figcaption>${a.description}</figcaption>
                </figure>
                <p class="price">${a.price}</p>
                <button data-add value='${a.index}' class="add-to-cart">add to cart</button>
    
    </div>
    
    
    ` 
    ; 
    
}
search.addEventListener('click',searchdata);

let a = items.filter(item=>{
    return item.name == 'Another nike'
})


   
items.sort( (p1, p2) => {
    if (p1.price < p2.price) return -1;
    if (p1.price > p2.price) return 1;
    return 0;
  });
  
