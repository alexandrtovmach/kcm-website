const appContainerRef = window.opener || window.parent;

function listener(event) {
  log("To website", event.data);
};

function sendEventToContainer(data) {
  try {
    const json = JSON.stringify(data);
    appContainerRef.postMessage(json, "*");
    log("From website", data);
  } catch (err) {
    console.error(err);
  }
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
    source: "https://www.quirksmode.org/html5/videos/big_buck_bunny.mp4",
    type: "video"
  });
}

window.addEventListener("message", listener);