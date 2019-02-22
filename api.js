/**
 * reference to application which are opened this website
 */
const appContainerRef = window.opener || window.parent;

/**
 * listener function to listen events from application
 */
function listener(event) {
  log("To website", event.data);
};

/**
 * function to sending event to application
 * 
 * data: {
 *    source: "resource URL", // required
 *    type: "audio" | "video", // required
 *    artwork: "image placeholder URL",
 *    artworkLarge: "large image placeholder URL",
 * } 
 */
function sendEventToContainer(data) {
  try {
    const json = JSON.stringify(data);
    appContainerRef.postMessage(json, "*");
    log("From website", data);
  } catch (err) {
    console.error(err);
  }
};

/**
 * subscribe to events from application
 * not required, but for some future things
 */
window.addEventListener("message", listener);



/**
 * Examples of sending events
 */
function sendAudio() {
  sendEventToContainer({
    source: "http://kcm.fm/livemusic",
    artwork: "http://kcm.fm/upload/pictures/0/185.jpg",
    artworkLarge: "http://kcm.fm/upload/pictures/0/185.jpg",
    type: "audio",
  });
}

function sendBrokenAudio() {
  sendEventToContainer({
    source: "",
    artwork: "",
    artworkLarge: "",
    type: "audio",
  });
}

function sendBrokenType() {
  sendEventToContainer({
    source: "http://kcm.fm/livemusic",
    artwork: "http://kcm.fm/upload/pictures/0/185.jpg",
    artworkLarge: "http://kcm.fm/upload/pictures/0/185.jpg",
    type: "custom",
  });
}

function sendVideo() {
  sendEventToContainer({
    source: "https://www.quirksmode.org/html5/videos/big_buck_bunny.mp4",
    type: "video"
  });
}
