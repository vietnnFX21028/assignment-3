document.querySelector(".submit").addEventListener("click", function () {
  let n = document.getElementById("email").value;
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let result = n.match(regex);

  console.log(result);
  if (result.lenght !== 0) {
    document.querySelector(".formEmail").classList.add("remove");
    document.querySelector(".info1").classList.remove("remove");
  }
});
for (let j = 1; j < 7; j++)
  document
    .querySelector(`.ViewMoreExp${j}`)
    .addEventListener("click", function () {
      let c = document.querySelector(`.Exp${j}`).classList.toggle("remove");
      console.log(c);
      if (c) {
        document.querySelector(`.ViewMoreExp${j}`).textContent = "⏬View More";
      } else {
        document.querySelector(`.ViewMoreExp${j}`).textContent = "⏫View Less";
      }
    });
