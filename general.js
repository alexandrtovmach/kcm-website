const eventLogEl = document.getElementById("event-log");

function log(type, data) {
  eventLogEl.value += `\n\n==========${type}-start=========\n\n`;
  eventLogEl.value += JSON.stringify(data);
  eventLogEl.value += `\n\n==========${type}-end=========\n\n`;
}

