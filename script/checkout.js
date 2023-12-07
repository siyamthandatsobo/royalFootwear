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
        <td><button class='delete' value='${index}'>Delete</button></td>
        </tr>
        
        `
    }).join('')



function addToCart(items){
purchased.push(items[index])
localStorage.setItem('items',JSON.stringify(items))
}

function favourite(){
    localStorage.setItem('purchased',JSON.stringify(purchased)) //blue items is the name of the array ,items you use to refer to it
        //sets the array from local
purchased = JSON.parse(localStorage.getItem('purchased')) 
}
function remove(position){
purchased.splice(position,1)
favourite()
table.innerHTML=purchased.map((item,index)=>{
    return `
    <tr>
    <td>${index+1}</td>
    <td>${item.name}</td>
    <td>${item.description}</td>
    <td><input type="number" id="quantity" name="quantity"></input></td>
    <td>${item.price}</td>
    <td><button class='delete' value='${index}'>Delete</button></td>
    </tr>
    
    `
}).join('')
}
favourite()


let deletebutton=document.querySelector('.delete')
table.addEventListener('click',function(){
if(event.target.classList.contains('delete')){
remove(event.target.value)
}
})
// Uniquevalues()
// function Uniquevalues(purchased) {
//     return purchased.filter((item,
//       index) => purchased.indexOf(item.name) === index);
// }
//calculating total
let totalAmount=document.getElementById('#total');
 let totalPrice=purchased.reduce((selectedItems,reduceItems)=>{
return selectedItems+ reduceItems.price
},0);
totalAmount=document.write(totalPrice)
 
