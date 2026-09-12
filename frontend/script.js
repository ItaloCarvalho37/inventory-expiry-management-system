let itens = [];

function carregarDashboard() {
  google.script.run
    .withSuccessHandler(dados => {

      itens = dados.itens;

      document.getElementById("total").textContent =
        dados.relatorio.total;

      document.getElementById("vencidos").textContent =
        dados.relatorio.vencidos;

      document.getElementById("atencao").textContent =
        dados.relatorio.atencao;

      document.getElementById("normais").textContent =
        dados.relatorio.normais;

      exibirItens(itens);
    })
    .obterDadosDashboard();
}

function exibirItens(lista) {
  const tabela = document.getElementById("listaItens");

  tabela.innerHTML = "";

  lista.forEach(item => {

    const linha = document.createElement("tr");

    linha.innerHTML = `
      <td>${item.id}</td>
      <td>${item.item}</td>
      <td>${item.quantidade}</td>
      <td>${item.vencimento || "-"}</td>
      <td>${item.diasRestantes ?? "-"}</td>
      <td>${item.status}</td>
    `;

    tabela.appendChild(linha);
  });
}

function filtrarItens() {

  const termo = document
    .getElementById("busca")
    .value
    .toLowerCase();

  const resultado = itens.filter(item =>
    String(item.item)
      .toLowerCase()
      .includes(termo)
  );

  exibirItens(resultado);
}

document
  .getElementById("busca")
  .addEventListener("input", filtrarItens);

carregarDashboard();
