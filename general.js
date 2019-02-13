const eventLogEl = document.getElementById("event-log");
const appContainerRef = window.opener || window.parent;

function log(type, data) {
  eventLogEl.value += `\n\n==========${type}-start=========\n\n`;
  eventLogEl.value += JSON.stringify(data);
  eventLogEl.value += `\n\n==========${type}-end=========\n\n`;
}

function sendEventToContainer(data) {
  appContainerRef.postMessage(data, "*");
  log("From website", data);
}

function listener(event) {
  log("To website", event.data);
}

function sendHello() {
  sendEventToContainer("Hello!");
}

function sendGoodbye() {
  sendEventToContainer("Goodbye!");
}

function sendLink(data) {
  sendEventToContainer(data);
}

window.addEventListener("message", listener);