import { createCards } from "./card.js";


const cardContainer = document.querySelector(" .recipes-cards-container ");
const search = document.getElementById("search_recipe");
const totalRecipe = document.getElementById("totalRecipe");
let msg = document.querySelector(".container_header span");


   export const filterRecipes = (recipes) => {
        search.addEventListener("input", (e) => {
            const searchValue = e.target.value.toLowerCase();
            console.log(searchValue);
            const  filterData = recipes.filter(element => {
                    console.log(element)
                    return ( element.name.includes(searchValue) ||
                             element.description.includes(searchValue) ||
                             element.ingredients.includes(searchValue)
                    );
                    })
                   // console.log("filterData", filterData);
                   displayRecipes(filterData);
            })
            
    }
    
    export const displayRecipes = (data) => {

        cardContainer.innerHTML=''

    const result = data.map(recipe => {
                    createCards(recipe)
            })
            //Total recettes
            totalRecipe.innerHTML =  ` ${ result.length} recettes `;
            
            // vérification si au moins une recette est sélectionnée. Sinon on affiche un message
            if(result.length == 0){
                let searchValue = search.value, value = searchValue.toLowerCase();

                msg.style.display = "block";
            }

}  



    // const clearButton = () => {

    //}