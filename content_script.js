// This script will run on every webpage and convert h1 elements
const h1Elements = document.querySelectorAll("h1");
for (const h1 of h1Elements) {
  h1.textContent = "My Text";
}
