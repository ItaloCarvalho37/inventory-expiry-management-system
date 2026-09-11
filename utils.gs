function formatarData(data) {
  if (!data) {
    return "-";
  }

  return Utilities.formatDate(
    new Date(data),
    Session.getScriptTimeZone(),
    "dd/MM/yyyy"
  );
}

function validarItem(item) {
  return item && item.item;
}
