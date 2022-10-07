let text = document.querySelector(".text");
let btn = document.querySelector("button");

btn.onclick = function () {
  // console.log(text.value);
  fetch(`https://api.github.com/users/${text.value}/repos`)
    .then((result) => {
      let mydata = result.json();
      return mydata;
    })
    .then((all) => {
      for (let i = 0; i < all.length; ++i) {
        console.log(all[i].name);
        let div = document.createElement("div");
        let divtxt = document.createTextNode(all[i].name);
        div.appendChild(divtxt);
        document.body.appendChild(div);
        let a = document.createElement("a");
        let atxt = document.createTextNode("visit");
        a.appendChild(atxt);
        a.setAttribute(
          "href",
          `https://${text.value}.github.io/${all[i].name}`
        );
        a.setAttribute("target", "_blank");
        div.appendChild(a);
      }
    });
};
