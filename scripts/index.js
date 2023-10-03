// imported files
import { recipes } from "../data/recipes.js";



  const filterDom = () => {

    const filterContainer = document.querySelector('.filter_container_select');
    const selectFilter = document.createElement('div');
      selectFilter.classList.add('recipes-filter');
      selectFilter.innerHTML = `
        <div class="select_header">
          <span class="select_title">Ingredients</span>
          <span class="arrow_icon">
              <i class="fa fa-chevron-down" aria-hidden="true"></i>
          </span>
       </div>
          <ul class="list_ingredient">
              <li class="ingredient_liste">
                  <span class="checkbox">
                      <i class="fa fa-check check-icon"></i>
                  </span>
                  <span class="ingredient_text">hhhh</span>
              </li>
              <li class="ingredient_liste">
                  <span class="checkbox">
                      <i class="fa fa-check check-icon"></i>
                  </span>
                  <span class="ingredient_text">tomate</span>
              </li>
              <li class="ingredient_liste">
                  <span class="checkbox">
                      <i class="fa fa-check check-icon"></i>
                  </span>
                  <span class="ingredient_text">onion</span>
              </li>
          </ul>
      `;
      filterContainer.appendChild(selectFilter);
  }

  filterDom();

  //Traitement de filter select
const ingredientSelect = document.querySelector('.select_header');
const ingredientsFilter = document.querySelectorAll('.ingredient_liste');

  ingredientSelect.addEventListener('click', () => {
    ingredientSelect.classList.toggle('open');
  })

  ingredientsFilter.forEach(ingredient => {
    ingredient.addEventListener('click', () => {
      ingredient.classList.toggle('checked');

      let checked = document.querySelectorAll('.checked');
      let selectTitle = document.querySelector('.select_title');

        if(checked && checked.length > 1){
          selectTitle.innerHTML = `${checked.length} Ingredients`;
      
        }else if(checked && checked.length == 1 ){
          selectTitle.innerHTML =`${checked.length} Ingredient`;
        }else{
          selectTitle.innerHTML = "Ingredients";
        } 
    })
  })
  

// function handlePress(){
  
// }

 

  const getRecipesCard = () => {
    const cardContainer = document.querySelector('.recipes-cards-container');
        recipes.map(recipe => {
          //console.log("recette", recipe);
          const card = document.createElement('figure');
          card.classList.add('recipe-card');
          card.innerHTML = `
          <div class="card-img">
              <img src="assets/images/${recipe.image}" alt="${recipe.name}">
              <span class="card-time">${recipe.time} mn</span>
          </div>
          <figcaption class="card-text">
              <div>
                  <h3 class="title">${recipe.name}</h3>
                  <h4 class="sub_titie">RECETTE</h4>
                  <p>${recipe.description}</p>
              </div>
              <div>
                  <h4 class="sub_titie">INGREDIENTS</h4>

                  <ul class="card-text-ingredients>
                  <li></li>
                  </ul>
              </div>
          </figcaption>
     
            `;
            
            getIngredients(card, recipe)
            cardContainer.appendChild(card);
        })
    }
   
    function getIngredients(card, recipe){

      const ul = card.querySelector('ul');
      recipe.ingredients.map(ingredient => {
        const li = document.querySelector("li");
        li.innerHTML = `${ingredient.ingredient} <span>${ingredient.quantity} ml </span>`
        ul.appendChild(li);
      })

                              }
    
  
 

 

function init(){
  
  //let  filterRecipe = filterDom();
  //console.log(`I feel ${filterRecipe.repeat(3)}`);
    
  getRecipesCard();

}

init();