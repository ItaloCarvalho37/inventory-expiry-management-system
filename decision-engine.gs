function classificarItem(item) {
  const dias = item.diasRestantes;

  if (dias === null) {
    return "SEM_VALIDADE";
  }

  if (dias <= 0) {
    return "VENCIDO";
  }

  if (dias <= item.avisarCom) {
    return "ATENÇÃO";
  }

  return "NORMAL";
}

function aplicarClassificacao(itens) {
  return itens.map(item => ({
    ...item,
    status: classificarItem(item)
  }));
}
