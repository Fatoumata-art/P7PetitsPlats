// imported files
import { recipes } from "../data/recipes.js";

//Traitement de filter select
const ingredientSelect = document.querySelector('.select_header');
const ingredients = document.querySelectorAll('.ingredient');

  ingredientSelect.addEventListener('click', () => {
    ingredientSelect.classList.toggle('open');
  })

  ingredients.forEach(ingredient => {
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

//   <div class="recipes-filter"> 
//   <div class="select_header">
//       <span class="select_title">Ingredients</span>
//       <span class="arrow_icon">
//           <i class="fa fa-chevron-down" aria-hidden="true"></i>
//       </span>
//   </div>
//   <ul class="list_ingredient">
//       <li class="ingredient">
//           <span class="checkbox">
//               <i class="fa fa-check check-icon"></i>
//           </span>
//           <span class="ingredient_text">salade</span>
//       </li>
//       <li class="ingredient">
//           <span class="checkbox">
//               <i class="fa fa-check check-icon"></i>
//           </span>
//           <span class="ingredient_text">tomate</span>
//       </li>
//       <li class="ingredient">
//           <span class="checkbox">
//               <i class="fa fa-check check-icon"></i>
//           </span>
//           <span class="ingredient_text">onion</span>
//       </li>
//   </ul>
// </div>

  const cardContainer = document.querySelector('.recipes-cards-container');

  const getRecipes = () => {

    
    // fetch('./data/recipes.js')
    //   .then(response => {
    //     console.log(response);
    //    return response.json();
    //   })
      
        recipes.map(recipe => {
          console.log("recette", recipe);
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
                  <ul>
                    <li>${ingredients.ingredient}
                      <span>
                      ${ingredients.quantity} ${ingredients.unit}
                      </span>
                    </li>
                  </ul>
              </div>
          </figcaption>
     
            `;
            cardContainer.appendChild(card);
        })
    }
   

   getRecipes();

  //     if (recipesData.ok) {
  //       const data = recipesData.json()
  //       recipes = data.recipes
  //       console.log("recettes",recipes)
  //   }
  //   return recipes
  // } catch (err) {
  //   console.log(err)
  //   return new Error('impossible de contacter le serveur')
  // }

 


// function init(){

//   const filterData = getRecipes();
//  //console.log(filterData)
// }

// init();