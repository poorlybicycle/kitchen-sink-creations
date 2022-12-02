const searchBtn = document.querySelector("#searchRecipes");


const recipeArr = ['Recipe Name: Depression Pie, time: 5, serving: 8, ingredient: pie crust, water, sugar, flour, butter, vanilla extract , Description: A Great Depression era water pie recipe. Only requires a few simple ingredients for a creamy, buttery pie!']
function showResults(event) {

    document.querySelector("#recipeContainer").innerHTML = `${recipeArr}`;
    //perform search and with results, create html

    for(i=1;i<recipeArr.length; i++) {
        const newP = document.createElement("p");
        newP.textContent = testArr[i];

        document.querySelector("#recipeContainer").appendChild(newP)
    }
}


searchBtn.addEventListener("click", showResults)
