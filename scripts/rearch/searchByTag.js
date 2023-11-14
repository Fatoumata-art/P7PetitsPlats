import { displayRecipes } from "./searchByInputBar.js";

//const recipes = [];
export const displayRecipesByTag = (recipes) => {
        const div = document.querySelector(".tags_list");
        const options = document.querySelectorAll("li");
        for(let option of options){

          option.addEventListener('click', () => {

            const tag = document.createElement("div");
            tag.setAttribute("class", "item-tag");
            tag.innerHTML  = `
              <span>${option.innerText}</span>
              <button type="button" class="btn-rm-tag">
                  <i class="fa fa-times" aria-hidden="true"></i>
              </button>
              `;
              const clear = tag.querySelector('.btn-rm-tag');
              clear.addEventListener("click", () => {
                tag.style.display = "none";
              })
               div.appendChild(tag);
            // if(div =""){
            //   displayRecipes(recipes);
            // }

            let tagValue = option.getAttribute("value");
            let count = 0
            const  filterData = [];
            
            recipes.forEach(recipe => {
              // display recipes by tag ingredients
              for (let j = 0; j < recipe["ingredients"].length; j++) {
                const ingredients = recipe["ingredients"][j];
               
                if (  ingredients.ingredient.includes(tagValue) ){
                      filterData.push(recipe)
                      count++;
                }
              }
              if(recipe["ustensils"].includes(tagValue) || recipe.appliance.includes(tagValue)){
                filterData.push(recipe)
                count++;
              }
             
            });
             
            displayRecipes(filterData);
            totalRecipe.textContent =  ` ${count} recettes `; 
          })
        }
}


