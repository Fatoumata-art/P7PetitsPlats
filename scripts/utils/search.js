import { createCards } from "./card.js";


const cardContainer = document.querySelector(" .recipes-cards-container ");
const search = document.getElementById("search_recipe");
const totalRecipe = document.getElementById("totalRecipe");
let msg = document.querySelector(".container_header span");

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
            const searchValue = e.target.value//.toLowerCase();
           // console.log(searchValue);
            let count = 0
            const  filterData = []

            for (let element of recipes) {
                if ( element.name.includes(searchValue) ||
                element.description.includes(searchValue) ||
                element.ingredients.includes(searchValue)) {
                    filterData.push(element)
                    count++
                }
            }
            
            displayRecipes(filterData);
            totalRecipe.textContent =  ` ${count} recettes `;  
              
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