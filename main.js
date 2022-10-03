let input_ele = document.querySelector("input");
let btn1 = document.querySelector(".btn1");
let tasks = document.querySelector(".tasks .child");
let btn2 = document.querySelector(".btn2");

////////////////////////////////////////Add Task Condition/ /////////////////////////

btn1.addEventListener("click", (eo) => {
  if (input_ele.value !== "") {
    window.localStorage.setItem(input_ele.value, "test2");
    let div_task = `<p> ${input_ele.value} </p> 
    <button class="btn2" type="submit">Delete</button>`;
    tasks.innerHTML += div_task;
    input_ele.value = "";
  }
});

tasks.addEventListener("click", (eo) => {
  if (eo.target.className == "btn2") {
    eo.target.parentNode.remove();

    // tasks.innerHTML = '';
  }

  //   tasks.remove();
});

// function exist(){
//     if (input_ele.value == localStorage.getItem(input_ele.value))
//     {
//         console.log("valu mawgoda")
//     }
// }
