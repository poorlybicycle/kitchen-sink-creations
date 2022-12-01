const allBtns = document.querySelectorAll(".addIngredient")

function sendToDatabase(event) {
    fetch('/api/ingredients/newIngredient', {
        method: "POST",
        body: JSON.stringify({
            ingredientId: event.target.dataset.ingredientid
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    document.location.reload();
}

allBtns.forEach(element => {
    element.addEventListener("click", sendToDatabase)
})