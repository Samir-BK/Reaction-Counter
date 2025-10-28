function updateCount(btn) {
  const countEl = btn.querySelector(".count");
  let currCount = +countEl.textContent.split("/")[0];
  if (currCount === 10) return;
  currCount++;
  countEl.textContent = `${currCount}/10`;
  return countEl;
}

const allButtonsEl = document.querySelectorAll(".emoji-btn");
allButtonsEl.forEach((button) =>
  button.addEventListener("click", () => updateCount(button))
);
