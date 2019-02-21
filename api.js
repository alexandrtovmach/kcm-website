const appContainerRef = window.opener || window.parent;

function listener(event) {
  log("To website", event.data);
};

function sendEventToContainer(data) {
  appContainerRef.postMessage(data, "*");
  log("From website", data);
};

function sendAudio() {
  sendEventToContainer({
    source: "http://kcm.fm/livemusic",
    artwork: "http://kcm.fm/static/images/logo.svg",
    type: "audio",
  });
}

function sendVideo() {
  sendEventToContainer({
    source: "http://techslides.com/demos/sample-videos/small.mp4",
    type: "video"
  });
}

window.addEventListener("message", listener);