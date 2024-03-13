document.addEventListener("DOMContentLoaded", function () {
  var startButton = document.getElementById("trocarAbas");
  var stopButton = document.getElementById("pararTroca");

  startButton.addEventListener("click", function () {
    chrome.runtime.sendMessage({ action: "startTrocarAbas" });
  });

  stopButton.addEventListener("click", function () {
    chrome.runtime.sendMessage({ action: "stopTrocarAbas" });
  });
});
