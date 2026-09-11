function obterDadosDashboard() {
  const itens = obterItensEstoque();
  const itensProcessados = processarItens(itens);
  const itensClassificados = aplicarClassificacao(itensProcessados);

  return {
    itens: itensClassificados,
    relatorio: gerarRelatorio(itensClassificados)
  };
}
