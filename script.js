function adicionarTarefa() {
    const input = document.getElementById("inputTarefa");
    const texto = input.value.trim();

    if (texto === "") return;

    const lista = document.getElementById("listaTarefas");

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = texto;

    span.onclick = function () {
        span.classList.toggle("concluida");
    };

    const botaoDeletar = document.createElement("button");
    botaoDeletar.textContent = "🗑️";

    botaoDeletar.onclick = function () {
        lista.removeChild(li);
        salvarTarefas();
    };

    li.appendChild(span);
    li.appendChild(botaoDeletar);

    lista.appendChild(li);
    salvarTarefas();

    function salvarTarefas(){
        const lista = document.getElementById("listaTarefas");

        localStorage.setItem("tarefas", lista.innerHTML);
    }

    window.onload = function(){
        const tarefasSalvas = localStorage.getItem("tarefas");

        if(tarefasSalvas){
            document.getElementById("listaTarefas").innerHTML = tarefasSalvas;
        }
    }

    input.value = "";
}