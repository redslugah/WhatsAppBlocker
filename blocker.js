let defaultNumbers = ["+55 32 8865-0690"];
let forbiddenLabels = [
  "Talvez Gui",
  "Talvez Guilherme Augusto", "~Gui", "~Guilherme Augusto"
];

function hideMessagesWithLabel(label) {
  document.querySelectorAll(`[aria-label="${label}"]`).forEach((element) => {
    const container = element.closest('div[class="CzM4m"]');
    if (container && !!container.style) {
      container.style.display = "none";
    }
  });
}

function hideMessagesWithNumber(number) {
  document
    .querySelectorAll(`[data-pre-plain-text*="${number}:"]`)
    .forEach((element) => {
      const container = element.closest('div[class="CzM4m"]');
      if (container && !!container.style) {
        container.style.display = "none";
      }
    });
}

function hideMessagesQuoted(lumber) {
  document
    .querySelectorAll(`[data-pre-plain-text*="${lumber}:"]`)
    .forEach((element) => {
      const container = element.closest('div[class="CzM4m"]');
      if (container && !!container.style) {
        container.style.display = "none";
      }
    });
}

//WIP
/*function hideMessageGridWithNumber(lumber) {
  document
    .querySelectorAll(`[aria-label="${lumber}"]`)
    .forEach((element) => {
      const container = element.closest('div[class="_2KKXC"]');
      console.log('newstuff2')
      if (container && !!container.style) {
        container.style.display = "none";
      }
    });
}*/

setInterval(() => {
  //defaultNumbers.forEach((number) => hideMessageGridWithNumber(number));
  defaultNumbers.forEach((number) => hideMessagesWithNumber(number));
  defaultNumbers.forEach((number) => hideMessagesQuoted(number));
  //forbiddenLabels.forEach((label) => hideMessageGridWithNumber(label));
  forbiddenLabels.forEach((label) => hideMessagesWithLabel(label));
  forbiddenLabels.forEach((label) => hideMessagesQuoted(label));
}, 250);
