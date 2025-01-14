const containerEl = document.querySelector(".container");
const colorSpanEl = document.querySelector(".colorSpan");

const colorString = "0123456789abcdef";

function colorGenerator() {
  let hexaColorCode = "";
  for (let index = 0; index < 6; index++) {
    let colorCode = Math.floor(Math.random() * colorString.length);
    hexaColorCode = hexaColorCode + colorString.charAt(colorCode);
  }

  return "#" + hexaColorCode;
}

for (let index = 0; index < 30; index++) {
  const generatedColor = colorGenerator();
  const colorContainerEl = document.createElement("div");
  colorContainerEl.classList.add("color-container");
  //colorContainerEl.setAttribute("id", index);
  colorContainerEl.innerText = generatedColor;
  colorContainerEl.style.backgroundColor = generatedColor;
  colorContainerEl.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(generatedColor);
      // Display a tooltip
      const tooltip = document.createElement("span");
      tooltip.classList.add("tooltip");
      tooltip.innerText = "Color Copied!";
      colorContainerEl.appendChild(tooltip);
      // Remove tooltip after a short delay
      setTimeout(() => {
        tooltip.remove();
      }, 1000); // Remove after 1 second

      colorSpanEl.style.color = generatedColor;
    } catch (err) {
      console.error("Failed to copy to clipboard:", err);
    }
  });

  containerEl.appendChild(colorContainerEl);
}

// colorContainerEl.addEventListener("click",()=>{
//     spanEl.style.color = generatedColor;
//     navigator.clipboard.writeText(generatedColor);
// })
