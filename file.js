var textArea = document.querySelector("#textarea"),
    fileName = document.querySelector("#fileName"),
    fileMenu = document.querySelector("#file"),
    SaveBtn = document.querySelector("#btn");

SaveBtn.addEventListener("click", () => {
    let blobFile = new Blob([textArea.value], { type: fileMenu.value })
    let fileUrl = URL.createObjectURL(blobFile);
    let link = document.createElement("a");
    link.download = fileName.value;
    link.href = fileUrl;
    link.click();
})
fileMenu.addEventListener("change", () => {
    let selectOption = fileMenu.options[fileMenu.selectedIndex].text;
    SaveBtn.textContent = `Save As ${selectOption.split(" ")[0]} file`;
})
