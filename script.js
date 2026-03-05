let dropdown = document.getElementById("garfield-characters");
let image = document.getElementById("garfieldCharacters");

dropdown.addEventListener("change", function() {
    image.src = dropdown.value;
});