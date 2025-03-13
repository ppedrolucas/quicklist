const form = document.querySelector("#form");
const ul = document.querySelector("ul");

function addCard(classe) {
  const alerta = document.querySelector("#alert");
  const content = document.querySelector("#alert-content p");

  content.textContent = "Item adicionado à lista";
  alerta.classList.add(classe);

  const close = document.querySelector("#close");

  close.addEventListener("click", () => {
    alerta.classList.remove(classe);
  });
}

function removeCard(classe) {
  const alerta = document.querySelector("#alert");
  const content = document.querySelector("#alert-content p");

  if (classe == "alert-danger") {
    alerta.classList.remove("alert-success");
  }

  content.textContent = "Item removido da lista";
  alerta.classList.add(classe);

  const close = document.querySelector("#close");

  close.addEventListener("click", () => {
    alerta.classList.remove(classe);
  });
}
// Função para criar novo elemento da lista, formatado e mediante o valor do input
function addItemList(newLabel) {
  const item = document.createElement("li");
  item.classList.add("item");

  const content = document.createElement("div");
  content.classList.add("content");

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");

  const label = document.createElement("label");
  label.innerText = newLabel;

  const checkboxImage = document.createElement("div");
  checkboxImage.classList.add("checkbox-img");

  const trash = document.createElement("img");
  trash.setAttribute("src", "image/trash.svg");

  content.append(checkboxImage, label, checkbox);

  item.append(content, trash);

  ul.append(item);

  trash.onclick = () => {
    ul.removeChild(item);
    removeCard("alert-danger");
  };

  addCard("alert-success");
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (input.value == "") {
    alert("Campo vazio");
  } else {
    let newLabel = input.value;
    addItemList(newLabel);
    form.reset();
  }
});
