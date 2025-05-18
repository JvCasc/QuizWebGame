// Função para remover acentos, espaços e padronizar maiúsculas
function normalizeText(text) {
  return text.trim().toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}



export { normalizeText } 