let inp = document.querySelector("#input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let itemList;

btn.addEventListener("click", function () {
  let item = document.createElement("li");
  item.innerText = inp.value;
  ul.append(item);

  let delbtn = document.createElement("button");
  delbtn.innerText = "Delete";
  item.append(delbtn);

  console.log(inp.value);
  inp.value = "";
});

ul.addEventListener("click", function (event) {
  if (event.target.nodeName == "BUTTON") {
    itemList = event.target.parentElement;
    itemList.remove();
    console.log("Deleted tasked");
  }
});
