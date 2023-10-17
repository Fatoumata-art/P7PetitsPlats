

  
export const createCards = (recipe) => {
        const cardContainer = document.querySelector('.recipes-cards-container');
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
                <ul class="card-text-ingredients">
                </ul>
            </div>
        </figcaption>
    
        `;
    
        getIngredients(card, recipe);
        //getUstensils(recipe)
        cardContainer.appendChild(card);
    }
    
   
    function getIngredients(card, recipe){
        for (let j = 0; j < recipe["ingredients"].length; j++) {
            let ingredient = recipe["ingredients"][j];

        const ul = card.querySelector('ul');
        const li = document.createElement("li");
        li.classList.add('list')
        li.innerHTML =  `<li class="list-ingredient"> ${ingredient["ingredient"]}</li> `;
                    
        let quantity_text = "";
        // We check if we have a quantity to show
            if(ingredient.hasOwnProperty("quantity"))
            {
                quantity_text = "" + ingredient["quantity"];
                // We check if there is a unit to diplay
                if(ingredient.hasOwnProperty("unit"))
                {
                    quantity_text+=" " + ingredient["unit"];
                }
            }
        const ingredientQuantity = document.createElement("span"); 
        ingredientQuantity.textContent = quantity_text;      
        ul.appendChild(li);
        li.appendChild(ingredientQuantity);
       }

    }

    function getUstensils(recipe){
        for (let j = 0; j < recipe["ustensils"].length; j++) {
            let ustensil = recipe["ustensils"][j];
            console.log("ustensils", ustensil)

 const ul = document.createElement('ul');

        const li =  `<li> ${ustensil}</li>
                    `;
        console.log( "liste", li)
       // li.innerText = ; //
      
       // ul.inserAdjacentHTML('beforeend',li);
       }

    }
    
    
  
 

 

