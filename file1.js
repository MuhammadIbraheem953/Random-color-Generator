
const mainButton = document.querySelector("button");

const body = document.body;

const current = document.querySelector(".current-color")


function randomColorGenerator(){
 const red = Math.floor(Math.random() * 256);
 const green = Math.floor(Math.random() * 256);
 const blue = Math.floor(Math.random() * 256);
 const randomColor = `rgba(${red}, ${green}, ${blue})`
 return randomColor;


}

mainButton.addEventListener("click", ()=>{
 const randomColor = randomColorGenerator();
 body.style.backgroundColor = randomColor;
 current.textContent = randomColor;
})
