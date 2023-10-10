

  
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
                <p></p>${recipe.description}</p>
            </div>
            <div>
                <h4 class="sub_titie">INGREDIENTS</h4>

                <ul class="card-text-ingredients>
                <li class="list-ingredient">
                </li>
                </ul>
            </div>
        </figcaption>
    
        `;
    
        getIngredients(card, recipe);
        getUstensils(recipe)
        cardContainer.appendChild(card);
    }
    
   
    function getIngredients(card, recipe){
        for (let j = 0; j < recipe["ingredients"].length; j++) {
            let ingredient = recipe["ingredients"][j];
            console.log("infredient", ingredient)

 const ul = card.querySelector('ul');

        const li =  `<li> ${ingredient["ingredient"]}</li>
                    <span>${ingredient["quantity"]} ml</span>
                    `;
        console.log( "liste", li)
       // li.innerText = ; //
       // ul.inserAdjacentHTML('beforeend',li);
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
    
    
  
 

 

