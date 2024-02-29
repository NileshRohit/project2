// let btn = document.querySelector("button");
// btn.addEventListener("click", function() {
//     let h3 = document.querySelector("h3");
//     let randomColor = getRandomColor();
//     h3.innerText = randomColor;
//     let div = document.querySelector("div");
//     div.style.backgroundColor = randomColor;

//     console.log("color updated");

// });

//  function getRandomColor () {
//     let red = Math.floor(Math.random() * 255);
//     let green = Math.floor(Math.random() * 255);
//     let blue = Math.floor(Math.random() * 255);

//     let color = `rgb(${red},${green},${blue})`;
//     return color;
//  }

// function one() {
//     return 1;
// }
// function two() {
//     return one() + one();
// }
// function three() {
//     let ans = two() + one ();
//     console.log(ans)
// }

// let btn = document.querySelector("button");
// btn.addEventListener("click", async () => {
//   let fact = await getData();
//   console.log(fact);
// });
let url = "https://dog.ceo/api/breeds/image/random";

async function getData() {
  try {
    let res = await get(url);
   console.log(res.data.message);
    
  } catch (error) {
    console.log("Error!");
    return "No Image Found";
  }
}

