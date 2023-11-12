import { createCards } from "../DomElements/cardDom.js";


const cardContainer = document.querySelector(" .recipes-cards-container ");
const search = document.getElementById("search_recipe");
const totalRecipe = document.getElementById("totalRecipe");
const msg = document.querySelector(" .msgError");
//const figure = document.getElementsByClassName("recipe-card");
const clear = document.querySelector('.container_header .fa-times');

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

            //message under inputSearch
            if(value.length < 3){
                msg.innerHTML = "Veiller saisir 3 caractères minimum";
                msg.style.color = "white";
                clear.style.display = "block";
                clear.addEventListener("click", () => {
                    search.value = '';
                    clear.style.display = "none";
                })
               return false;
            }
            msg.innerHTML =""
            let count = 0
            const  filterData = [];

            for (const element of recipes) {
                if ( element.name.includes(value) ||
                element.description.includes(value) ||
                element.ingredients.includes(value)) {
                    console.log("hello");
                    filterData.push(element)
                    count++
                }
            }
                   
            displayRecipes(filterData);
            totalRecipe.textContent =  ` ${count} recettes `;  
            if(count == 0){
                const message = document.createElement('div');
                message.setAttribute("class", "message_recipe")
                message.innerHTML =`  « Aucune recette ne contient <span style="font-weight:bolder">‘${searchValue}’</span> vous pouvez chercher «tarte aux pommes », « poisson », etc. `;  
                cardContainer.appendChild(message);
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

    