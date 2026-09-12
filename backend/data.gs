function obterItensEstoque() {
  const planilha = SpreadsheetApp.getActiveSpreadsheet();
  const aba = planilha.getSheets()[0];

  const dados = aba.getDataRange().getValues();

  if (dados.length <= 1) {
    return [];
  }

  const cabecalho = dados[0];

  return dados.slice(1).map(linha => ({
    id: linha[0],
    item: linha[1],
    quantidade: linha[2],
    vencimento: linha[3],
    avisarCom: linha[4],
    ultimoAviso: linha[5]
  }));
}
