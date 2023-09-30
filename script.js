// Getting the dropdown trigger button element

let dropdownTrigger = document.querySelector("#dropdown-trigger-button");

dropdownTrigger.addEventListener("click", () => {
    console.log("Dropdown trigger clicked");
    let dropdown = document.querySelector("#mobile-dropdown");
    if (dropdown.style.display === "none") {
        dropdownTrigger.style.transform = "translate(rotateX(180))";
        dropdown.style.display = "block";
    } else if (dropdown.style.display === "block") {
        dropdownTrigger.style.transform = "translate(rotateX(0))";
        dropdown.style.display = "none";
    }
});
