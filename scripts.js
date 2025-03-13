const form = document.querySelector("#form");
const ul = document.querySelector("ul");

/**
 * Criar cartão de alerta para comprovação de inserção de um novo elemento
 * @param {String} classe
 */
function addCard(classe) {
  const alerta = document.querySelector("#alert");
  const content = document.querySelector("#alert-content p");
  const close = document.querySelector("#close");

  content.textContent = "Item adicionado à lista";
  alerta.classList.add(classe);

  close.addEventListener("click", () => {
    alerta.classList.remove(classe);
  });
}

/**
 * Criar cartão de alerta para comprovação da remoção de tal elemento
 * @param {String} classe
 */
function removeCard(classe) {
  const alerta = document.querySelector("#alert");
  const content = document.querySelector("#alert-content p");
  const close = document.querySelector("#close");

  if (classe == "alert-danger") {
    alerta.classList.remove("alert-success");
  }

  content.textContent = "Item removido da lista";
  alerta.classList.add(classe);

  close.addEventListener("click", () => {
    alerta.classList.remove(classe);
  });
}
// Função para
/**
 * Criar um novo componente à lista de compras, com formatação padrão e conteúdo mediante o informado no input
 * @param {String} newLabel
 */
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

/**
 * Observar o evento de envio do formulário e executar todas as funcionalidades do algoritmo, validando antes se o input está vazio ou não
 */
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
