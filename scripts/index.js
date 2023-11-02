// imported files
import { recipes } from "../data/recipes.js";
import { filterIngredients , listIngredient } from "./utils/filterIngredients.js";
import { filteAppareils, listAppareil } from "./filterAppareils.js";
import { filterUstensils, listUstensil } from "./utils/filterUstensils.js";
import { createCards } from "./utils/card.js";

function init(){
  // selet filter
  const ingredient = filterIngredients();
  listIngredient(recipes);
  const Appareil = filteAppareils();
  listAppareil(recipes)

  const ustensil = filterUstensils();
  listUstensil(recipes);
 
  

  //Total recettes
  const totalRecipe = document.getElementById("totalRecipe");
  totalRecipe.textContent =  ` ${ recipes.length} recettes `;
  

 
  recipes.map(recipe => {
    //console.log("recette", recipe);
    createCards(recipe);
    //getIngredients(card, recipe)
    
})

}

export const clearButton = () => {
  let clear = document.getElementsByTagName('.fa-times')
  console.log(clear)
  let inputs = document.getElementsByTagName("input");
  console.log(inputs);

  for(let i = 0; i < clear.length; i++){
    clear[i].addEventListener('click', () => {
    
      inputs.forEach(input => input.value = '');
      clear.style.display = "none";
    })
  }
     
  
      // inputs.addEventListener('input', () => {
      //   clear.style.display = "block";
      // })
  
}


clearButton();


  init()