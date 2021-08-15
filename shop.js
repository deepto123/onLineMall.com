let product=[{

  id:"1",
  name: "White Tshirt",
  size: "L",
  color: "white",
  price: 1200,
  image: "photos/product1.jpg",
  description: "best white T shirt for youngster.",},
  {
    name: "black Tshirt",
    id:"2",
    size: "L",
    color: "black",
    price: 2500,
    image: "photos/product2.jpg",
    description: "best black T shirt for youngster.",},
    {
      name: "blue denim shirt",
      id:"3",
      size: "M",
      color: "blue",
      price: 2000,
      image: "photos/product3.jpg",
      description: "best blue denim shirt for youngster.",},
      {
        name: "dark blue shirt",
        id:"4",
        size: "XL",
        color: "Dark blue",
        price: 5200,
        image: "photos/product4.jpg",
        description: "best Dark blue shirt for youngster.",},
        {
          name: "skyblue Tshirt",
          id:"5",
          size: "M",
          color: "skyblue",
          price: 5800,
          image: "photos/product5.jpg",
          description: "best skyblue T shirt for youngster.",},
          {
            name: "black Tshirt",
            id:"6",
            size: "L",
            color: "black",
            price: 5600,
            image: "photos/product6.jpg",
            description: "best black T shirt for youngster.",}
];


let cart=[];

 function displayProduct(array=product){


   let str="";

   array.forEach(function(a){

     str+=`
     <div class="product">
     <div class="img"><img src="${a.image}"></div>
     <h4>${a.name}</h4>
     <p>size: ${a.size}</p>
     <p>price: ${a.price}</p>
     <p>color: ${a.color}</p>
     <p>${a.description}</p>
     <button onclick="addCart(${a.id})">Add to Cart</button>
     </div>`


   });


   document.getElementsByClassName("container")[0].innerHTML=str;


 }

 displayProduct();



 function searchItem(value){



   let arr=product.filter(function(a){

      let str=a.name+a.color+a.description;

       return str.toUpperCase().indexOf(value.toUpperCase())!=-1

      
   });

   displayProduct(arr);
 
 }


 function addCart(i){


   let obj=product.find(function(a){


    return a.id==i;

   });
   

   let val=0;

   
   
  
   val=cart.find(function(a){

   return a.id==obj.id;
   

   });

   let num=Number(document.getElementsByTagName("span")[0].innerText);

  if(val==undefined){

   cart.push(obj);
   num++;
   document.getElementsByTagName("span")[0].innerText=num;

   displayAtCart();

   }

  else {

    alert("Item is Already added in Cart");
  }

  
  
 }


 function showModal1(){

 
  let mdl=document.getElementsByClassName("modal")[0];

      
      mdl.style.display="block";





 }


 function closeModal(){

  let mdl=document.getElementsByClassName("modal")[0];

      
  mdl.style.display="none";


 }


 function addItem(e){

  e.preventDefault();

  let obj ={};
  let mdl=document.getElementsByClassName("inp");

  obj.name=mdl[0].value;
  obj.id=mdl[1].value;
  obj.size=mdl[2].value;
  obj.color=mdl[3].value;
  obj.price=Number(mdl[4].value);
  obj.image=mdl[5].value;
  obj.description=mdl[6].value;
  
  product.push(obj);
  displayProduct();
  

  mdl[0].value="";
  mdl[1].value="";
  mdl[2].value="";
  mdl[3].value="";
  mdl[4].value="";
  mdl[5].value="";
  mdl[6].value="";
  closeModal();

 }

 function displayAtCart(){
  let str="";

  cart.forEach(function(a){

    str+=`
    <div class="product">
    <div class="img"><img src="${a.image}"></div>
    <h4>${a.name}</h4>
    <p>size: ${a.size}</p>
    <p>price: ${a.price}</p>
    <p>color: ${a.color}</p>
    <p>${a.description}</p>
    
    </div>`
 });

  document.getElementsByClassName("container")[1].innerHTML=str;
 }


function showCart(){

  let mdl=document.getElementsByClassName("modal1")[0];

      
      mdl.style.display="block";





}

function closeModal1(){

  let mdl=document.getElementsByClassName("modal1")[0];

      
  mdl.style.display="none";


}


function showFilter(){
 
  document.getElementsByClassName("filter")[0].style.display="block";
 


}

function closeFilter(){

  document.getElementsByClassName("filter")[0].style.display="none";



}


function searchFilter(){

  let num=document.getElementsByClassName("inp1");
  

  let arr=product.filter(function(a){

      return a.price>=Number(num[0].value)&&a.price<=Number(num[1].value);


  })

    displayProduct(arr);



num[0].value="";
num[1].value="";

closeFilter();

}



 



