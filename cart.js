let ct = [];
let add = (id) => {
    ct.push(id)
    let length = ct.length;
    document.getElementById("cart").innerHTML = length;
}


fetch('https://fakestoreapi.com/products').then((data) => {

    return data.json();
}).then((result) => {
    console.log(result)
    let data1 = "";
    result.map((values) => {
        data1 += `<div class="card">
 <div class='image-conatiner'>
 <img src=${
            values.image
        } alt="Avatar" style="width:100%">
 </div>
 <div class="container-c">
   <h4>Title :<b>${
            values.title.slice(0, 50)
        }</b></h4> 
   <p>Price: ${
            values.price
        }</p> 
   <p> Rate :${
            values.rating.rate
        }</p> 
  
   <button  class="btn-add" onclick=add(${
            values.id
        })>Add</button>
 </div>
</div>`
        document.getElementById("cards").innerHTML = data1;
    })
}).catch((err) => {
    console.log(err)
})

// Slider part
let images = [
    "./images1.jpg",
    "./images2.webp",
    "./images3.webp",
    "./images4.webp",
    "./images5.webp"
];
var index = 0;
let nextSlide = document.getElementById("right-slide");
let prevSlide = document.getElementById("left-slide");

function next(direction) {
    if (direction == "next") {
        if (index < images.length - 1) {
            index++
        } else {
            index = 0;
        }

    } else if (direction == "prev") {
        console.log(index)
        if (index == 0) {
            index = images.length - 1;
        } else {
            index--;
        }
    }
    document.getElementById("slide").src = images[index];

}
nextSlide.onclick = () => {
    console.log("click")
    next("next")
}
 prevSlide.onclick = () => {
    console.log("click")
    next("prev")
}
