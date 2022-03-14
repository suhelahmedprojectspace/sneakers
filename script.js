
function plus() {
    let text = document.getElementById('number_prd').value;
    text++;
    document.getElementById('number_prd').value = text;
}
function minus() {
    let text = document.getElementById('number_prd').value;
    if (text <= 1) {
        alert('enter atleast one items')
    }
    else {
        text--;
        document.getElementById('number_prd').value = text;
    }
}
function changeImage1() {
    let big_img = document.getElementById('big');
    let small_img = document.getElementById('img1')
    big_img.src = small_img.src
}
function changeImage2() {
    let big_img = document.getElementById('big');
    let small_img = document.getElementById('img2')
    big_img.src = small_img.src
}
function changeImage3() {
    let big_img = document.getElementById('big');
    let small_img = document.getElementById('img3')
    big_img.src = small_img.src
}
function changeImage4() {
    let big_img = document.getElementById('big');
    let small_img = document.getElementById('img4')
    big_img.src = small_img.src
}
function addcart() {
    const no = document.getElementById('cart_no');
    const data = document.getElementById('number_prd').value;
    no.style.display = "block";
    no.innerHTML = data;
}
function check() {
    let data = document.getElementById('number_prd').value;
    if (data.length < 1) {
        alert('cart cannot be empty!!!!!')
    }
    // console.log(...data)
    else {
        // document.getElementById('amount').innerHTML = data[0];
        let cost = document.getElementById('cost').innerHTML;
        let total = document.getElementById('total');
        let amount = document.getElementById('amount');
        let mul = data[0] * cost
        amount.innerHTML = data[0];
        total.innerHTML = mul;

    }
    // letamount = document.getElementById('amount').innerHTML;
    // if (qun.length < 1) {
    //     let modal = document.getElementById('model');
    //     modal.style.display = "none";
    // }
    // else {
    //     let mul = cost * data
    //     console.log(mul)
    //     amount.innerHTML = d
    //     amount.innerHTML = mul
    //     }
}