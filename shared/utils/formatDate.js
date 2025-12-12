const formatDate = (date) => {
  return new Date(date).toLocaleDateString('pt-BR');
};

module.exports = formatDate;