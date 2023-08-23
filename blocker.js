let defaultNumbers = ["+55 32 8865-0690"];
let forbiddenLabels = [
  "Talvez Gui",
  "Talvez Guilherme Augusto"
];

function hideMessagesWithLabel(label) {
  document.querySelectorAll(`[aria-label="${label}"]`).forEach((element) => {
    const container = element.closest('div[data-testid="msg-container"]');
    if (container && !!container.style) {
      container.style.display = "none";
    }
  });
}

function hideMessagesWithNumber(number) {
  document
    .querySelectorAll(`[data-pre-plain-text*="${number}:"]`)
    .forEach((element) => {
      const container = element.closest('div[data-testid="msg-container"]');
      if (container && !!container.style) {
        container.style.display = "none";
      }
    });
}

function hideMessagesQuoted(number) {
  document
    .querySelectorAll(`[data-pre-plain-text*="${number}:"]`)
    .forEach((element) => {
      const container = element.closest('div[aria-label="Mensagem citada"]');
      if (container && !!container.style) {
        container.style.display = "none";
      }
    });
}

setInterval(() => {
  defaultNumbers.forEach((number) => hideMessagesWithNumber(number));
  defaultNumbers.forEach((number) => hideMessagesQuoted(number));
  forbiddenLabels.forEach((label) => hideMessagesWithLabel(label));
  forbiddenLabels.forEach((label) => hideMessagesQuoted(label));
}, 250);
