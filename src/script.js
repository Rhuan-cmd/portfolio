const explorer_bar = document.getElementById("explorer-bar");
const explorer_button = document.getElementById("explorer-button");

explorer_button.addEventListener("click", () => {
    if (explorer_bar.className.includes("closed")){
        explorer_bar.className = "explorer-bar"
    }else{
        explorer_bar.className = "explorer-bar closed";
    }
});