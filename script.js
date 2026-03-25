

// ===== GIỎ HÀNG =====

let cartCount = 0;
let cartNumber = document.getElementById("cart-count");

let buttons = document.querySelectorAll(".product button");

buttons.forEach(function(btn){

btn.addEventListener("click", function(){

cartCount++;
cartNumber.innerText = cartCount;

});

});


// ===== LỌC SẢN PHẨM =====

function filterProduct(category){

let products = document.querySelectorAll(".product");

products.forEach(function(product){

if(category === "all"){
product.style.display = "";
}
else if(product.classList.contains(category)){
product.style.display = "";
}
else{
product.style.display = "none";
}

});

}


// ===== TÌM KIẾM =====

function searchProduct(){

let input = document
.getElementById("searchInput")
.value
.toLowerCase();

let products = document.querySelectorAll(".product");

products.forEach(function(product){

let name = product
.querySelector("h3")
.innerText
.toLowerCase();

if(name.includes(input)){
product.style.display = "";
}
else{
product.style.display = "none";
}

});

}

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function openOrderForm(){
document.getElementById("order-form").style.display="flex";
}

function closeOrderForm(){
document.getElementById("order-form").style.display="none";
}

document.addEventListener("DOMContentLoaded",function(){

let orderForm = document.getElementById("order-form");

orderForm.addEventListener("click",function(e){

if(e.target === orderForm){
closeOrderForm();
}

});

});

function sendZalo(){

let name=document.getElementById("customer-name").value;
let phone=document.getElementById("customer-phone").value;
let address=document.getElementById("customer-address").value;

let message="ĐƠN HÀNG TỪ WEBSITE%0A";

cart.forEach(function(item){
message+=item.name+" x"+item.qty+"%0A";
});

message+="%0AHọ tên: "+name+
"%0ASĐT: "+phone+
"%0AĐịa chỉ: "+address;

window.open("https://zalo.me/0968355381?text="+message);

closeOrderForm();

}

function sendFacebook(){

let name=document.getElementById("customer-name").value;
let phone=document.getElementById("customer-phone").value;
let address=document.getElementById("customer-address").value;

let message="Đơn hàng: "+name+" | "+phone+" | "+address;

window.open("https://m.me/yourpage?text="+message);

closeOrderForm();

}

function openOrderForm(){
document.getElementById("orderPopup").style.display="flex";
}

function closeOrderForm(){
document.getElementById("orderPopup").style.display="none";
}

function getOrderMessage(){

let name = document.getElementById("customerName").value;
let phone = document.getElementById("customerPhone").value;
let address = document.getElementById("customerAddress").value;

let message = "ĐƠN HÀNG MỚI:%0A";
message += "Tên: " + name + "%0A";
message += "SĐT: " + phone + "%0A";
message += "Địa chỉ: " + address + "%0A%0A";
message += "Sản phẩm:%0A";

cart.forEach(function(item){
message += "- " + item.name + " x" + item.qty + "%0A";
});

message += "%0ATổng tiền: " + document.getElementById("cart-total").innerText + "đ";

return message;

}

function sendZalo(){

let message = getOrderMessage();
let url = "https://zalo.me/0968355381?text=" + message;

window.open(url,"_blank");

}

function sendFacebook(){

let message = getOrderMessage();
let url = "https://m.me/yourpage?text=" + message;

window.open(url,"_blank");

}

