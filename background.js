let intervalId;

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "startTrocarAbas") {
    startTabRotation();
  } else if (request.action === "stopTrocarAbas") {
    stopTabRotation();
  }
});

function startTabRotation() {
  chrome.tabs.query({}, function (tabs) {
    let currentIndex = 0;
    intervalId = setInterval(() => {
      if (currentIndex < tabs.length) {
        chrome.tabs.update(
          tabs[currentIndex].id,
          { active: true },
          function (tab) {
            chrome.windows.update(tab.windowId, { state: "fullscreen" });
          }
        );
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 30000);
  });
}

function stopTabRotation() {
  clearInterval(intervalId);
}
