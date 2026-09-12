function prepararNotificacoes(itens) {
  return itens
    .filter(item =>
      item.status === "VENCIDO" ||
      item.status === "ATENÇÃO"
    )
    .map(item => ({
      id: item.id,
      item: item.item,
      vencimento: item.vencimento,
      diasRestantes: item.diasRestantes,
      status: item.status
    }));
}
