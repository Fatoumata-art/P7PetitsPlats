

export const filterIngredients = () => {

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
          <ul class="list_option">
            <div class="search">
            <input type="text" id="optiontSearch" placeholder="">
            <i class="fal fa-search"></i>
          </div>
          </ul>
      `;
      const selectButton = selectFilter.querySelector(".select_header")
        selectButton.addEventListener('click',() =>{
        selectButton.classList.toggle('open');
    
        })
      filterContainer.appendChild(selectFilter);
  }

 export const listIngredient = (recipes) => {
    const selectFilter = document.querySelector('.recipes-filter');
    recipes.map(element => {
     // console.log(element["ingredients"]);
      let ingredients = element["ingredients"];
      const ul = selectFilter.querySelector(".list_option");

      ingredients.filter(ingredient => {
       // console.log(ingredient["ingredient"])
        const li = document.createElement('li');
        li.setAttribute('class', 'option')
        li.innerHTML =  `${ ingredient["ingredient"] }`;
        ul.appendChild(li);
      });
    });

    
    
  
        
}
