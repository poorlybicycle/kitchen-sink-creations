const searchBtn = document.querySelector("#searchRecipes");
const testArr = ["pizza", "bagels", "bacon (toasted)", "scrambled eggs"]
function showResults() {
    document.querySelector("#recipeContainer").innerHTML = "";
    //perform search and with results, create html

    for(i=0;i<testArr.length; i++) {
        const newP = document.createElement("p");
        newP.textContent = testArr[i];

        document.querySelector("#recipeContainer").appendChild(newP)
    }
}

searchBtn.addEventListener("click", showResults)