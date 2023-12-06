
//constructor function
function Constructor(name,description,price,url){ //function to  create objects
    this.description=description,
    this.price=price,
    this.name=name,
    this.url=url
    
}


//second item created using constructor
let item1 =new Constructor('Another nike','This is better than the fake',700,'https://i.postimg.cc/507x56XK/Product-2.jpg')
let item2 =new Constructor('Awesome shoes','This is better than the fake',500,'https://i.postimg.cc/prTPs7yB/product1.webp')
let item3 =new Constructor('Amazing','This is better than the fake',200,'https://i.postimg.cc/MTHLN8bX/Product-3.webp')
let item4 =new Constructor('siya','This is better than the fake',900,'https://i.postimg.cc/XJyvWtn7/product-4.jpg')
let item5 =new Constructor('Another nike','This is better than the fake',1500,'https://i.postimg.cc/sDL0Q8zR/product-5.webp')
let item6 =new Constructor('Another nike','This is better than the fake',3000,'https://i.postimg.cc/QMdSdGYD/product6.jpg')
//this an empty array where all products will be stored
let items=[]
items.push(item1,item2,item3,item4,item5,item6) //pushing items into array,can add more items

localStorage.setItem('items',JSON.stringify(items)) //blue items is the name of the array ,items you use to refer to it
//sets the array from local
items = JSON.parse(localStorage.getItem('items')) 
//use queryselctor to select item
//use mapmethod to write info
let table =document.querySelector('table')
function siya(){
        let products =items.map(function(item,index){ //use a parameter name you parsed to get value and dot notation
            console.log(item);
            console.log(index)
            return `
            <tr>
            <td>${index+1}</td>
            <td>${item.name}</td>
            <td>R ${item.price}</td>
            <td>${item.description}</td>
            <td><img src='${item.url}' width="400px" height="400px"></td>
            <td><button>Edit</button></td>
            <td><button class='delete' value='${index}'>Delete</button></td>
            </tr>
            `
    })
    table.innerHTML=products.join('')
}
siya()
        function favourite(){
                localStorage.setItem('items',JSON.stringify(items)) //blue items is the name of the array ,items you use to refer to it
                    //sets the array from local
            items = JSON.parse(localStorage.getItem('items')) 
    }
    function remove(position){
        items.splice(position,1)
        favourite()
        siya()
    }


let deletebutton=document.querySelector('.delete')
table.addEventListener('click',function(){
 if(event.target.classList.contains('delete')){
    remove(event.target.value)
 }
})