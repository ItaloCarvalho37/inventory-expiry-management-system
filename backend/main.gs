function executarSistema() {
  const itens = obterItensEstoque();
  const processados = processarItens(itens);
  const classificados = aplicarClassificacao(processados);

  return {
    itens: classificados,
    relatorio: gerarRelatorio(classificados)
  };
}
