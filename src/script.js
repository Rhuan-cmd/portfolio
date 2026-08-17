const explorer_bar = document.getElementById("explorer-bar");
const explorer_button = document.getElementById("explorer-button");

const archives = document.querySelectorAll(".archives");

explorer_button.addEventListener("click", () => {
    if (explorer_bar.className.includes("closed")){
        explorer_bar.className = "explorer-bar";
        explorer_button.className = "explorer-button select";
    }else{
        explorer_bar.className = "explorer-bar closed";
        explorer_button.className = "explorer-button";
    }
});

const path = ["#home", "#sobre", "#skills", "#projects", "#experience", "#contact"];

archives.forEach((element, id) => {
    element.addEventListener("click", () => {
        limparSelect();
        element.classList.add("select-archive");
        
        window.location.href = path[id];
    });
});

function limparSelect() {
    archives.forEach((element) => {
        element.classList.remove("select-archive");
    });
}