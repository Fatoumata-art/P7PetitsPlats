import { recipes } from "../../data/recipes.js";
import { createCards } from "./card.js";


const cardContainer = document.querySelector(" .recipes-cards-container ");
const search = document.getElementById("search_recipe");
const totalRecipe = document.getElementById("totalRecipe");
let msg = document.querySelector(".container_header span");

const figure = document.getElementsByClassName("recipe-card");
console.log(figure);

   export const filterRecipes = () => {
        search.addEventListener("input", (e) => {
            const searchValue = e.target.value//.toLowerCase();
            console.log(searchValue);
               
            for (let i = 0; i < figure.length; i++) { 
                if (!figure[i].innerHTML.toLowerCase().includes(searchValue)) {
                    figure[i].style.display= "none";
                   
                }
                else {
                   let recipesDisplayed = figure[i].style.display ="block"; 
                    console.log(figure)
                   // totalRecipe.textContent =  ` ${ recipesDisplayed.length} recettes `;    
                }
                     
            }
           
        })
         
    }

    export const displayRecipes = (data) => {

        cardContainer.innerHTML=''

        const result = data.map(recipe => {
                    createCards(recipe)
            })
            totalRecipe.innerHTML =  ` ${ result.length} recettes `;
            
            // vérification si au moins une recette est sélectionnée. Sinon on affiche un message
            if(result.length == 0){
                let searchValue = search.value, value = searchValue.toLowerCase();

                msg.style.display = "block";
            }

    }  

    //Total recettes
     //Total recettes
     
  
 


    // const clearButton = () => {

    //}