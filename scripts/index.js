const div = document.querySelectorAll('.recipes-filter');

  const icon = document.querySelectorAll('.container-icon');

    for(let i = 0; i < div.length; i++){
      //console.log('div', div[i])
    }


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