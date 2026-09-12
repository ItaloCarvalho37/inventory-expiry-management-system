function executarSistema() {
  const itens = obterItensEstoque();

  const itensProcessados = processarItens(itens);

  const itensClassificados = aplicarClassificacao(itensProcessados);

  const relatorio = gerarRelatorio(itensClassificados);

  return {
    itens: itensClassificados,
    relatorio: relatorio
  };
}
