// const cardBody = document.querySelectorAll(".card-body")[1];

// const title = document.querySelector("#tasks-title");

// // Click Event
// title.addEventListener("click",run);


// function run(e) {

//     console.log(e.type);
// };


const cardBody = document.querySelectorAll(".card-body")[1];

const title = document.querySelector("#tasks-title");

// doubleClick Event
// title.addEventListener("dblclick",run);


//Mouse Down Eventi
// title.addEventListener("mousedown",run);

//Mouseup Eventi
// title.addEventListener("mouseup",run);

// Mouse over
// title.addEventListener("mouseover",run);

//Mouseout eventi
// title.addEventListener("mouseover",run);

// cardBody.addEventListener("mouseover",run);
// cardBody.addEventListener("mouseout",run);

//Mouse Enter ve Mouse Leave

cardBody.addEventListener("mouseenter",run);
cardBody.addEventListener("mouseleave",run);

function run(e) {

    console.log(e.type);
};