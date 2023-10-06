// let add = document.getElementsByClassName('addCart');
// add.onclick = function () {

// } 


// add.appendChild(li);

// let quan = document.getElementsByClassName('quantity');
// console.log(quan);

let btn = document.querySelector('.addCart');
btn.addEventListener('click', addToCart);

function addToCart(event) {
    let product = event.target.parentElement;
    console.log(product);

    let a = product.querySelector('span').textContent;
    let b = product.querySelector('.price').textContent;
    let c = product.querySelector('.quantity').textContent;
    let bb = b.slice(0, -1);
    

    let list = document.createElement("li"); 
    list.textContent = a + bb*c;
    document.querySelector("ul").appendChild(list);
    console.log(list);
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