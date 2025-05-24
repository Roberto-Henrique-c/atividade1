function adicionarComentario() {
  const input = document.getElementById("commentInput");
  const texto = input.value.trim();
  if (texto === "") return;

  const lista = document.getElementById("commentList");
  const item = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = texto;

  const btnEditar = document.createElement("button");
  btnEditar.textContent = "Editar";
  btnEditar.onclick = () => {
    const novoTexto = prompt("Editar comentário:", span.textContent);
    if (novoTexto !== null && novoTexto.trim() !== "") {
      span.textContent = novoTexto;
    }
  };

  const btnRemover = document.createElement("button");
  btnRemover.textContent = "Remover";
  btnRemover.onclick = () => item.remove();

  item.appendChild(span);
  item.appendChild(btnEditar);
  item.appendChild(btnRemover);

  lista.appendChild(item);
  input.value = "";
}