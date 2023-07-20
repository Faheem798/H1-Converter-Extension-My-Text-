document.getElementById("convertButton").addEventListener("click", () => {
  // Send a message to the content script to start the conversion
  chrome.scripting.executeScript({
    target: {tabId: 1},
    function: convertH1Elements
  });
});

function convertH1Elements() {
  const h1Elements = document.querySelectorAll("h1");
  for (const h1 of h1Elements) {
    h1.textContent = "My Text";
  }
}
