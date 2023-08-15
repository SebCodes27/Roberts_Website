function navClick() {
    let x = document.getElementById("hidden-list");
    if (x.className === "flex undec") {
        x.className += " unhidden";
    } else {
        x.className = "flex undec";
    }
}