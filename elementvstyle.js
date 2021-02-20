const element = document.querySelector("#clear-todos");


// console.log(element.id);
// console.log(element.className);
// console.log(element.classList);
// console.log(element.classList[0]);
// console.log(element.classList[1]);
// console.log(element.textContent);
// console.log(element.innerHTML);
// console.log(element.href);
// console.log(element.style);

//Style ve Element özelliklerini değiştirme

// element.className = "btn btn-warning";
// element.style.color = "#000";
// element.style.marginLeft = "50px";
// element.href = "https://www.google.com.tr";
// element.target = "_blank";

// console.log(element.textContent);
// element.textContent = "Silin";
// element.innerHTML ="<span style = 'color:green'>Silin</span>";

let element2 = document.querySelector("li:last-child");
element2 = document.querySelector("li:nth-child(2)");
element2 = document.querySelector("li:nth-child(3)");
element2 = document.querySelector("li:nth-child(4)");
element2 = document.querySelectorAll("li:nth-child(odd)");
element2 = document.querySelectorAll("li:nth-child(even)");

element2.forEach(function(el){
    el.style.background = "#eee";
    el.style.color = "red"
});




// const elements = document.querySelectorAll(".list-group-item");//Node list
// elements.forEach(function(el){
//         el.style.color = "red";
//         el.style.background ="#eee";
// });

console.log(element2);


// console.log(element);