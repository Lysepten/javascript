// let add = document.getElementsByClassName('addCart');
// add.onclick = function () {

// } 


// add.appendChild(li);

// let quan = document.getElementsByClassName('quantity');
// console.log(quan);



// let btn = document.querySelector('.addCart');
// document.querySelector('.addCart');

let products = document.querySelectorAll(".product");

// let pro = (".product").length;
// console.log(pro);

for (let i = 0; i < products.length; i++) {
    let product = products[i]
    let addBtn = product.querySelector('.addCart')
    addBtn.addEventListener("click", addCart);
}

// btn.addEventListener('click', addToCart);

function addCart(event) {
    let product = event.target.parentElement;

    let a = product.querySelector('span').textContent;
    let b = product.querySelector('.price').textContent;
    let c = parseInt(product.querySelector('.quantity').value);
    let bb = b.slice(0, -1);

    if (c > 0) {
        let list = document.createElement("li"); 
        list.textContent =
        a + " [" + c + "개] : " + bb * c + "원";

        // list.textContent = a + bb * c;
        document.querySelector("ul").appendChild(list);
    }

    let totalpe = document.querySelector(".total2");
    let totalprice = parseInt(totalpe.textContent.slice(0, -1));
    totalprice += bb * c;
    totalpe.textContent = totalprice + "원";
    


}
// btn.addEventListener('click', event1)
// function event1() {
//     alert('hello');
// };

// for (product.length) { // 버튼 7개 대신 반복문 하나로 통일(나중에)
//    let product = product[i];
//    let addBtn = product.querySelector('.addCart');
//    addBtn.addEventListener('click', addCart);
// }