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
                    console.log(lement)
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
       
}  



    // const clearButton = () => {

    //}