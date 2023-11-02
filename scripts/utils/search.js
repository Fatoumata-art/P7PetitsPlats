import { createCards } from "./card.js";


const cardContainer = document.querySelector(" .recipes-cards-container ");
const search = document.getElementById("search_recipe");
const totalRecipe = document.getElementById("totalRecipe");
let msg = document.querySelector(".container_header .msgError");
console.log(msg)
const figure = document.getElementsByClassName("recipe-card");

   /*export const filterRecipes = () => {
        search.addEventListener("input", (e) => {
            const searchValue = e.target.value//.toLowerCase();
           // console.log(searchValue);
            let count = 0   
            for (let i = 0; i < figure.length; i++) { 
                if (!figure[i].innerHTML.toLowerCase().includes(searchValue)) {
                    figure[i].style.display= "none";   
                    console.log(figure.length)
                }
                else {
                    figure[i].style.display = "block" ; 
                    count++
                }
            }

            totalRecipe.textContent =  ` ${count} recettes `;  
              
        })
       totalRecipe.textContent =  ` ${ figure.length} recettes `;  
    }*/

    export const filterRecipes = (recipes) => {
        search.addEventListener("input", (e) => {
            const searchValue = e.target.value,
            value = searchValue.toLowerCase();
           
            if(value.length < 3){
                msg.innerHTML = "Veiller saisir 3 caractères minimum";
               msg.style.color = "white";
               return false;
            }
            msg.innerHTML =""
                let count = 0
                const  filterData = [];
    
               
                for (let element of recipes) {
                    if ( element.name.includes(value) ||
                    element.description.includes(value) ||
                    element.ingredients.includes(value)) {
                        filterData.push(element)
                        count++
                    }
                }
                   
            displayRecipes(filterData);
            totalRecipe.textContent =  ` ${count} recettes `;  
            if(count == 0){
                const message = document.createElement('div');
                message.setAttribute("class", "message_recipe")
                message.innerHTML =`  « Aucune recette ne contient ‘${searchValue}’ vous pouvez chercher «tarte aux pommes », « poisson », etc. `;  
                cardContainer.textContent ="";
                cardContainer.appendChild(message)

            }
           
        })
      
    }

    export const displayRecipes = (data) => {

        cardContainer.innerHTML=''

        const result = data.map(recipe => {
                    createCards(recipe)
            })
            totalRecipe.innerHTML =  ` ${ result.length} recettes `;
            
            
    }  

    //Total recettes
     //Total recettes
     
  
 


    //  export const clearButton = () => {
    //     let clear = document.getElementsByTagName('.fa-times')
    //    // console.log(clear)
    //     let inputs = document.getElementsByTagName("input");
    //     //console.log(inputs);
      
    //     for(let i = 0; i < clear.length; i++){
    //       clear[i].addEventListener('click', () => {
          
    //         inputs.forEach(input => input.value = '');
    //         clear.style.display = "none";
    //       })
    //     }
           
        
    //         // inputs.addEventListener('input', () => {
    //         //   clear.style.display = "block";
    //         // })
        
    //   }
      
      
    //   clearButton();