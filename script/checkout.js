purchased =JSON.parse(localStorage.getItem('purchased'))
let table = document.querySelector('.main')
table.innerHTML=purchased.map((item,index)=>{
    return `
    <tr>
    <td>${index+1}</td>
    <td>${item.name}</td>
    <td>${item.description}</td>
    <td><input type="number" id="quantity" name="quantity"></input></td>
    <td>${item.price}</td>
    <td><button class='delete'>Delete</button></td>
    </tr>
      
    `
}).join('')

function addToCart(items){
purchased.push(items[index])
localStorage.setItem('items',JSON.stringify(items))
}

let addCartBtn=document.querySelector('[data-add]')
addCartBtn.addEventListener('click',function(){
    if(event.target.hasAttribute('data-add')){
        //alert('button pressed')
        add(event.target.value)
    }
    
})
// Uniquevalues()
// function Uniquevalues(purchased) {
//     return purchased.filter((item,
//       index) => purchased.indexOf(item.name) === index);
// }

function remove(position){
    purchased.splice(position,1)
    favourite()
    siya()
}


let deletebtn=document.querySelector('.delete') 
table.addEventListener('click',function(){
if(event.target.classList.contains('delete')){
remove(event.target.value)
}
})