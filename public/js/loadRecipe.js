const searchBtn = document.querySelector("#searchRecipes");


// const testArr = ["pizza", "bagels", "bacon (toasted)", "scrambled eggs"]
function showResults(event) {
    fetch('/api/ingredients/newRecipe', {
        method: "POST",
        body: JSON.stringify({
         recipe_name: event.target.dataset.recipe_name  
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    document.location.reload();
}
//     document.querySelector("#recipeContainer").innerHTML = `${Recipe}`;
//     //perform search and with results, create html

//     for(i=0;i<testArr.length; i++) {
//         const newP = document.createElement("p");
//         newP.textContent = testArr[i];

//         document.querySelector("#recipeContainer").appendChild(newP)
//     }
// }

// function newCard() {

//     document.getElementById("card1").innerHTML = `<img src='img/${firstCard}.png'>"`;


searchBtn.addEventListener("click", showResults)
