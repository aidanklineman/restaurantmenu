const button = document.querySelector("#button")
const disclaimer = document.querySelector("#disclaimer")
const onClick = function() {
    disclaimer.innerHTML = "A secret place (A secret place) A sweet escape (A sweet escape)"
}

button.addEventListener("click", onClick)