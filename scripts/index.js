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

    // for(let i = 0; i < ingredientSelect.length; i++){
    //   //console.log('div', div[i])
    // }


  //const selectBtn = div.querySelector('.filter-containe');


  const filterContainer = document.querySelector('.filter_container');

  function getRecipes(){

    //try {
      //let recipes = [];
      fetch('./data/recipes.json')
      .then(response => {
        console.log(response)
       return response.json();
     
      })
      .then(data => {
        console.log(data)
      })
   }

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

 


function init(){

  const filterData = getRecipes();
 //console.log(filterData)
}

init();