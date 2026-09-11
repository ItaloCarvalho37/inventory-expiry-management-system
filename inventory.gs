function criarItem(id, item, quantidade, vencimento, avisarCom, ultimoAviso) {
  return {
    id: id,
    item: item,
    quantidade: quantidade,
    vencimento: vencimento,
    avisarCom: avisarCom || CONFIG.DIAS_ALERTA_PADRAO,
    ultimoAviso: ultimoAviso || null
  };
}
