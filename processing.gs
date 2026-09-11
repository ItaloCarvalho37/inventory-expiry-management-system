function calcularDiasRestantes(vencimento) {
  if (!vencimento) {
    return null;
  }

  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0);

  const dataVencimento = new Date(vencimento);

  if (isNaN(dataVencimento.getTime())) {
    return null;
  }

  dataVencimento.setHours(0, 0, 0, 0);

  const diferenca = dataVencimento - hoje;

  return Math.ceil(diferenca / (1000 * 60 * 60 * 24));
}

function processarItens(itens) {
  return itens.map(item => ({
    ...item,
    diasRestantes: calcularDiasRestantes(item.vencimento)
  }));
}
