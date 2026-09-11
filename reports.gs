function gerarRelatorio(itens) {
  const relatorio = {
    total: itens.length,
    vencidos: 0,
    atencao: 0,
    normais: 0,
    semValidade: 0
  };

  itens.forEach(item => {
    switch (item.status) {
      case "VENCIDO":
        relatorio.vencidos++;
        break;

      case "ATENÇÃO":
        relatorio.atencao++;
        break;

      case "NORMAL":
        relatorio.normais++;
        break;

      case "SEM_VALIDADE":
        relatorio.semValidade++;
        break;
    }
  });

  return relatorio;
}
